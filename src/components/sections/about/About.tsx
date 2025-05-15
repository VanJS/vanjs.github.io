import vanjs_host from "/photos/vanjs_host.jpg";

export default function About() {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="items-center md:items-start space-y-6 flex flex-col">
            <p className="m-4 md:ml-0 text-[17px] md:w-sm md:pr-6 lg:w-md text-[#1C1B1B] text-left">
              We are a monthly event for JavaScript enthusiasts in Vancouver, BC. We are focused on JavaScript, front-end
              technology, and the open web. Our GitHub repo contains our goals, our Call for Speakers, and our Code
              of Conduct, so come check it out and propose a talk!
            </p>
            <a
              href="https://github.com/VanJS/meetup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer w-50 px-8 py-3 bg-[#feb92f] border-1 border-black rounded-lg hover:bg-black hover:text-white"
            >
              Check It Out Here
            </a>
          </div>

          {/* Image Side */}
          <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
            <img 
              src={vanjs_host} 
              alt="VanJS Meetup"
              className="w-full h-full lg:w-[533px] lg:h-[334px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
