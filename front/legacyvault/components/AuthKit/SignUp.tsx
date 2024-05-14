import { WorkOS } from '@workos-inc/node';
const workos = new WorkOS(process.env.NEXT_PUBLIC_WORKOS_API_KEY);

export default function SignUp({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    const googleOAuthUrl = workos.userManagement.getAuthorizationUrl({
        clientId: process.env.NEXT_PUBLIC_WORKOS_CLIENT_ID || '',
        provider: 'GoogleOAuth',
        redirectUri: 'http://localhost:3000/callback',
    });

    let result = ""
    if (searchParams) {
        result = JSON.parse(String(searchParams.response ?? '{ "error": null }'));
    }

    return (
        <main>
            <h1>Sign-in</h1>
            <h2>Google OAuth</h2>
            <a href={googleOAuthUrl}>Continue with Google</a>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </main>
    );
}