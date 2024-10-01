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
            Submit Your Sticker Idea!
          </h2>
          <p className="text-lg text-secondary md:text-xl rounded-md bg-[#ffffff8c] shadow-[0_0_10px_#00000033] shadow-white">
            Enter our sticker contest for a chance to win a one month
            subscription to Frontend Masters! Submit your entry by September
            30th, 2024.
          </p>

          <p className="text-lg text-red-700">
            CONTEST CLOSED, RESULTS ARE COMING SOON!
          </p>
        </div>
      </div>
    </section>
  );
}
