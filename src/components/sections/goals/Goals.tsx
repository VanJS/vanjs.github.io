import goals_icon_1 from "/general/01_goals_icon.png";
import goals_icon_2 from "/general/02_goals_icon.png";
import goals_icon_3 from "/general/03_goals_icon.png";
import goals_icon_4 from "/general/04_goals_icon.png";

export default function Goals() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-12">
        Our High-Level Goals
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Connect and educate */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-amber-400 rounded-full p-6 mb-4">
            <img src={goals_icon_1} alt="Connect and educate" className="w-16" />
          </div>
          <h3 className="text-left text-[17px] w-[254px] mb-2">Connect and educate the JS community in Vancouver</h3>
        </div>

        {/* Foster culture */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-amber-400 rounded-full p-6 mb-4">
          <img src={goals_icon_2} alt="Connect and educate" className="w-16" />
          </div>
          <h3 className="text-left text-[17px] w-[204px] mb-2">Foster a culture of quality and respect</h3>
        </div>

        {/* Stay focused */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-amber-400 rounded-full p-6 mb-4">
          <img src={goals_icon_3} alt="Connect and educate" className="w-16" />
          </div>
          <h3 className="text-left text-[17px] w-[254px] mb-2">Stay focused on developer-centric topics and events</h3>
        </div>

        {/* Support newcomers */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-amber-400 rounded-full p-6 mb-4">
          <img src={goals_icon_4} alt="Connect and educate" className="w-16" />
          </div>
          <h3 className="text-left text-[17px] w-[230px] mb-2">Support newcomers and underrepresented groups in our community</h3>
        </div>
      </div>
    </section>
  );
}
