import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

console.log('\n🔧 Figma Visual Testing Configuration\n');
console.log('━'.repeat(50));

// Check token
const token = process.env.FIGMA_ACCESS_TOKEN || process.env.figma_token;
if (token) {
  const maskedToken = token.substring(0, 10) + '...' + token.substring(token.length - 4);
  console.log('✅ Figma Token:', maskedToken);
} else {
  console.log('❌ Figma Token: NOT SET');
  console.log('   Add to .env: figma_token=figd_your_token_here');
}

// Check file key
const fileKey = process.env.FIGMA_FILE_KEY || 'qh39N0zcMJfRKKkjPnBXKJ';
console.log('✅ Figma File Key:', fileKey);
if (!process.env.FIGMA_FILE_KEY) {
  console.log('   (using default)');
}

// Check node ID
const nodeId = process.env.FIGMA_NODE_ID || '109:1035';
console.log('✅ Figma Node ID:', nodeId);
if (!process.env.FIGMA_NODE_ID) {
  console.log('   (using default)');
}

console.log('━'.repeat(50));

// Show Figma URL
console.log('\n📐 Figma Design URL:');
console.log(`https://www.figma.com/design/${fileKey}/?node-id=${nodeId.replace(':', '-')}`);

console.log('\n📊 Test Configuration:');
console.log('Base URL: http://localhost:5178');
console.log('Test Directory: ./tests');
console.log('Browser: Chromium');

if (token) {
  console.log('\n✅ Configuration complete! Ready to run tests.');
  console.log('Run: npm test\n');
} else {
  console.log('\n⚠️  Please set your Figma token in .env file first.\n');
}

