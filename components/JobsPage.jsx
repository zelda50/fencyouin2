import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const completedJobs = [
  {
    id: 1,
    title: "Modern Privacy Fence",
    description: "6ft tall brown vinyl privacy fence",
    date: "2023-05-15",
    imageUrl: "/vinyl-privacy1.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/vinyl-picket.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedarfence.mp4",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/clfence.mp4",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/vinyl-privacy2.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar-fence5.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar-shadow.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar-fence3.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar-fence4.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar-fence7.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar-lexington.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar-solid.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedar2.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedarfence.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/cedarfence6.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/chain-beige-slats.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/chain-black-slat.jpeg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/chainlink-black.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/chainlink-galvanized.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/chainlink1.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/chainlink2.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/customfence.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/ornament-classic.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/ornament-classic2.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/ornament-gate.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/ornament-majestic.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/ornament-montage.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
    imageUrl: "/securityfence.jpg?height=300&width=400",
  },
  {
    id: 2,
    title: "Classic vinyl Picket Fence",
    description: "4ft white picket fence for front yard",
    date: "2023-06-02",
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
