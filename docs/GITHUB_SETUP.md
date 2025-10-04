# GitHub Setup Instructions

## ✅ Repository Status

Your Git repository is ready with:
- ✅ 79 files committed
- ✅ Professional README.md
- ✅ Proper .gitignore
- ✅ All shadcn/ui components (50+)
- ✅ Complete project structure

Commit Hash: `f7181c9`
Commit Message: "Initial commit: React + Vite + shadcn/ui starter with 50+ components"

## 📤 How to Push to GitHub

### Option 1: Using HTTPS (Recommended for beginners)

1. **Create a new repository on GitHub:**
   - Go to: https://github.com/new
   - Repository name: `figma-demo` (or your preferred name)
   - Description: "React + Vite + shadcn/ui starter template with 50+ components"
   - **Public** or **Private** (your choice)
   - ⚠️ **DO NOT** check "Add a README file"
   - ⚠️ **DO NOT** check "Add .gitignore"
   - Click "Create repository"

2. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git branch -M main
   git push -u origin main
   ```

   **Example:**
   ```bash
   git remote add origin https://github.com/johndoe/figma-demo.git
   git branch -M main
   git push -u origin main
   ```

3. **Enter credentials when prompted:**
   - Username: Your GitHub username
   - Password: Your Personal Access Token (not your password)
     - Create token: https://github.com/settings/tokens

### Option 2: Using SSH (For advanced users)

1. **Set up SSH key** (if not already done):
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com"
   ```

2. **Add SSH key to GitHub:**
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Add to GitHub: https://github.com/settings/keys

3. **Push your code:**
   ```bash
   git remote add origin git@github.com:YOUR-USERNAME/YOUR-REPO.git
   git branch -M main
   git push -u origin main
   ```

## 🔄 Future Updates

After the initial push, to update your repository:

```bash
git add .
git commit -m "Your commit message"
git push
```

## 📋 Common Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push

# Pull latest changes
git pull

# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

## 🎯 Repository Features to Enable

After pushing to GitHub, consider enabling:

1. **GitHub Pages** (for hosting demo)
   - Settings → Pages → Source: GitHub Actions
   - Deploy with Vite: https://vitejs.dev/guide/static-deploy.html#github-pages

2. **Branch Protection**
   - Settings → Branches → Add rule for `main`

3. **Issues & Discussions**
   - Settings → Features → Enable Issues & Discussions

4. **Topics/Tags**
   - Add topics: `react`, `vite`, `shadcn-ui`, `tailwindcss`, `typescript`

## 🚀 Next Steps

1. ✅ Push to GitHub (follow instructions above)
2. Add a nice banner/screenshot to README
3. Set up GitHub Actions for CI/CD
4. Deploy to Vercel/Netlify
5. Share your project!

## 🆘 Troubleshooting

**"Authentication failed"**
- Use Personal Access Token instead of password
- Create token: https://github.com/settings/tokens

**"Repository already exists"**
- Remove existing remote: `git remote remove origin`
- Add new remote: `git remote add origin <url>`

**"Permission denied"**
- Check if you're the owner of the repository
- Check SSH key is added to GitHub

## 📚 Resources

- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

Need help? Open an issue on GitHub or check the documentation above.
