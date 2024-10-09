import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const completedJobs = [
  {
    id: 1,
    title: "Esspresso Brown Privacy Fence",
    description: "6ft tall brown vinyl fence",
    imageUrl: "/vinyl-privacy1.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "White Vinyl Picket Fence",
    description: "4ft tall scalloped picket vinyl fence",
    imageUrl: "/vinyl-picket.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Lexington Cedar Fence",
    description: "6ft tall privacy cedar fence",
    imageUrl: "/video/cedarfence.mp4",
  },
  {
    id: 2,
    title: "Black Chainlink With Black Slats",
    description: "6ft tall privacy fence",
    imageUrl: "/video/clfence.mp4",
  },
  {
    id: 2,
    title: "White Vinyl Fence",
    description: "6ft tall white privacy fence",
    imageUrl: "/vinyl-privacy2.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Solid Style Cedar",
    description: "4ft tall cedar fence",
    imageUrl: "/cedar-fence5.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Shadow Box Cedar Fence",
    description: "4ft tall cedar fence",
    imageUrl: "/cedar-shadow.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Panel Style Cedar Fence",
    description: "5ft tall privacy cedar fence",
    imageUrl: "/cedar-fence3.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Continous Top Cap Panel Style",
    description: "6ft tall cedar fence",
    imageUrl: "/cedar-fence4.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Wood To Steel Gate",
    description: "6ft tall privacy gate",
    imageUrl: "/cedar-fence7.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Solid Style Cedar",
    description: "6ft privacy Fence",
    imageUrl: "/cedar.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Estate Syle Cedar",
    description: "6ft tall privacy fence",
    imageUrl: "/cedar2.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Cattle Panel With Cedar Arbor",
    description: "4ft decrative fence",
    imageUrl: "/cedarfence.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Galvanized Chainlink With Beige Slats",
    description: "6ft tall security fence",
    imageUrl: "/chain-beige-slats.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Black Chainlink With Black Slats",
    description: "6ft tall privacy fence",
    imageUrl: "/chain-black-slat.jpeg?height=300&width=400",
  },
  {
    id: 2,
    title: "Black Chainlink Fence",
    description: "6ft tall yard fence",
    imageUrl: "/chainlink-black.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Galvanized Chainlink",
    description: "4ft tall fence",
    imageUrl: "/chainlink-galvanized.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Galvanized Commercial Chainlink",
    description: "7ft tall commercial fence",
    imageUrl: "/chainlink1.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Galvanized Residential Chainlink",
    description: "5ft tall fence for front yard",
    imageUrl: "/chainlink2.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Multi Colored Vinyl",
    description: "4ft tall privacy fence",
    imageUrl: "/customfence.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Commercial Grade Ornamental Iron",
    description: "6ft tall fence",
    imageUrl: "/ornament-classic.jpg?height=300&width=400",
  }, 
  {
    id: 2,
    title: "Ornamental Iron Swing Gate",
    description: "6ft tall gate",
    imageUrl: "/ornament-gate.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Majestic Ornamental Iron",
    description: "5ft tall fence",
    imageUrl: "/ornament-majestic.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Custom Beige Ornamental Iron",
    description: "8ft tall commercial fence",
    imageUrl: "/securityfence.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Composit Security Fence",
    description: "6ft tall commercial fence",
    imageUrl: "/securityfence2.jpg?height=300&width=400",
  },
];

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Image
            src="/logo.png"
            width={170}
            height={170}
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
            Gallery
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      
      <h1 className="text-3xl font-bold mb-6">Completed Fence Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedJobs.map((job) => (
          <Card key={job.id} className="overflow-hidden">
            {/* Check if the media is a video (ends with .mp4) */}
            {job.imageUrl.endsWith(".mp4") ? (
              <video width={400} height={300} controls className="w-full h-48 object-cover">
                <source src={job.imageUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={job.imageUrl}
                alt={job.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
            )}
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{job.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
