import atono_icon from "/general/atono_icon.jpg";
import trust_flight_icon from "/general/trust_flight_icon.jpg";

export default function Partners() {
  return (
    <section className="mt-8 mb-8 py-16 px-4 text-[#1C1B1B]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl lg:text-[40px] font-bold mb-4">Partners & Sponsors</h1>
        <p className="text-gray-600 mb-12 text-[16px] md:text-[17px]">
          We are incredibly grateful to our partners and sponsors for helping us to grow and innovate!
        </p>
        
        <div className="grid grid-cols-2 md:text-[17px] md:w-[300px] md:mx-auto md:grid-cols-2 gap-8 justify-items-center items-center mb-12">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-[#4285f4] rounded-lg flex items-center justify-center">
            <a
              href="https://www.atono.io/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={atono_icon}
                alt="Atono"
                className="object-contain"
              /></a>
            </div>
            <p className="mt-2 font-medium">Atono</p>
          </div>   
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
              <a
              href="https://www.trustflight.com/"
              target="_blank"
              rel="noopener noreferrer">
              <img
                src={trust_flight_icon}
                alt="Trust Flight"
                className="object-contain"
              />
              </a>
            </div>
            <p className="mt-2 font-medium">TrustFlight</p>
          </div>
        </div>

        <a
          href="https://github.com/VanJS/meetup/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-[#feb92f] border-1 border-black text-black rounded-lg hover:text-white hover:bg-black"
        >
          Become An Sponsor
        </a>
      </div>
    </section>
  );
}
