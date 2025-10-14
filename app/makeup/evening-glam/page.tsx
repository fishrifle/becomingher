"use client";

import Link from "next/link";

export default function EveningGlamGuide() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/makeup" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold">Evening Glamour</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center">
          <div className="text-5xl mb-4">✨💫</div>
          <h2 className="text-2xl font-bold mb-4">Evening Glam Guide</h2>
          <p className="text-foreground/70 mb-6">This comprehensive guide is coming soon!</p>
          <Link href="/makeup" className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Back to Makeup Guides
          </Link>
        </div>
      </main>
    </div>
  );
}
