import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import PocketBase from 'pocketbase';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request }) => {
		const { dmail, password } = await request.json();
        const pb = new PocketBase('http://127.0.0.1:8090');
        const { token, record } = await locals.pb.collection('users').authWithPassword(email, password);
        
        if(token){
            throw redirect(303, '/acesso')
        } else {
            return {fail: true}
        }
	},
} satisfies Actions;