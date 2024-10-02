
// import { SessionProvider } from 'next-auth/react';
// import Navbar from '../components/Navbar';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={session}>
//       <Navbar />
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }

// export default MyApp;

import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  
  // Define the routes where you don't want to show the Navbar
  const noNavbarRoutes = ['/admin', '/cedar', '/ornament', '/contact', '/chain', '/vinyl', '/jobs'];

  return (
    <SessionProvider session={session}>
      {/* Conditionally render Navbar if the current route is not in the noNavbarRoutes */}
      {!noNavbarRoutes.includes(router.pathname) && <Navbar />}
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
