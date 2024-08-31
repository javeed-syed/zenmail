import { type NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

export default async function middleware( req: NextRequest) {
    console.log(process.env.NEXTAUTH_SECRET);
    const protectedRoutes = ['/dashboard'];
    const currentPath = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(currentPath);

    const getCookies = cookies()
    const nextAuthSession = getCookies.get('next-auth.session-token')?.value || ''
    // console.log(nextAuthSession);
    
    if(isProtectedRoute) {        
        if(!nextAuthSession) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }

    if(nextAuthSession && currentPath.includes('/login')){
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image).*)']
}