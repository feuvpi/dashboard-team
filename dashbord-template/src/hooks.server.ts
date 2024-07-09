import PocketBase from 'pocketbase';
import { building } from '$app/environment';

const unprotectedRoutes = ['/login', 'server-down']

function isPathAllowed(path: string){
    return unprotectedRoutes.some(allowedPath =>
        path == allowedPath || path.startsWith(allowedPath + '/'))
}

async function isServerUp(): Promise<boolean>{
    try{
        const response = await fetch(`http://127.0.0.1:8090/api/health`);
        if(response)
            return true;
        else
            return false;
    } catch(error){
        // console.log(error)
    }
    return false;
}


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

    // if (building) {
    //     event.cookies.set('pb_auth', '');
    //     return await resolve(event);
    // }

    event.locals.pb = new PocketBase('http://127.0.0.1:8090');

    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('pb_auth') || '');

    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        event.locals.pb.authStore.isValid && await event.locals.pb.collection('users').authRefresh();
    } catch (_) {
        // clear the auth store on failed refresh and if on protected route, redirect to auth
        event.locals.pb.authStore.clear();
        if(!isPathAllowed(event.url.pathname)){
            return new Response(null, {
                status: 302,
                headers: {
                  Location: '/login',
                },
              });
        }
    }

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie());

    return response;
}
