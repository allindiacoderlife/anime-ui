# Quick Vercel Deployment Checklist

## ✅ Pre-Deployment Setup Complete

The following files have been configured for Vercel deployment:

- [x] `next.config.mjs` - Configured for monorepo with optimizations
- [x] `vercel.json` - Vercel-specific settings
- [x] `.vercelignore` - Files to ignore during deployment
- [x] `.env.local.example` - Environment variable template
- [x] `layout.tsx` - Added proper metadata with metadataBase
- [x] Removed extra `package-lock.json` (using pnpm)
- [x] Build tested locally ✓

## 🚀 Deploy to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Configure for Vercel deployment"
git push origin main
```

### Step 2: Import to Vercel
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/www`
   - **Build Command**: `pnpm build` (default is fine)
   - **Install Command**: `pnpm install --no-frozen-lockfile`
   - **Node.js Version**: 20.x

### Step 3: Add Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables, add:

```bash
# Required for production
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app

# Optional (if using AI features)
OPENAI_API_KEY=your_openai_api_key_here
```

**Important**: Update `NEXT_PUBLIC_APP_URL` with your actual Vercel domain after first deployment!

### Step 4: Deploy
Click "Deploy" and wait for the build to complete.

## 🔧 Common Deployment Issues

### Issue: "Module not found" errors
**Solution**: Ensure root directory is set to `apps/www`

### Issue: Build fails
**Solution**: Check build logs in Vercel dashboard
- Run `pnpm build` locally first to catch errors
- Ensure all dependencies are in `package.json`

### Issue: GSAP plugins not found
**Solution**: 
- If using GSAP Club plugins, add npm token to environment variables
- See full VERCEL_DEPLOYMENT.md for GSAP setup

### Issue: Environment variables not working
**Solution**: 
- Redeploy after adding variables
- Make sure public variables have `NEXT_PUBLIC_` prefix

## 📝 Post-Deployment

After successful deployment:

1. **Update CLI Registry URL**
   ```bash
   cd packages/cli
   # Update .env file with production URL
   echo "ANIME_UI_REGISTRY_URL=https://your-domain.vercel.app" > .env
   pnpm build
   ```

2. **Test the Deployment**
   - Visit your deployed URL
   - Check all pages load correctly
   - Test component animations
   - Verify documentation renders

3. **Configure Custom Domain** (optional)
   - Go to Vercel Dashboard → Domains
   - Add your custom domain
   - Update `NEXT_PUBLIC_APP_URL` environment variable

4. **Enable Analytics** (optional)
   ```bash
   pnpm add @vercel/analytics
   ```
   Then add to `layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   
   <Analytics />
   ```

## 📚 Additional Resources

- **Full Deployment Guide**: See `VERCEL_DEPLOYMENT.md` for detailed instructions
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/app/building-your-application/deploying

## 🎉 You're Ready!

Your anime-ui project is now configured and ready to deploy to Vercel!

**Build Status**: ✅ Passing locally
**Configuration**: ✅ Complete
**Ready to Deploy**: ✅ Yes
