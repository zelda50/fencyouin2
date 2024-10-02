import React from 'react'
import Link from 'next/link';

function FenceStyles() {
  return (
    
    <div id="Fence-Styles" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"></div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Fence Designs</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From classic wood to modern aluminum, we offer a wide range of fence styles to complement any outdoor
              space.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group grid gap-1">
            <Link href="/cedar">
              <img
                src="/cedar-fence4.jpg"
                width="300"
                height="200"
                alt="Fence Style 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">Cedar Fence</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">Classic and durable, our wood fences offer timeless appeal. Available in 4,5, and 6 ft tall.</p>
          </div>
          <div className="group grid gap-1">
            <Link href="/ornament">
              <img
                src="/ornament-majestic.jpg"
                width="300"
                height="200"
                alt="Fence Style 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">Ornamental Iron</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">Sleek and modern, our metal fences provide a clean look. Available in 4,5, and 6 ft tall.</p>
          </div>
          <div className="group grid gap-1">
            <Link href="/vinyl">
              <img
                src="/customfence.jpg"
                width="300"
                height="200"
                alt="Fence Style 3"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">Vinyl Fence</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              Durable and low-maintenance, our vinyl fences are a great choice.
            </p>
          </div>
          <div className="group grid gap-1">
            <Link href="/chain">
              <img
                src="/chainlink2.jpg"
                width="300"
                height="200"
                alt="Fence Style 4"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <h3 className="text-lg font-bold group-hover:text-primary transition-colors">Chain Link Fence</h3>
            <p className="text-muted-foreground group-hover:text-primary transition-colors">
              Affordable and versatile, our chain link fences are a practical option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FenceStyles;

