'use server'
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/authOptions';
import { NextResponse } from 'next/server';

export async function isAuth() {
    const session = await getServerSession(authOptions);

    // if (!session) {
    //     return NextResponse.json(
    //         { success: false, message: 'Not authenticated' },
    //         { status: 401 }
    //     );
    // }
    return false;
}
