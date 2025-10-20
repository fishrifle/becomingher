# 🚀 Becoming Her - Quick Start Guide

## ✅ What's Done
- Full monetization system deployed
- Pricing page live at `/pricing`
- Stripe + Clerk integration ready
- Code pushed to GitHub
- Vercel will auto-deploy

## 💰 Revenue Model
**Free Tier:** Basic features
**Premium:** $12.99/month or $119.99/year (23% savings)

## 📋 TODO: Get API Keys (15 minutes)

### 1️⃣ Clerk (Authentication) - FREE
1. Go to: https://clerk.com
2. Sign up → Create Application
3. Copy API keys
4. Add to Vercel environment variables

### 2️⃣ Stripe (Payments) - FREE Test Mode
1. Go to: https://stripe.com
2. Sign up → Switch to Test Mode
3. **Products:**
   - Create "Premium Monthly" ($12.99)
   - Create "Premium Yearly" ($119.99)
4. Copy API keys + Price IDs
5. Set up webhook: `https://becomingher-ik3k.vercel.app/api/webhook`
6. Add all to Vercel environment variables

### 3️⃣ Add to Vercel
```bash
# In your Vercel dashboard → Settings → Environment Variables

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY=price_...
NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY=price_...
NEXT_PUBLIC_APP_URL=https://becomingher-ik3k.vercel.app
```

## 🧪 Test Payments
Use Stripe test card: **4242 4242 4242 4242**
- Expiry: Any future date
- CVC: Any 3 digits

## 📊 Track Revenue
- Stripe Dashboard: https://dashboard.stripe.com
- See customers, subscriptions, revenue

## 🎯 Your URLs
- **Live Site:** https://becomingher-ik3k.vercel.app
- **Pricing Page:** https://becomingher-ik3k.vercel.app/pricing
- **GitHub:** https://github.com/fishrifle/becomingher

## 💝 What You're Selling

**Premium Features ($12.99/mo):**
- ✨ Unlimited AI companion access
- 📅 Advanced HRT tracking with reminders
- 💄 Full makeup tutorial library (25+ videos)
- 🧘‍♀️ Complete yoga program
- 📸 Unlimited photo storage
- 🎵 Chakra frequency healing
- 🌙 All hypnosis sessions
- 💝 Priority support
- 🚫 Ad-free experience

## 📖 Full Documentation
See `MONETIZATION_SETUP.md` for complete details

---

**You're ready to make money! 💰✨**

Just add the API keys to Vercel and you're live!
