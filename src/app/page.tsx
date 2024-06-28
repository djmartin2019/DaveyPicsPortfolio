import StaggeredGrid from "./components/StaggeredGrid";

const images = [
  { src: "/images/IMG1.jpg", alt: "Image 1" },
  { src: "/images/IMG2.jpg", alt: "Image 2" },
  { src: "/images/IMG3.jpg", alt: "Image 3" },
  { src: "/images/IMG4.jpg", alt: "Image 4" },
  { src: "/images/IMG5.jpg", alt: "Image 5" },
  { src: "/images/IMG6.jpg", alt: "Image 6" },
  { src: "/images/IMG12.jpg", alt: "Image 7" },
  { src: "/images/IMG10.jpg", alt: "Image 8" },
  { src: "/images/IMG11.jpg", alt: "Image 9" },
];

export default function Home() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[rgb(255,255,255)] to-[rgb(183,183,183)] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl font-sans">
            Discover the Wonders of Wildlife
          </h1>
          <p className="mt-8 text-2xl leading-9 text-slate-200 font-serif">
            Explore the beauty of nature through my lens. From majestic
            landscapes to intimate animal portraits, each photograph tells a
            unique story of the wild. Join me on a visual journey to witness the
            splendor of wildlife.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-slate-600 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 font-sans"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[rgb(255,255,255)] to-[rgb(183,183,183)]  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <StaggeredGrid images={images} />
    </div>
  );
}
