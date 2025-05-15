import { CalendarHeart,MapPin  } from 'lucide-react';

interface Event {
  id: number;
  month: string;
  day: string;
  title: string;
  time: string;
  location: string;
  link: string;
}

const events: Event[] = [
  {
    id: 1,
    month: 'APR',
    day: '16',
    title: 'VanJS Easter Talks',
    time: '5:30 - 8:30 PM',
    location: 'Northeastern University',
    link: 'https://lu.ma/922x0qa2'
  },
  {
    id: 2,
    month: 'MAY',
    day: '15',
    title: 'Super VanJS',
    time: '5:30 - 8:30 PM',
    location: 'BCIT Downtown Campus',
    link: 'https://lu.ma/tfbpdw58'
  }
];

export default function UpcommingEvents() {
  return (
    <section id="events" className="text-[17px] text-[#1C1B1B] bg-[#F8F8F8] w-full py-16 mb-8">
      <div className="md:w-[700px] lg:w-[1000px]">
        <div className="mb-8">
          <h1 className="text-[40px] font-bold mb-4 mt-8">Upcoming Events</h1>
          <p className="ml-4 mr-4 text-gray-600">Check out our upcoming VanJS events in Vancouver! Learn, connect, and grow with fellow JavaScript enthusiasts.</p>
        </div>      
        <div className="w-[350px] xs:w-[375px] sm-plus:w-[414px] sm:w-[270px] md:w-[700px] lg:w-full mx-auto space-y-6 mb-8">
          {events.map((event) => (
            <div key={event.id} className="border-t border-gray-200 py-6 grid grid-cols-12 gap-4 items-center">
              {/* Date Column */}
              <div className="col-span-2 sm:col-span-1 text-center">
                <div className="text-gray-500 font-medium">{event.month}</div>
                <div className="text-4xl font-bold">{event.day}</div>
              </div>
              
              {/* Content Column */}
              <div className="col-span-10 sm:col-span-6">
                <h3 className="text-xl font-semibold mb-2 text-left">{event.title}</h3>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center text-gray-600">
                    <CalendarHeart className="w-4 h-4 mr-1" />
                    <div className="text-[13px] text-left md:text-[16px] lg:text-[18px]">{event.time}</div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />                      
                    <div className="text-[13px] text-left md:text-[16px] lg:text-[18px]">{event.location}</div>                    
                  </div>
                </div>
              </div>

              {/* Button Column */}
              <div className="col-span-12 sm:col-span-5 flex items-center justify-end">
                <a 
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 bg-[#feb92f] border-1 border-black text-black rounded-lg hover:text-white hover:bg-black transition-colors text-center"
                >
                  Save Your Spot Here!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
