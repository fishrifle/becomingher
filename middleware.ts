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
const isHomePage = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, request) => {
  const { userId, sessionClaims } = await auth();

  // Not signed in — allow public routes, protect everything else
  if (!userId) {
    if (!isPublicRoute(request)) {
      return (await auth.protect()) as never;
    }
    return;
  }

  // Signed in — always allow profile API
  if (isApiProfileRoute(request)) return;

  // Check onboarding status
  const metadata = sessionClaims?.metadata as { onboarded?: boolean } | undefined;
  const onboarded = metadata?.onboarded;

  // Not onboarded — redirect to /onboarding from any page (including /)
  if (!onboarded && !isOnboardingRoute(request)) {
    return Response.redirect(new URL("/onboarding", request.url));
  }

  // Already onboarded — redirect away from /onboarding
  if (onboarded && isOnboardingRoute(request)) {
    return Response.redirect(new URL("/", request.url));
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
