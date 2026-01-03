import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
    // Debug mode: Skip all supbase auth logic to confirm deployment works
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
