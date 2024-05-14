import { WorkOS } from '@workos-inc/node';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const workos = new WorkOS(process.env.NEXT_PUBLIC_WORKOS_API_KEY);

export async function GET(request: Request) {
    const code = new URL(request.url).searchParams.get('code') || '';
    let response;

    try {
        response = await workos.userManagement.authenticateWithCode({
            clientId: process.env.NEXT_PUBLIC_WORKOS_CLIENT_ID || '',
            code,
        });
    } catch (error) {
        response = error;
    }

    if (response) {
        const cookie = cookies()
        console.log(response)
        cookie.set('access_token', response.user.id);
        redirect(
            `http://localhost:3000/${JSON.stringify(response.user.id)}`
        );
    }
}