import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Welcome to Premium! 💎
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Your subscription is now active. Thank you for supporting our community!
        </p>

        {/* What's Next */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What's Next?
          </h2>
          <ul className="text-left space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 text-xl">✨</span>
              <span>Access unlimited AI companion conversations</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 text-xl">📅</span>
              <span>Track your HRT journey with advanced analytics</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 text-xl">💄</span>
              <span>Watch all 25+ premium makeup tutorials</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-3 text-xl">🧘‍♀️</span>
              <span>Unlock complete yoga and meditation library</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 text-xl">🌙</span>
              <span>Access all hypnosis and chakra healing sessions</span>
            </li>
          </ul>
        </div>

        {/* Receipt Info */}
        <p className="text-sm text-gray-500 mb-8">
          A receipt has been sent to your email. You can manage your subscription anytime from your account settings.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Explore Premium Features
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all duration-300"
          >
            View Plans
          </Link>
        </div>

        {/* Support */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need help?{" "}
            <a
              href="mailto:support@becomingher.app"
              className="text-pink-600 hover:text-pink-700 font-semibold"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
