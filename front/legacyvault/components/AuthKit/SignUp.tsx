import { WorkOS } from '@workos-inc/node';
const workos = new WorkOS(process.env.NEXT_PUBLIC_WORKOS_API_KEY);

export default function SignUp() {

    const googleOAuthUrl = workos.userManagement.getAuthorizationUrl({
        clientId: process.env.NEXT_PUBLIC_WORKOS_CLIENT_ID || '',
        provider: 'GoogleOAuth',
        redirectUri: 'http://localhost:3000/callback',
    });


    return (
        <main>
            <h1>Sign-in</h1>
            <h2>Google OAuth</h2>
            <a href={googleOAuthUrl}>Continue with Google</a>
        </main>
    );
}