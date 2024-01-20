import { NextRequest } from "next/server";

import { auth } from "./helper/auth";
import publicURL from "./publicURLs";
import { cookies } from "next/headers";

export { jwtMiddleware };

async function jwtMiddleware(req: NextRequest) {
  if (isPublicPath(req)) return;

  // verify token in request cookie
  const id = auth.verifyToken();
  req.headers.set("userId", id);
}

function isPublicPath(req: NextRequest) {
  // public routes that don't require authentication
  return publicURL.includes(`${req.method}:${req.nextUrl.pathname}`);
}
