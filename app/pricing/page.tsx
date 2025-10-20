"use client";

import Link from "next/link";
import { useState } from "react";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Free",
      price: { monthly: 0, yearly: 0 },
      description: "Start your journey with essential features",
      features: [
        "Basic HRT tracking",
        "Access to yoga basics",
        "3 makeup tutorials",
        "Journal access",
        "Community support",
        "Photo storage (10 photos)"
      ],
      cta: "Get Started Free",
      popular: false,
      bgGradient: "from-pink-100/20 via-purple-100/20 to-pink-100/20",
      borderColor: "border-pink-300/40"
    },
    {
      name: "Premium",
      price: { monthly: 12.99, yearly: 119.99 },
      description: "Everything you need for your transformation",
      features: [
        "✨ Unlimited AI companion access",
        "📅 Advanced HRT tracking with reminders",
        "💄 Full makeup tutorial library (25+ videos)",
        "🧘‍♀️ Complete yoga program & routines",
        "📸 Unlimited photo vault storage",
        "🎵 Chakra frequency healing sessions",
        "🌙 All hypnosis sessions",
        "📝 Advanced journaling features",
        "💝 Priority support",
        "🚫 Ad-free experience"
      ],
      cta: "Start Premium",
      popular: true,
      bgGradient: "from-pink-300/30 via-purple-300/30 to-fuchsia-300/30",
      borderColor: "border-pink-400/60"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-pink-50/5 to-purple-50/5">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-100/10 via-purple-100/10 to-pink-100/10 backdrop-blur-sm border-b-2 border-pink-300/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2">
              ✨ Becoming Her 💖
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Choose Your Journey 💕
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            Unlock your full potential with premium features designed to support every step of your beautiful transformation
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-lg ${billingPeriod === "monthly" ? "font-bold text-pink-500" : "text-foreground/60"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
            className="relative w-16 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 transition-colors"
          >
            <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg transition-transform ${billingPeriod === "yearly" ? "translate-x-9" : "translate-x-1"}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-lg ${billingPeriod === "yearly" ? "font-bold text-pink-500" : "text-foreground/60"}`}>
              Yearly
            </span>
            <span className="px-2 py-1 text-xs font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full">
              Save 23%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border-2 ${plan.borderColor} overflow-hidden ${plan.popular ? "shadow-2xl shadow-pink-300/30 transform scale-105" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-bl-2xl text-sm font-bold">
                  ⭐ Most Popular
                </div>
              )}

              <div className={`p-8 bg-gradient-to-br ${plan.bgGradient}`}>
                {/* Plan Header */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h2>
                  <p className="text-foreground/70 text-sm">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      ${plan.price[billingPeriod]}
                    </span>
                    <span className="text-foreground/60">
                      /{billingPeriod === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  {billingPeriod === "yearly" && plan.price.yearly > 0 && (
                    <p className="text-sm text-foreground/60 mt-2">
                      ${(plan.price.yearly / 12).toFixed(2)}/month billed annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg mb-8">
                  {plan.cta}
                </button>

                {/* Features */}
                <div className="space-y-3">
                  <p className="font-semibold text-foreground mb-4">What's included:</p>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions 💭
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Absolutely! You can cancel your subscription at any time. No questions asked, and you'll retain access until the end of your billing period."
              },
              {
                q: "Is my data private and secure?",
                a: "Yes! Your personal journey, photos, and information are encrypted and completely private. We never share your data with anyone."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, debit cards, and digital wallets through our secure Stripe payment system."
              },
              {
                q: "Can I switch between plans?",
                a: "Yes! You can upgrade to Premium at any time, and we'll prorate the difference for your current billing period."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-gradient-to-r from-pink-100/20 to-purple-100/20 rounded-xl p-6 border-2 border-pink-300/30">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <svg className="w-5 h-5 text-pink-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-foreground/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Support Message */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-pink-100/20 via-purple-100/20 to-pink-100/20 rounded-3xl border-2 border-pink-300/30">
          <p className="text-lg text-foreground/80">
            💝 Questions? We're here to help! Email us at{" "}
            <a href="mailto:support@becomingher.app" className="text-pink-500 hover:text-purple-500 font-semibold">
              support@becomingher.app
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100/10 via-purple-100/10 to-pink-100/10 border-t-2 border-pink-300/20 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
          <p>Made with SO much love for your beautiful transformation journey 💕✨🌸</p>
          <p className="text-sm mt-2 text-pink-400">You're doing amazing, gorgeous! Keep being you! 💖</p>
        </div>
      </footer>
    </div>
  );
}
