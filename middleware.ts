import { NextRequest, NextResponse } from "next/server";

import { Authentication } from "./frontend/api";
import { ENV } from "./shared/consts";

export const middleware = async (req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith("/login")) {
    const accessToken = req.cookies.get(ENV.ACCESS_TOKEN_COOKIE_KEY);
    if (!accessToken) {
      return NextResponse.next();
    }

    return await Authentication.verify({ accessToken })
      .then(() => NextResponse.redirect(`${ENV.BASE_URL}/admin`))
      .catch(() => NextResponse.next());
  }

  if (req.nextUrl.pathname.startsWith("/admin")) {
    const accessToken = req.cookies.get(ENV.ACCESS_TOKEN_COOKIE_KEY);
    if (!accessToken) {
      return NextResponse.redirect(`${ENV.BASE_URL}/login`);
    }

    return await Authentication.verify({ accessToken })
      .then(() => NextResponse.next())
      .catch(() => NextResponse.redirect(`${ENV.BASE_URL}/login`));
  }
};
