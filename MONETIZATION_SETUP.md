# Becoming Her - Monetization Setup Guide 💰

## Overview
Your app now has a complete monetization system with:
- ✅ Freemium subscription model ($12.99/month or $119.99/year)
- ✅ Stripe payment integration
- ✅ Clerk authentication
- ✅ Premium content gating
- ✅ Beautiful pricing page

---

## 🚀 Quick Start - Get Your API Keys

### 1. Set Up Clerk Authentication (FREE)

1. **Go to** [https://clerk.com](https://clerk.com)
2. **Sign up** for a free account
3. **Create a new application**
   - Name it "Becoming Her"
   - Choose "Email & Password" + "Google OAuth" (optional)
4. **Get your API keys:**
   - Go to "API Keys" in the dashboard
   - Copy your `Publishable Key` and `Secret Key`

5. **Update `.env.local`:**
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
   CLERK_SECRET_KEY=sk_test_xxxxx
   ```

---

### 2. Set Up Stripe Payments

1. **Go to** [https://stripe.com](https://stripe.com)
2. **Sign up** for an account
3. **Switch to Test Mode** (toggle in top right)

#### Get Stripe API Keys:
4. Go to **Developers → API keys**
5. Copy:
   - `Publishable key` → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `Secret key` → `STRIPE_SECRET_KEY`

#### Create Products & Prices:
6. Go to **Products → Add Product**

**Product 1: Premium Monthly**
   - Name: "Becoming Her Premium (Monthly)"
   - Description: "Full access to all premium features"
   - Price: $12.99 USD
   - Billing: Recurring - Monthly
   - After creating, copy the **Price ID** (starts with `price_`)

**Product 2: Premium Yearly**
   - Name: "Becoming Her Premium (Yearly)"
   - Description: "Full access with 23% savings"
   - Price: $119.99 USD
   - Billing: Recurring - Yearly
   - After creating, copy the **Price ID**

7. **Update `.env.local`:**
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
   STRIPE_SECRET_KEY=sk_test_xxxxx
   NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY=price_xxxxx
   NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY=price_xxxxx
   ```

#### Set Up Webhooks (Important!):
8. Go to **Developers → Webhooks**
9. Click **Add endpoint**
10. Enter your production URL: `https://becomingher-ik3k.vercel.app/api/webhook`
11. Select events:
    - `checkout.session.completed`
    - `customer.subscription.deleted`
    - `customer.subscription.updated`
12. Copy the **Signing secret** (starts with `whsec_`)
13. **Update `.env.local`:**
    ```env
    STRIPE_WEBHOOK_SECRET=whsec_xxxxx
    ```

---

### 3. Update Environment Variables

Your complete `.env.local` should look like:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here

# Stripe Price IDs
NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY=price_your_monthly_id
NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY=price_your_yearly_id

# App URL
NEXT_PUBLIC_APP_URL=https://becomingher-ik3k.vercel.app
```

---

## 📝 Implement Payment Buttons

### Update Pricing Page Buttons

Edit `app/pricing/page.tsx` and replace the CTA buttons:

```tsx
<button
  onClick={async () => {
    if (plan.name === "Free") {
      // Redirect to sign up
      window.location.href = "/sign-up";
      return;
    }

    // For premium plans
    const priceId = billingPeriod === "monthly"
      ? process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY
      : process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, userId: "user-id-here" }),
    });

    const { url } = await response.json();
    window.location.href = url;
  }}
  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg"
>
  {plan.cta}
</button>
```

---

## 🔒 Premium Content Gating

### Example: Lock Premium Content

```tsx
import { isPremiumContent } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function PremiumPage() {
  const { userId } = await auth();
  const userTier = await getUserSubscriptionTier(userId);

  if (userTier !== "premium") {
    return (
      <div className="text-center p-12">
        <h2 className="text-3xl font-bold mb-4">Premium Content 💎</h2>
        <p className="mb-6">Upgrade to premium to access this feature!</p>
        <Link
          href="/pricing"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg"
        >
          Upgrade Now
        </Link>
      </div>
    );
  }

  return <div>Your premium content here!</div>;
}
```

---

## 🗄️ Database Setup (Next Step)

To store subscription status, you'll need a database. Recommended options:

### Option 1: Supabase (Easiest)
```bash
npm install @supabase/supabase-js
```

### Option 2: MongoDB
```bash
npm install mongodb mongoose
```

### Option 3: Prisma + PostgreSQL
```bash
npm install prisma @prisma/client
```

**Schema needed:**
```sql
users (
  id: string (Clerk user ID)
  email: string
  subscription_tier: enum('free', 'premium')
  stripe_customer_id: string
  stripe_subscription_id: string
  subscription_end_date: timestamp
)
```

---

## 💳 Testing Stripe Payments

Use these test cards:
- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- Use any future expiry date and any CVC

---

## 🚀 Deploy to Production

### 1. Add Environment Variables to Vercel:
```bash
vercel env add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
vercel env add CLERK_SECRET_KEY
vercel env add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
vercel env add STRIPE_SECRET_KEY
vercel env add STRIPE_WEBHOOK_SECRET
vercel env add NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY
vercel env add NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY
vercel env add NEXT_PUBLIC_APP_URL
```

### 2. Deploy:
```bash
git add .
git commit -m "Add monetization system"
git push
```

---

## 📊 Revenue Tracking

Track your revenue in:
- **Stripe Dashboard** → Revenue
- **Stripe Dashboard** → Customers
- **Stripe Dashboard** → Subscriptions

---

## ✅ Checklist

- [ ] Create Clerk account and get API keys
- [ ] Create Stripe account and get API keys
- [ ] Create Stripe products (Monthly & Yearly)
- [ ] Set up Stripe webhook
- [ ] Update all environment variables
- [ ] Test payment flow with test cards
- [ ] Set up database for subscription storage
- [ ] Deploy to production
- [ ] Switch Stripe to Live mode
- [ ] Update webhook URL for production

---

## 💝 Support

Questions? Email: support@becomingher.app

---

**You're all set! Your app is ready to make money! 💰✨**
