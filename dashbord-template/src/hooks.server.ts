import PocketBase from 'pocketbase';
import { building } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import { pb, isAuthenticated } from '$lib/data/pocketbase';

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

        event.locals.pb = new PocketBase('http://localhost:8090');
        event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '')

        if(event.locals.pb.authStore.isValid){
            event.locals.user = event.locals.pb.authStore.model
        }

        const response = await resolve(event)

        response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false}))

        return response

}   

