import { UserIcon, EnvelopeIcon, CheckCircleIcon} from "@heroicons/react/24/solid";
import "../../style/RSVP.css";
import { useState, useEffect, useRef } from "react";

const RSVP = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [attending, setAttending] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [isAttending, setIsAttending] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const rsvpRef = useRef(null)

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Nama wajib diisi";
    if (!email.trim()) newErrors.email = "Email wajib diisi";
    if (!attending) newErrors.attending = "Mohon pilih kehadiran";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbzojTILEi4suMacuckYZadVsJECx68sBiRcSvsJe2LrUTPdfXBPiewvo8flfAtrGowD5Q/exec"; // Replace with your actual URL
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("attending", attending);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      setSubmittedName(name);
      setIsAttending(attending === "yes");
      setShowCard(true);
      setName('');
      setEmail('');
      setAttending('');
      setErrors({});
    } catch (error) {
      console.error("Submission failed", error);
    }finally {
        setLoading(false);
    }
  };

  const ThankYouCard = ({ name, isAttending, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md text-center animate-fade-in">
        <h3 className="text-2xl font-bold text-[#C29897] mb-4">
          {isAttending ? "Terima Kasih 💖" : "Doa Restu Anda 💌"}
        </h3>
        <p className="text-[#C29897] text-lg">
          {isAttending
            ? `${name}, kehadiranmu sangat berarti bagi kami.\nSemoga Allah membalas dengan kebaikan dan keberkahan.`
            : `${name}, terima kasih atas do’a dan restu Anda.\nSemoga Allah membalas dengan keberkahan meski tak bisa hadir.`}
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-6 py-2 bg-[#C29897] text-white rounded-lg hover:bg-[#D9B2AF] transition"
        >
          Tutup
        </button>
      </div>
    </div>
  );

  useEffect(() => {
        const handleScroll = () => {
          if (rsvpRef.current) {
            const rect = rsvpRef.current.getBoundingClientRect();
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
    <div className="relative py-16 bg-gradient-to-b from-[#F1DDDB] to-[#EDD0CD]" id="rsvp">
      <h2 className={`text-5xl font-elmessir text-center text-secondary mb-4 ${
            isShaking ? "animate-shake" : ""
          }`}
          ref={rsvpRef}
        >
          RSVP
        </h2>
      <div className="max-w-lg mx-auto">
        <form
          onSubmit={handleSubmit}
          className="relative bg-white p-8 shadow-lg rounded-xl transform hover:shadow-2xl transition-all duration-500 ease-in-out"
        >
          <div className="mb-6">
            <label className="block text-[#C29897] font-semibold mb-2">
              <div className="flex items-center">
                <UserIcon className="h-6 w-6 mr-2 text-[#C29897]" /> Nama
              </div>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg text-[#C29897] placeholder-[#C29897] bg-white focus:ring-2 focus:ring-[#C29897] focus:outline-none transition duration-300"
              required
              placeholder="Contoh: Ifalna"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-[#C29897] font-semibold mb-2">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 mr-2 text-[#C29897]" /> Email
              </div>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg text-[#C29897] placeholder-[#C29897] bg-white focus:ring-2 focus:ring-[#C29897] focus:outline-none transition duration-300"
              required
              placeholder="Contoh: ifalna@gmail.com"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-[#C29897] font-semibold mb-2">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 mr-2 text-[#C29897]" /> Apakah akan hadir?
              </div>
            </label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg bg-white text-[#C29897] focus:ring-2 focus:ring-[#C29897] focus:outline-none transition duration-300"
              required
            >
              <option value="">Pilih</option>
              <option value="yes">Saya akan hadir</option>
              <option value="no">Berhalangan hadir</option>
            </select>
            {errors.attending && <p className="text-sm text-red-500 mt-1">{errors.attending}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#C29897] text-white font-bold rounded-lg shadow-md hover:bg-[#D9B2AF] transition-all duration-300"
          >
            {loading ? "Mengirim..." : "Kirim RSVP"}
          </button>
        </form>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${Math.random() * 8 + 3}rem`,
              height: `${Math.random() * 8 + 3}rem`,
              opacity: Math.random(),
              animation: `float ${Math.random() * 20 + 10}s infinite ease-in-out`,
              backgroundImage: "url('path_to_heart_image.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>

      {showCard && (
        <ThankYouCard
          name={submittedName}
          isAttending={isAttending}
          onClose={() => setShowCard(false)}
        />
      )}
    </div>
  );
};

export default RSVP;