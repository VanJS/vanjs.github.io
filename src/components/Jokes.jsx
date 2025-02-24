import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

function Jokes() {
    return (
        <section id='jokes' className="w-full container md:py-12 lg:py-18 bg-muted relative overflow-hidden">
            <Image
                src='/JasonLaughing.png'
                width={150}
                height={150}
                alt='Jason the duck laughing'
                className='absolute left-0 -bottom-5 transform -rotate-12 md:left-14 '
            />

            <div className="container space-y-12 px-2 md:px-4">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="inline-flex ">
                        <h2 className="content-center text-3xl font-bold sm:text-5xl my-2">
                            Make Us LOL!
                        </h2>
                        <Image
                            src='/JasonNerd.png'
                            width={85}
                            height={85}
                            alt='Jason the duck with nerd glasses on'
                            className=' transform rotate-12  '
                        />
                    </div>
                    <p className="max-w-[900px] z-20 my-2 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed rounded-md bg-[#ffffff8c] shadow-[0_0_10px_#00000033] shadow-white">
                        We love a good laugh! Submit your funniest joke and it might be featured at our upcoming event.
                    </p>
                    <Button asChild className="text-black bg-[#FEB92F] hover:bg-[#FEB92F] z-20">
                        <Link
                            href='https://forms.gle/oWZraeaaTRjkBJ8s7'
                            target="blank"
                            className="text-black hover:underline"
                            prefetch={false}
                        >
                            Submit Your Joke
                        </Link>
                    </Button>
                    <a href='https://forms.gle/oWZraeaaTRjkBJ8s7'></a>
                </div>
            </div>

        </section>
    )
}

export default Jokes
