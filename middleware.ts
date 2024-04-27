import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: ["/",],
  afterAuth(auth, req) {
    if (auth.userId && auth.isPublicRoute) {
        // if a user is logged in and on a public route
        // redirect them to an org page or to select an org
        const nextpage = new URL("/protected", req.url);
        return NextResponse.redirect(nextpage);
    }
    if (!auth.userId && !auth.isPublicRoute) {
        // a user tried to access a private route
        // give them back the url - so when they sign in
        // they'll be redirected there.
        return redirectToSignIn({ returnBackUrl: req.url});
    }
  }

});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};