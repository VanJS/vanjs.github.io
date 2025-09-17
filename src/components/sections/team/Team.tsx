import bibi from "/photos/01_bibi.png";
import shawn from "/photos/02_shawn.png";
import anton from "/photos/03_anton.png";

export default function Team() {
  const teamMembers = [
    {
      name: "Bibi Souza",
      role: "Co-organizer",
      image: bibi,
      linkedin: "https://www.linkedin.com/in/bibschan/",
    },
    {
      name: "Shawn McKay",
      role: "Co-organizer",
      image: shawn,
      linkedin: "https://www.linkedin.com/in/shmck/",
    },
    {
      name: "Anton Zalaldinov",
      role: "Co-organizer",
      image: anton,
      linkedin: "https://www.linkedin.com/in/zalaldinov/",
    },
  ];

  return (
    <section className="bg-[#F8F8F8] text-[17px] py-16 px-4 w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">The Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet the passionate team behind VanJS dedicated to bring our events to life,
          creating unforgettable experiences, and building stronger community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center text-[#1C1B1B]">
            <div className="mb-4 bg-[#feb92f] scale-75 rounded-full">
              <img
                src={member.image}
                alt={member.name}
                className="size-48 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-600 mb-2">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="#1C1B1B"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="text-[#1C1B1B]">LinkedIn</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
