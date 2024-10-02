import Link from "next/link"
import ReviewButton from "./ReviewButton"

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="container max-w-7xl px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <img
              className="w-10 h-10 ml-4 -mt-2" // Reduced size, margin-left, and negative margin-top for upward positioning
              alt="Logo"
              src="/logo.png"
            />
            <span className="text-xl font-bold">Landmark Creations</span>
          </Link>
          <p className="text-muted-foreground">Providing innovative fence solutions for your home or business.</p>
          <ReviewButton/>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold">Contact</h4>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-white" />
              <span>+1 (253) 301-7625</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="w-5 h-5 text-white" />
              <a href="mailto:info@fenceyouin.com" className="hover:underline">info@fenceyouin.com</a>
            </div>
            <div className="flex items-center gap-2">
              {/* Add other contact icons if needed */}
              <a href="https://www.linkedin.com/in/kevin-bruce-150744312" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                <LinkedInIcon className="w-5 h-5 text-white" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <div className="grid gap-2">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/#Fence-Styles" className="hover:underline">Styles</Link>
            <Link href="/#testimonials" className="hover:underline">Testimonials</Link>
            <Link href="/jobs" className="hover:underline">Gallary</Link>
            <Link href="/#Contact-section" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>
       {/* New Logo Section */}
       <div className="flex justify-start items-center gap-10 mt-3 ml-10">
       <Link href="https://fenceworkers.org/" target="_blank" rel="noopener noreferrer" passHref> 
        <img className="w-16 h-16 -mt-12" alt="Logo 1" src="/fwalogo.png" /> 
        </Link>
        <Link href="https://www.facebook.com/people/Brookdale-Lumber-Hardware/61560290933467/" target="_blank" rel="noopener noreferrer" passHref> 
        <img className="w-16 h-16 -mt-12" alt="Logo 2" src="/bdlogo.jpeg" />
        </Link>
        {/* Add more logos as needed */}
      </div>
      <div className="bg-muted py-4 text-center text-sm text-white">
        &copy; Landmark Creations LLC | Website, SEO & Marketing by Eric's Web Design.
      </div>
     
    </footer>
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

function LinkedInIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.023-3.039-1.851-3.039-1.852 0-2.135 1.447-2.135 2.941v5.667H9.356V9h3.413v1.561h.048c.475-.9 1.635-1.851 3.366-1.851 3.598 0 4.261 2.366 4.261 5.448v6.293zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.071 0-1.145.926-2.071 2.07-2.071 1.144 0 2.071.926 2.071 2.071 0 1.144-.927 2.071-2.071 2.071zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.205 24 24 23.227 24 22.271V1.729C24 .774 23.205 0 22.225 0z"/>
    </svg>
  );
}

