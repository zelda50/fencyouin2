/**
 * v0 by Vercel.
 * @see https://v0.dev/t/p8shwWSCSAd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from "next/image"

export default function OrnamentPage() {
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
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Timeless Elegance: Our Decorative Metal Fence
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Elevate your outdoor space with our stunning decorative metal fence, crafted to blend timeless style and
                uncompromising durability.
              </p>
            </div>
            <img
              src="/ornament-majestic.jpg"
              alt="Decorative Metal Fence"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover"
              width="800"
              height="500"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Crafted for Enduring Beauty</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our decorative metal fence is designed to withstand the elements while enhancing the aesthetic of your
                outdoor space. Explore the features that make it a standout choice.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Durable Construction</h3>
                <p className="text-muted-foreground">
                  Crafted from high-quality metal alloys, our fence is built to withstand weathering and corrosion,
                  ensuring long-lasting performance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Customizable Finishes</h3>
                <p className="text-muted-foreground">
                  Choose from a variety of powder-coated finishes to complement your outdoor decor, from classic black
                  to vibrant colors.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Versatile Design</h3>
                <p className="text-muted-foreground">
                  Our fence can be tailored to your specific needs, with options for different heights, panel styles,
                  and gate configurations.
                </p>
              </div>
            </div>
            <img
              src="/ornament-gate.jpg"
              alt="Decorative Metal Fence Details"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              width="800"
              height="500"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Outdoor Space</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our decorative metal fence is designed to enhance the beauty of your property, whether you're looking to
                create a stunning entryway, define garden boundaries, or add a touch of elegance to your backyard.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/ornament-classic2.jpg"
              alt="Decorative Metal Fence Installation"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              width="800"
              height="500"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Easy Installation</h3>
                <p className="text-muted-foreground">
                  Our fence panels are designed for straightforward installation, with detailed instructions and support
                  available to ensure a seamless process.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://myfence.mysalesman.com/?partnerCode=7fc861806afe#UserInfo" target="_blank"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
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
      </main>
    </div>
  )
}

