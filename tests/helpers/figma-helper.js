import { promises as fs } from 'fs';
import { createWriteStream } from 'fs';
import path from 'path';
import https from 'https';

/**
 * Downloads a screenshot from Figma design
 * This uses the Figma API to get the actual design screenshot
 */
export async function downloadFigmaScreenshot() {
  const figmaFileKey = process.env.FIGMA_FILE_KEY || 'qh39N0zcMJfRKKkjPnBXKJ';
  const nodeId = process.env.FIGMA_NODE_ID || '109:1005';
  const figmaToken = process.env.FIGMA_ACCESS_TOKEN || process.env.figma_token;
  
  if (!figmaToken) {
    console.warn('⚠️  FIGMA_ACCESS_TOKEN not set. Skipping Figma screenshot download.');
    console.warn('   Set it in .env file or environment variables to enable design comparison.');
    return;
  }
  
  try {
    // Get image URL from Figma API
    const imageUrl = await getFigmaImageUrl(figmaFileKey, nodeId, figmaToken);
    
    if (!imageUrl) {
      console.warn('⚠️  Could not get Figma image URL');
      return;
    }
    
    // Download the image
    const screenshotsDir = path.join(process.cwd(), 'tests', 'figma-screenshots');
    await fs.mkdir(screenshotsDir, { recursive: true });
    
    const imagePath = path.join(screenshotsDir, 'contact-form-figma.png');
    await downloadImage(imageUrl, imagePath);
    
    console.log('✅ Figma screenshot downloaded:', imagePath);
  } catch (error) {
    console.error('❌ Error downloading Figma screenshot:', error.message);
  }
}

async function getFigmaImageUrl(fileKey, nodeId, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.figma.com',
      path: `/v1/images/${fileKey}?ids=${nodeId}&format=png&scale=2`,
      method: 'GET',
      headers: {
        'X-Figma-Token': token,
      },
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.err) {
            reject(new Error(response.err));
          } else {
            const imageUrl = response.images[nodeId];
            resolve(imageUrl);
          }
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', reject);
    req.end();
  });
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${res.statusCode}`));
        return;
      }
      
      const fileStream = createWriteStream(filepath);
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

/**
 * Compare two images and return the difference percentage
 */
export async function compareImages(image1Path, image2Path) {
  // This is a placeholder - you can enhance this with pixelmatch or similar
  // For now, Playwright's built-in screenshot comparison will handle this
  console.log(`Comparing ${image1Path} with ${image2Path}`);
  return 0; // percentage difference
}
