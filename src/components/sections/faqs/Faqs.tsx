import { useState } from 'react';
import vanjs_faqs from "/photos/vanjs_faqs.jpg";
interface FaqItem {
  question: string;
  answer: string[];
}

const faqs: FaqItem[] = [
  {
    question: "Who can attend the meetup?",
    answer: ["Our meetup welcomes everyone interested in the Vancouver JavaScript community! Whether you are a complete beginner, an experienced developer, or simply curious about JavaScript, we invite you to join us. We welcome humans from all backgrounds, genders, ages and experiences—come be part of our community!"]
  },
  {
    question: "When and where does the meetup take place?",
    answer: ["We usually meet once a month, and occasionally have smaller related events running 1-2 times a month. The location varies, largely depending on our ability to secure a venue. We typically announce the details a month in advance."]
  },
  {
    question: "You have sponsors but charge for the ticket?",
    answer: ["Our entrance fee is mostly symbolic, as we ran VanJS free of charge for the longest time and found that 40% of the RSVPs were no-shows, leaving us with tons of food and drinks that went to waste. The meetup organizers don't take profit from the event, everything is reinvested into the meetup (prizes, better venues, parties, etc).",
    "If you want to attend the meetup but have no means to contribute at this time, reach out to one of our organizers on LinkedIn and they will be happy to assist on a case-by-case basis."]
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string[]; 
  isOpen: boolean; 
  onClick: () => void;
}) => {
  return (
    <div className={`border-1 border-[#feb92f] mb-4 last:mb-0 ${isOpen ? 'bg-[#feb92f]' : 'bg-white'} rounded-lg overflow-hidden transition-colors duration-200`}>
      <button
        className={`w-full py-4 px-6 text-left flex justify-between items-center transition-colors duration-200 ${
          isOpen ? 'bg-[#feb92f]' : 'bg-white hover:bg-[#feb92f]'
        }`}
        onClick={onClick}
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <span className={`flex items-center justify-center w-6 h-6 text-lg font-bold transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`transition-all duration-200 overflow-auto ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="p-6 text-black text-left">{answer.map((line, index) => <p className="mb-2 pb-3" key={index}>{line}</p>)}</div>
      </div>
    </div>
  );
};

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="text-[#1C1B1B] text-[17px] py-16 px-4 md:px-8 max-w-7xl mx-auto mt-12 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="relative md:sticky md:top-16">
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            <img
              src={vanjs_faqs}
              alt="VanJS Meetup Community"
              className="h-60 lg:h-120 md:h-140 object-cover"
            />
          </div>
        </div>
        
        <div>
          <div className="mb-8">
            <h1 className="text-[40px] font-bold text-gray-900 mb-2">FAQs</h1>
            <p className="text-gray-600">Got questions? Our FAQ has answers! Explore common queries here.</p>
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
