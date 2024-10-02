import Link from "next/link"
import Image from "next/image"

export default function CedarPage() {
  return (
    <div id="Cedar-Page" className="flex flex-col min-h-[100dvh]">
       <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
           {/* <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'></h1> */}
           <Image
          src="/logo.png"
          width={170}
          height={170}
          href="/"
          alt="Picture of the author"
          />
          <span className="sr-only">Chain Link Fences</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="/#Fence-Styles" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Styles
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="/jobs" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Gallary
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        </header>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover the Beauty and Durability of Cedar Fencing
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Elevate your outdoor space with the natural charm and long-lasting protection of cedar fencing.
              </p>
            </div>
          </div>
          <img
            src="/cedar-fence4.jpg"
            width="550"
            height="550"
            alt="Cedar Fence"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <HardHatIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Unparalleled Durability</h2>
            </div>
            <p className="text-muted-foreground">
              Cedar fencing is naturally resistant to rot, decay, and insect damage, ensuring your fence stands strong
              for years to come. Its natural oils and tight grain make it a long-lasting choice for your outdoor space.
            </p>
          </div>
          <img
            src="/cedar-fence3.jpg"
            width="550"
            height="310"
            alt="Cedar Fence Durability"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <img
            src="/cedarfence.jpg"
            width="550"
            height="310"
            alt="Cedar Fence Beauty"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <GemIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Natural Beauty</h2>
            </div>
            <p className="text-muted-foreground">
              Cedar fencing adds a warm, rustic charm to any outdoor space. Its rich, natural grain and color tones
              complement a variety of landscaping styles, from modern to traditional. The natural beauty of cedar will
              enhance the aesthetic of your property.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <BatteryLowIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Low Maintenance</h2>
            </div>
            <p className="text-muted-foreground">
              Cedar fencing requires minimal maintenance compared to other fencing materials. Its natural resistance to
              the elements means you can enjoy your fence with little upkeep, allowing you to spend more time enjoying
              your outdoor space.
            </p>
          </div>
          <img
            src="/cedar-fence5.jpg"
            width="550"
            height="310"
            alt="Cedar Fence Maintenance"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Transform Your Outdoor Space with Cedar Fencing
              </h2>
              <Link
                href="https://myfence.mysalesman.com/?partnerCode=7fc861806afe#UserInfo" target="_blank"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Request a Quote
              </Link>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Learn More</div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Discover how cedar fencing can enhance the beauty and value of your property. Contact us today to learn
                more about our custom fencing solutions and get a free quote.
              </p>
              <Link
                href="/#Contact-section"
                className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



function BatteryLowIcon(props) {
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
      <rect width="16" height="10" x="2" y="7" rx="2" ry="2" />
      <line x1="22" x2="22" y1="11" y2="13" />
      <line x1="6" x2="6" y1="11" y2="13" />
    </svg>
  )
}


function GemIcon(props) {
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
      <path d="M6 3h12l4 6-10 13L2 9Z" />
      <path d="M11 3 8 9l4 13 4-13-3-6" />
      <path d="M2 9h20" />
    </svg>
  )
}


function HardHatIcon(props) {
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
      <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15v-3a6 6 0 0 1 6-6h0" />
      <path d="M14 6h0a6 6 0 0 1 6 6v3" />
    </svg>
  )
}
