import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    let token = request.cookies.get('authToken');
    // console.log("auth token in middle ware", token);
    // Testing the presence of the auth token cookie
    if (!token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // If the auth token cookie is present, the user is authenticated
    // You can perform additional logic related to authentication here

    // Return the request to allow it to continue to the intended destination
    // return request;
}

// Configuring the paths to which the middleware will be applied
export const config = {
    matcher: ['/portfolio', '/invest', '/explore', '/profile', '/my_wallet', '/profile/refer-and-earn']
};
