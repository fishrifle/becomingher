import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50/10 via-purple-50/10 to-pink-50/10">
      <SignIn />
    </div>
  );
}
