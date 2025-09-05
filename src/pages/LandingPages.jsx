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
import BestWishes from "../components/BestWishes";



const LandingPage = () => {
    const weddingDate = new Date("2025-09-15T00:00:00")
    const [isInvitationOpened, setInvitationOpened] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleInvitationOpen = () => {
        setInvitationOpened(true);
        setIsPlaying(true);
    }

    return(
      <div className="max-w-[873px] w-full mx-auto flex flex-col bg-[#F1DDDB] drop-shadow-rose-500 shadow-2xl ">
       {/* Landing Page */}
        <div className="flex-1">
        <Welcome onInvitationOpen={handleInvitationOpen} />
        {isInvitationOpened && (
          <>
            <div className="bg-black opacity-20" />
            <div className="fixed bottom-32 right-0 flex flex-col justify-center items-center gap-8 z-60 p-1 rounded-2xl ">
              <FloatingMusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
              <FloatingNav />
            </div>
            <div id="next-component">
              <AboutUs />
            </div>
            <div id="profil">
              <BrideAndGroom />
            </div>
            <div id="countdown">
              <Countdown targetDate={weddingDate} />
            </div>
            <div id="event-details">
              <EventDetails />
            </div>
            <div id="rsvp">
              <RSVP />
            </div>
            <div id="sending-directly">
              <SendingDirectly />
            </div>
            <div id="wishes">
              <BestWishes />
            </div> 
            <div id="footer">
              <Footer />
            </div> 
          </>
        )}
      </div>
    </div>
    )
}

export default LandingPage