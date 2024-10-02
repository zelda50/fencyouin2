/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aG77cFHMbG0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import  Image  from 'next/image';

export default function Footer2() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container max-w-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img
            className="w-18 relative h-18 overflow-hidden shrink-0"
            alt=""
            src="/logo.png"
          />
            <span className="text-xl font-bold">Landmark Creations</span>
          </Link>
          <p className="text-muted-foreground">
            Providing high-quality fencing solutions for residential and commercial properties.
          </p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Services</h4>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Residential Fencing
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Commercial Fencing
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Custom Fencing
          </Link>
          <Link href="#" className="text-sm hover:underline" prefetch={false}>
            Fence Maintenance
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-sm font-semibold">Contact</h4>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-5 w-5 text-muted-foreground" />
            <a href="#" className="text-sm hover:underline">
              +1 (234) 567-890
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="h-5 w-5 text-muted-foreground" />
            <a href="#" className="text-sm hover:underline">
              info@acmefencing.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <LocateIcon className="h-5 w-5 text-muted-foreground" />
            <div className="text-sm">123 Main St, Anytown USA 12345</div>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Fencing. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FenceIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      <path d="M6 8h4" />
      <path d="M6 18h4" />
      <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
      <path d="M14 8h4" />
      <path d="M14 18h4" />
      <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}