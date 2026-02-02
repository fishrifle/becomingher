import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/pricing",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhook(.*)",
]);

const isOnboardingRoute = createRouteMatcher(["/onboarding"]);
const isApiProfileRoute = createRouteMatcher(["/api/profile(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (isPublicRoute(request)) return;

  const { userId, sessionClaims } = await auth.protect();

  // Always allow profile API and onboarding page
  if (isApiProfileRoute(request)) return;

  // Check if user has completed onboarding
  const metadata = sessionClaims?.metadata as { onboarded?: boolean } | undefined;
  const onboarded = metadata?.onboarded;

  // Redirect to onboarding if not completed
  if (!onboarded && !isOnboardingRoute(request)) {
    return Response.redirect(new URL("/onboarding", request.url));
  }

  // Redirect away from onboarding if already completed
  if (onboarded && isOnboardingRoute(request)) {
    return Response.redirect(new URL("/", request.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
