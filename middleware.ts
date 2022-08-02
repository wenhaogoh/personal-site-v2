import { NextRequest, NextResponse } from "next/server";

import { ACCESS_TOKEN_COOKIE_KEY, BASE_URL } from "./consts";
import { Authentication } from "./fetch";

export const middleware = async (req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith("/login")) {
    const accessToken = req.cookies.get(ACCESS_TOKEN_COOKIE_KEY);
    if (!accessToken) {
      return NextResponse.next();
    }

    return await Authentication.verify({ accessToken })
      .then(() => NextResponse.redirect(`${BASE_URL}/admin`))
      .catch(() => NextResponse.next());
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    const accessToken = req.cookies.get(ACCESS_TOKEN_COOKIE_KEY);
    if (!accessToken) {
      return NextResponse.redirect(`${BASE_URL}/login`);
    }

    return await Authentication.verify({ accessToken })
      .then(() => NextResponse.next())
      .catch(() => NextResponse.redirect(`${BASE_URL}/login`));
  }
};
