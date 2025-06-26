import { scrollToSection } from '../../../utils/navigation';

export default function Header() {
  return (
    <header className="bg-[#feb92f] h-[60vh] flex items-center justify-center w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-[50px] font-bold text-gray-900 mb-8 leading-tight">
          We foster the JS <br className="hidden sm:block" />
          community&nbsp; in Vancouver
        </h1>
        <button 
          onClick={() => scrollToSection('events')}
          className="bg-[#feb92f] border-1 border-black text-black px-6 py-3 rounded-md text-lg font-medium
                   transition-colors duration-200
                   transform hover:bg-black hover:text-white cursor-pointer"
        >
          Check Out Our Upcoming Events
        </button>
      </div>
    </header>
  );
};
