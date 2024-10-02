/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TDEG3gL3FlW
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import  Image  from 'next/image';

export default function VinylPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
          <span className="sr-only">Landmark Creations</span>
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                src="/vinyl-picket.jpg"
                width="550"
                height="550"
                alt="Vinyl Fence"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Durable, Low-Maintenance Vinyl Fencing
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Elevate your outdoor space with our premium vinyl fencing, designed to withstand the elements and
                    enhance your property's curb appeal.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="https://myfence.mysalesman.com/?partnerCode=7fc861806afe#UserInfo" target="_blank"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get a Quote
                  </Link>
                  <Link
                    href="/#Contact-section"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Durable and Low-Maintenance</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built to Last, Designed to Impress</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our vinyl fencing is engineered to withstand the harshest weather conditions, requiring minimal
                  maintenance to keep it looking its best. Enjoy the beauty of a pristine fence without the hassle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/vinyl-privacy2.jpg"
                width="550"
                height="310"
                alt="Vinyl Fence"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Customizable Styles</h3>
                      <p className="text-muted-foreground">
                        Choose from a variety of fence styles and colors to complement your home's aesthetic.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Weatherproof Design</h3>
                      <p className="text-muted-foreground">
                        Our vinyl fencing is engineered to withstand the elements, ensuring it maintains its pristine
                        appearance for years to come.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Easy Installation</h3>
                      <p className="text-muted-foreground">
                        Our fencing system is designed for quick and hassle-free installation, minimizing disruption to
                        your property.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Fence Styles</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Outdoor Space</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our wide selection of vinyl fence styles and colors to find the perfect match for your home
                  and landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <div className="grid gap-4 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src="/vinyl-picket.jpg"
                  alt="Fence Style 1"
                  width={450}
                  height={600}
                  className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Picket Fence</h3>
                  <p className="text-sm leading-none">Classic design with a modern twist.</p>
                </div>
              </div>
              <div className="grid gap-4 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src="/vinyl-privacy1.jpg"
                  alt="Fence Style 2"
                  width={450}
                  height={600}
                  className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Privacy Fence</h3>
                  <p className="text-sm leading-none">Solid panels for maximum privacy.</p>
                </div>
              </div>
              <div className="grid gap-4 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <img
                  src="/vinyl-privacy2.jpg"
                  alt="Fence Style 3"
                  width={450}
                  height={600}
                  className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
                />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Vinyl Gate</h3>
                  <p className="text-sm leading-none">Elegant design with a touch of sophistication.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Color Options</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Customize Your Fence</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from a variety of colors to perfectly complement your home's exterior and landscape.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-8">
              <div className="grid gap-4 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <div className="rounded-lg bg-[#FFFFFF] w-full aspect-square flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#FFFFFF] border border-muted rounded-lg" />
                </div>
                <div className="grid gap-1">
                  <h3 className="font-semibold">White</h3>
                  <p className="text-sm leading-none">Classic and timeless.</p>
                </div>
              </div>
              <div className="grid gap-4 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <div className="rounded-lg bg-[#F5F5F5] w-full aspect-square flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#F5F5F5] border border-muted rounded-lg" />
                </div>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Beige</h3>
                  <p className="text-sm leading-none">Warm and inviting.</p>
                </div>
              </div>
              <div className="grid gap-4 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <div className="rounded-lg bg-[#EBEBEB] w-full aspect-square flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#EBEBEB] border border-muted rounded-lg" />
                </div>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Gray</h3>
                  <p className="text-sm leading-none">Sleek and modern.</p>
                </div>
              </div>
              <div className="grid gap-4 relative group">
                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                  <span className="sr-only">View</span>
                </Link>
                <div className="rounded-lg bg-[#E0E0E0] w-full aspect-square flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#E0E0E0] border border-muted rounded-lg" />
                </div>
                <div className="grid gap-1">
                  <h3 className="font-semibold">Tan</h3>
                  <p className="text-sm leading-none">Earthy and natural.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
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