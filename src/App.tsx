import Header from '@/components/sections/header/Header';
import About from '@/components/sections/about/About';
import UpcommingEvents from '@/components/sections/upcoming-events/UpcommingEvents';
import Faqs from '@/components/sections/faqs/Faqs';
import Partners from '@/components/sections/partners/Partners';
import Team from '@/components/sections/team/Team';
import SubmitJoke from '@/components/sections/submit-joke/SubmitJoke';
import Footer from '@/components/sections/footer/Footer';
import Menu from '@/components/ui/menu/Menu';
import Goals from '@/components/sections/goals/Goals';
import CallForSpeakers from '@/components/sections/call-for-speakers/CallForSpeakers';
import Gallery from '@/components/sections/gallery/Gallery';
import './App.css';
function App() {
  return (
      <div className="app">
        <main>
          <Menu />
          <section id="home">
            <Header />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="goals">
            <Goals />
          </section>
          <section id="organizers">
            <Team />
          </section>
          <section id="sponsors">
           <Partners />
          </section>
          <section id="call_for_speakers">
            <CallForSpeakers />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <section id="events">
            <UpcommingEvents />
          </section>
          <section id="faq">
            <Faqs />
          </section>
          <SubmitJoke />
          <Footer />
        </main>
      </div>
  );
}

export default App;
