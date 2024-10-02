import { signIn, signOut, useSession } from 'next-auth/react';

const AuthButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user.email}</p>
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-red-500 hover:text-white transition duration-300"
        >
          Sign out
        </button>
      </>
    );
  }

  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-red-500 hover:text-white transition duration-300"
    >
      Sign in with Google
    </button>
  );
};

export default AuthButton;
