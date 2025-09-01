import React, { useState } from "react";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import BrideAndGroom from "../components/BrideAndGroom"
import FloatingMusicPlayer from "../components/FloatingMusicPlayer";
import AboutUs from "../components/AboutUs";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";


const LandingPage = () => {
    const weddingDate = new Date("2025-10-15T00:00:00")
    const [isInvitationOpened, setInvitationOpened] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleInvitationOpen = () => {
        setInvitationOpened(true)
        setIsPlaying(true)
    }

    return(
      <div className="flex flex-col lg:flex-row">

        {/* Hero Section */}
          <div className="hidden lg:block lg:flex-none lg:w-2/3 heroSticky">
            <Hero isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          </div>

       {/* Landing Page */}
        <div className="w-full lg:w-1/3 flex-1">
        <Welcome onInvitationOpen={handleInvitationOpen} />
        {isInvitationOpened && (
          <>
            <div id="next-component">
              <BrideAndGroom />
            </div>
            <div id="about-us">
              <AboutUs />
            </div>
            <div id="countdown">
              <Countdown targetDate={weddingDate} />
            </div>
            <div id="event-details">
              <EventDetails />
            </div>
            {/* <div id="video-section">
              <VideoSection />
            </div>
            <div id="gallery">
              <Gallery />
            </div>
            <div id="sending-directly">
              <SendingDirectly />
            </div>
            <div id="rsvp">
              <RSVP />
            </div>
            <div id="testimonials">
              <Testimonials />
            </div>
            <div id="footer">
              <Footer />
            </div> */}
          </>
        )}
        <FloatingMusicPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
    )
}

export default LandingPage