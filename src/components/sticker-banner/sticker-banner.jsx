/**
 * v0 by Vercel.
 * @see https://v0.dev/t/k9zPjDjzsmz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

export default function StickerBanner() {
  return (
    <section className="w-full container bg-white py-8 md:py-8 lg:py-8 relative overflow-hidden">
      <Image
        src="/sticker-1.png"
        width={150}
        height={150}
        alt="Sticker 1"
        className="absolute top-0 right-0 transform -rotate-12"
      />
      <Image
        src="/sticker-2.png"
        width={200}
        height={200}
        alt="Sticker 2"
        className="absolute right-44 -bottom-5"
      />
      <Image
        src="/sticker-3.png"
        width={300}
        height={300}
        alt="Sticker 3"
        className="absolute -top-6 transform rotate-12 hidden sm:block"
      />

      <div className="container px-4 md:px-4 z-20 relative">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl w-fit m-auto font-bold tracking-tighter text-secondary sm:text-4xl md:text-5xl rounded-md bg-[#ffffff8c] shadow-[0_0_10px_#00000033] shadow-white">
            Thank you for participating in our Sticker Contest!
          </h2>
          <p className="text-lg text-secondary md:text-xl rounded-md bg-[#ffffff8c] shadow-[0_0_10px_#00000033] shadow-white">
            We held a vote to choose the top three sticker designs, and now
            they’re printed and ready! Join us at our next event to grab yours—
            <a
              href="https://www.linkedin.com/posts/vancouverjs_guess-what-the-vanjs-stickers-are-finally-activity-7265234284540551169-Iqhc"
              target="_blank"
              className="text-blue-700"
            >
              check them out here!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
