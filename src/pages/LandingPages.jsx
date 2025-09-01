import React, { useState } from "react";
// import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import BrideAndGroom from "../components/BrideAndGroom"
import AboutUs from "../components/AboutUs";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import SendingDirectly from "../components/SendingDirectly";
import RSVP from "../components/RSVP";
import Footer from "../components/Footer";
import FloatingMusicPlayer from "../components/FloatingMusicPlayer";
import FloatingNav from "../components/FloatingNav";



const LandingPage = () => {
    const weddingDate = new Date("2025-10-15T00:00:00")
    const [isInvitationOpened, setInvitationOpened] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleInvitationOpen = () => {
        setInvitationOpened(true);
        setIsPlaying(true);
        setTimeout(() => {
          const nextSection = document.getElementById("next-component");
          nextSection?.scrollIntoView({ behavior: "smooth" });
        }, 300);
    }

    return(
      <div className="max-w-[420px] w-full flex flex-col bg-[#F1DDDB] ">

        {/* Hero Section
          <div className="hidden lg:block lg:flex-none lg:w-2/3 heroSticky">
            <Hero isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          </div> */}

       {/* Landing Page */}
        <div className="flex-1">
        <Welcome onInvitationOpen={handleInvitationOpen} />
        {isInvitationOpened && (
          <>
            <div className="bg-black opacity-20" />
            <div className="fixed bottom-1 left-1/2 -translate-x-1/2 flex flex-row justify-between w-48 z-30 p-1 rounded-2xl ">
              <FloatingMusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
              <FloatingNav />
            </div>
            <div id="next-component">
              <BrideAndGroom />
            </div>
            <div id="event-details">
              <EventDetails />
            </div>
            <div id="about-us">
              <AboutUs />
            </div>
            <div id="countdown">
              <Countdown targetDate={weddingDate} />
            </div>
            <div id="rsvp">
              <RSVP />
            </div>
            <div id="sending-directly">
              <SendingDirectly />
            </div>
            <div id="footer">
              <Footer />
            </div> 
            {/* <div id="video-section">
              <VideoSection />
            </div>
            <div id="gallery">
              <Gallery />
            </div>
            <div id="testimonials">
              <Testimonials />
            </div>
            */}
          </>
        )}
        {/* <FloatingMusicPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        /> */}
      </div>
    </div>
    )
}

export default LandingPage