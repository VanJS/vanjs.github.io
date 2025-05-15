import linkedin_icon from "/general/linkedin_icon.png";
import discord_icon from "/general/discord_icon.png";
import meetup_icon from "/general/meetup_icon.png";
import luma_icon from "/general/luma_icon.png";
import discord_logo from "/general/discord_logo.png";
import ruben_duck from "/general/ruben.png";
import youtube_logo from "/general/youtube_logo.png";
import van_js_logo_white from "/general/vanjs_logo_white.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* VanJS Logo and Social Links */}
        <div className="md:ml-10 flex flex-col items-center md:items-start">
          <img src={van_js_logo_white} className="w-[192px] mb-4" alt="" />
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/vancouverjs/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={linkedin_icon} alt="LinkedIn" className="w-8" />
            </a>
            <a href="https://discord.gg/TBWB9tMmmC" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={discord_icon} alt="Discord" className="w-8" />
            </a>
            <a href="https://www.meetup.com/vancouver-javascript-developers/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={meetup_icon} alt="Meetup" className="w-8" />
            </a>
            <a href="https://lu.ma/vanjs" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={luma_icon} alt="Luma" className="w-8" />
            </a>
            <a href="https://www.youtube.com/@vancouverjs" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
              <img src={youtube_logo} alt="Luma" className="w-8" />
            </a>
          </div>
        </div>

        {/* Join Our Discord */}
        <div className="m-6 md:m-0 flex flex-col items-center md:items-start md:ml-6">
          <h3 className="text-xl font-semibold mb-4">Join Our Discord</h3>
          
          <p className="text-left">
            Connect with our community on Discord to get real-time help, share ideas, and discuss projects!
          </p>
          
          <div className="flex items-center gap-2 mb-2">
            <img src={ruben_duck} alt="Duck" className="w-12 rotate-320" />
            <a 
            href="https://discord.gg/TBWB9tMmmC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="-ml-4 z-2">
              <img src={discord_logo} alt="Discord" className="w-32" />
            </a>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="md:ml-15 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4">Helpful Links</h3>
          <ul className="flex flex-col gap-2 text-center md:text-left">
            <li>
              <a 
                href="https://github.com/VanJS/meetup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                The VanJS GitHub Repo
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/VanJS/meetup/blob/master/SPEAKING.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Call For Speakers
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/VanJS/meetup/blob/master/CONDUCT.md" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Code Of Conduct
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
