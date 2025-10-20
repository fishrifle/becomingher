"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Photo {
  id: string;
  dataUrl: string;
  date: string;
  category: string;
  notes: string;
  timestamp: number;
}

export default function PhotosPage() {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [uploadForm, setUploadForm] = useState({
    date: new Date().toISOString().split('T')[0],
    category: "Beginning",
    notes: ""
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load photos from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("journey_photos");
    if (saved) {
      try {
        setPhotos(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading photos:", e);
      }
    }
  }, []);

  // Save photos to localStorage
  useEffect(() => {
    if (photos.length > 0) {
      localStorage.setItem("journey_photos", JSON.stringify(photos));
    }
  }, [photos]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!previewImage) {
      alert("Please select an image first!");
      return;
    }

    const newPhoto: Photo = {
      id: Date.now().toString(),
      dataUrl: previewImage,
      date: uploadForm.date,
      category: uploadForm.category,
      notes: uploadForm.notes,
      timestamp: Date.now()
    };

    setPhotos([newPhoto, ...photos]);
    setUploadModalOpen(false);
    setPreviewImage("");
    setUploadForm({
      date: new Date().toISOString().split('T')[0],
      category: "Beginning",
      notes: ""
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const deletePhoto = (id: string) => {
    if (confirm("Are you sure you want to delete this photo?")) {
      setPhotos(photos.filter(p => p.id !== id));
      setSelectedPhoto(null);
    }
  };

  const filteredPhotos = selectedCategory
    ? photos.filter(p => p.category === selectedCategory)
    : photos;

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
        {/* Hero Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 border-2 border-pink-300/30">
          <div className="relative h-80">
            <Image
              src="https://images.unsplash.com/photo-1606103836293-0a063a5c7946?w=1600&q=80"
              alt="Beautiful journey and transformation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <div className="text-6xl mb-4">📸✨💕</div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
                Your Beautiful Journey 🌸
              </h2>
              <p className="text-lg text-white/95 max-w-2xl mx-auto mb-6 drop-shadow-lg">
                Document your transformation, celebrate milestones, and see how far you've come.
                Every photo tells a story of becoming yourself! 💖
              </p>
              <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/40 rounded-2xl px-8 py-4">
                <p className="text-sm text-white/95 drop-shadow">
                  📷 <strong>Your Private Gallery:</strong> All photos are stored locally on your device only!
                </p>
              </div>
            </div>
          </div>
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

        {/* Category Filters */}
        {photos.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === null
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                    : 'bg-accent/30 border border-primary/20 hover:bg-accent/50'
                }`}
              >
                All Photos ({photos.length})
              </button>
              <button
                onClick={() => setSelectedCategory("Beginning")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === "Beginning"
                    ? 'bg-gradient-to-r from-green-400 to-teal-400 text-white shadow-lg'
                    : 'bg-accent/30 border border-primary/20 hover:bg-accent/50'
                }`}
              >
                🌱 Beginning ({photos.filter(p => p.category === "Beginning").length})
              </button>
              <button
                onClick={() => setSelectedCategory("Blooming")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === "Blooming"
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg'
                    : 'bg-accent/30 border border-primary/20 hover:bg-accent/50'
                }`}
              >
                🌸 Blooming ({photos.filter(p => p.category === "Blooming").length})
              </button>
              <button
                onClick={() => setSelectedCategory("Flourishing")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === "Flourishing"
                    ? 'bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white shadow-lg'
                    : 'bg-accent/30 border border-primary/20 hover:bg-accent/50'
                }`}
              >
                🌺 Flourishing ({photos.filter(p => p.category === "Flourishing").length})
              </button>
              <button
                onClick={() => setSelectedCategory("Milestone")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === "Milestone"
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg'
                    : 'bg-accent/30 border border-primary/20 hover:bg-accent/50'
                }`}
              >
                ⭐ Milestone ({photos.filter(p => p.category === "Milestone").length})
              </button>
            </div>
          </div>
        )}

        {/* Photo Gallery */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-pink-300/30 hover:border-pink-500/60 cursor-pointer transition-all hover:shadow-2xl hover:shadow-pink-300/20 hover:scale-105"
              >
                <img
                  src={photo.dataUrl}
                  alt={`Journey photo from ${photo.date}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{new Date(photo.date).toLocaleDateString()}</p>
                    <p className="text-xs opacity-90">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-accent/20 border border-primary/10 rounded-2xl p-8 sm:p-12 text-center mb-12">
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

        )}

        {/* Milestones Section */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 sm:p-8">
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
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="block border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
              >
                {previewImage ? (
                  <div className="relative">
                    <img src={previewImage} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                    <p className="text-xs text-foreground/50 mt-2">Click to change image</p>
                  </div>
                ) : (
                  <>
                    <svg className="w-12 h-12 mx-auto mb-4 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm text-foreground/70">Click to upload or drag and drop</p>
                    <p className="text-xs text-foreground/50 mt-1">PNG, JPG, GIF up to 10MB</p>
                  </>
                )}
              </label>

              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={uploadForm.date}
                  onChange={(e) => setUploadForm({ ...uploadForm, date: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={uploadForm.category}
                  onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50"
                >
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
                  value={uploadForm.notes}
                  onChange={(e) => setUploadForm({ ...uploadForm, notes: e.target.value })}
                  placeholder="How were you feeling? Any special memories from this day?"
                  className="w-full px-4 py-2 rounded-lg bg-accent/30 border border-primary/20 focus:outline-none focus:border-primary/50 resize-none"
                />
              </div>

              <button
                onClick={handleUpload}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Upload Photo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Photo Detail Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-background border border-primary/30 rounded-2xl max-w-4xl w-full my-8">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{new Date(selectedPhoto.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
                  <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                    {selectedPhoto.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <img
                  src={selectedPhoto.dataUrl}
                  alt={`Journey photo from ${selectedPhoto.date}`}
                  className="w-full rounded-xl"
                />
              </div>

              {selectedPhoto.notes && (
                <div className="mb-6 bg-accent/30 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">Notes:</p>
                  <p className="text-sm text-foreground/70 whitespace-pre-wrap">{selectedPhoto.notes}</p>
                </div>
              )}

              <button
                onClick={() => deletePhoto(selectedPhoto.id)}
                className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-500 font-semibold py-3 rounded-lg transition-colors"
              >
                Delete Photo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
