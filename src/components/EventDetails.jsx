import { 
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  HeartIcon 
} from "@heroicons/react/24/outline";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "../../style/EventDetails.css";
import React, { useEffect, useRef, useState } from "react";

// Konfigurasi Peta
const center = {
  lat: -6.869621104486254,  // Latitude dummy
  lng: 107.56846866316941, // Longitude dummy
};

const customIcon = L.divIcon({
  html: `
    <div style="width:32px; height:32px; display:flex; align-items:center; justify-content:center;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F70B1C" width="24" height="24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3 
                 19.58 3 22 5.42 22 8.5
                 c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  `,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const mapsLink = `https://www.google.com/maps?q=${center.lat},${center.lng}`;

const EventDetails = () => {
  const [isShaking, setIsShaking] = useState(false);
  const eventDetailsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (eventDetailsRef.current) {
        const rect = eventDetailsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsShaking(true);
        } else {
          setIsShaking(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative py-12 m-4 mt-8 rounded-2xl bg-gradient-to-r from-[#F1DDDB] via-[#EDD0CD] to-[#D9B2AF] text-center overflow-hidden shadow-2xl drop-shadow-pink-300 border-1 border-rose-300 bg-cover bg-center bg-no-repeat bg-[url('/bgc.png')]">
      <h2
        className={`text-5xl font-elmessir tracking-wider text-secondary mb-2 ${
          isShaking ? "animate-shake" : ""
        }`}
        ref={eventDetailsRef}
      >
        Acara
      </h2>
      <p className="text-secondary p-4 text-md">Kami bermaksud untuk mengundang saudara dalam acara pernikahan kami pada:</p>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Card Container */}
        {[
          { icon: <CalendarIcon />, label: "Tanggal:", value: "[ Senin 15 September 2025]" },
          { icon: <ClockIcon />, label: "Waktu:", value: 
            <div>
              <div className="text-lg text-rose-300">Akad Nikah Jam:</div> [09.00 WIB ]<br /> 
              <div className="text-lg text-rose-300">Resepsi Jam:</div>[11.00 WIB - Selesai] 
            </div>
          },
          { icon: <MapPinIcon />, label: "Lokasi:", value: "Jl. Sariwangi Kp. Lembur Tengah No.11 RT02/RW 05 Desa Sariwangi Kec. Prongpong Kab. Bandung Barat, Jawa Barat" }
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start space-x-4 bg-white p-6 m-6 shadow-lg rounded-lg relative overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className=" flex flex-wrap flex-col justify-center items-center mx-auto">
              <div className="flex-shrink-0">
                {React.cloneElement(item.icon, { className: "h-10 w-10 text-[#F1A6A6] animate-pulse" })}
              </div>
              <div className="text-xl font-semibold text-[#C29897]">{item.label}</div>
              <div className=" text-[#D9B2AF]">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative py-12 mx-4 md:mx-8 lg:mx-16 z-10">
        <h3 className="text-3xl font-bold text-[#C29897] mb-6">Peta Lokasi</h3>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <MapContainer center={center} zoom={15} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center} icon={customIcon}>
              <Popup autoOpen={true}>
                <div className="text-[#C29897] font-semibold">
                  Wedding Location
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="w-fit px-4 py-3 mt-8 mx-auto bg-gradient-to-r from-[#ce938f] to-[#cc8b85] text-white hover:text-primary rounded-full shadow-lg hover:from-[#EDD0CD] hover:to-[#F1DDDB] transition duration-300 animate-pulse font-serif zoom-button">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Buka Lokasi
          </a>
        </div>
      </div>
    </div>
  )
}

export default EventDetails;