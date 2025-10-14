"use client";

import Link from "next/link";
import { useState } from "react";

export default function PhotosPage() {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/10 backdrop-blur-sm border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Journey in Photos
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12">
          <div className="text-5xl mb-4">📸</div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Document Your Transformation
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
            Your journey is beautiful and worth celebrating. This space is for you to track
            your progress, celebrate milestones, and see how far you've come.
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-gradient-to-br from-accent/40 to-secondary/10 border-2 border-dashed border-primary/30 rounded-2xl p-8 sm:p-12 text-center mb-12">
          <div className="max-w-md mx-auto">
            <div className="text-4xl mb-4">📷</div>
            <h3 className="text-2xl font-bold mb-3">Add New Photo</h3>
            <p className="text-foreground/70 mb-6">
              Upload photos to track your journey. You can organize them by date, milestone,
              or however you like!
            </p>
            <button
              onClick={() => setUploadModalOpen(true)}
              className="bg-gradient-to-r from-primary to-secondary text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Upload Photo
            </button>
          </div>
        </div>

        {/* Timeline Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 hover:bg-accent/50 transition-all cursor-pointer">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-xl font-semibold mb-2">Beginning</h3>
            <p className="text-sm text-foreground/60">
              Pre-HRT and early transition photos
            </p>
          </div>
          <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 hover:bg-accent/50 transition-all cursor-pointer">
            <div className="text-3xl mb-3">🌸</div>
            <h3 className="text-xl font-semibold mb-2">Blooming</h3>
            <p className="text-sm text-foreground/60">
              Mid-transition progress and changes
            </p>
          </div>
          <div className="bg-accent/30 border border-primary/20 rounded-2xl p-6 hover:bg-accent/50 transition-all cursor-pointer">
            <div className="text-3xl mb-3">🌺</div>
            <h3 className="text-xl font-semibold mb-2">Flourishing</h3>
            <p className="text-sm text-foreground/60">
              Recent photos and milestones
            </p>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-accent/20 border border-primary/10 rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-lg mx-auto">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-3">Your Gallery Awaits</h3>
            <p className="text-foreground/70 mb-6">
              You haven't uploaded any photos yet. Start documenting your beautiful journey today!
            </p>
            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6 text-left">
              <h4 className="font-semibold mb-3">Tips for Progress Photos:</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start gap-2">
                  <span className="text-primary">📅</span>
                  <span>Take photos at regular intervals (monthly, every 3 months, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">💡</span>
                  <span>Use consistent lighting and angles for better comparison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">🎯</span>
                  <span>Capture both face and full-body shots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">💝</span>
                  <span>Include photos of moments you feel beautiful, not just "before/after"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">📝</span>
                  <span>Add notes about how you were feeling that day</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Milestones Section */}
        <div className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-6">Celebrate Your Milestones</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
              <div className="text-2xl mb-2">💊</div>
              <h4 className="font-semibold mb-1">HRT Anniversary</h4>
              <p className="text-xs text-foreground/60">Track your HRT journey</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
              <div className="text-2xl mb-2">👗</div>
              <h4 className="font-semibold mb-1">First Time Out</h4>
              <p className="text-xs text-foreground/60">Going out as yourself</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
              <div className="text-2xl mb-2">💇‍♀️</div>
              <h4 className="font-semibold mb-1">Haircuts & Style</h4>
              <p className="text-xs text-foreground/60">Hair evolution</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
              <div className="text-2xl mb-2">👔</div>
              <h4 className="font-semibold mb-1">Name Change</h4>
              <p className="text-xs text-foreground/60">Legal milestones</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
              <div className="text-2xl mb-2">💄</div>
              <h4 className="font-semibold mb-1">Makeup Journey</h4>
              <p className="text-xs text-foreground/60">Skills progression</p>
            </div>
            <div className="bg-background/50 rounded-lg p-4 border border-primary/10">
              <div className="text-2xl mb-2">❤️</div>
              <h4 className="font-semibold mb-1">Feeling Beautiful</h4>
              <p className="text-xs text-foreground/60">Self-love moments</p>
            </div>
          </div>
        </div>
      </main>

      {/* Upload Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-background border border-primary/30 rounded-2xl max-w-lg w-full p-6 sm:p-8">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold">Upload Photo</h3>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <svg className="w-12 h-12 mx-auto mb-4 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-foreground/70">Click to upload or drag and drop</p>
                <p className="text-xs text-foreground/50 mt-1">PNG, JPG, GIF up to 10MB</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full px-4 py-2 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50">
                  <option>Beginning</option>
                  <option>Blooming</option>
                  <option>Flourishing</option>
                  <option>Milestone</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="How were you feeling? Any special memories from this day?"
                  className="w-full px-4 py-2 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50 resize-none"
                />
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
                Upload Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
