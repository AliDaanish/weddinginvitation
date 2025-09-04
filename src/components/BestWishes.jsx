import { useState, useEffect, useRef } from "react";
import { ChatBubbleLeftRightIcon, UserIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { id } from "date-fns/locale";

function formatLocalized(dateValue) {
  try {
    let parsed;

    // Handle custom string like "Date(2025,3,9,9,36,0)"
    if (typeof dateValue === "string" && dateValue.startsWith("Date(")) {
      const parts = dateValue
        .replace("Date(", "")
        .replace(")", "")
        .split(",")
        .map((p) => parseInt(p.trim(), 10));

      parsed = new Date(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5]);
    } else {
      parsed = new Date(dateValue);
    }

    if (isNaN(parsed)) throw new Error("Invalid date");

    return format(parsed, "EEEE, d MMMM yyyy – HH.mm 'WIB'", { locale: id });
  } catch (error) {
    console.warn("Failed to format date:", dateValue, error);
    return "Tanggal tidak tersedia";
  }
}


const BestWishes = () => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const bestWishesRef = useRef(null);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxNceN8MAPlvefvVi-7TaAgmMOT8NDg4Dbcl6yCVZCMZx70pXnpsP8gtARfwxulKsyuaw/exec";
  const sheetReadURL =
    "https://docs.google.com/spreadsheets/d/1-kijiq46xn2FasSxkPFbRF5VY-v6VPZSVUlT1ybY44U/gviz/tq?tqx=out:json&sheet=Sheet1";

  const fetchMessages = async () => {
    try {
      const res = await fetch(sheetReadURL);
      const text = await res.text();
      const json = JSON.parse(text.substr(47).slice(0, -2));
      const rows = json.table.rows.map((row) => ({
        name: row.c[0]?.v || "Anonim",
        wish: row.c[1]?.v || "",
        date: row.c[2]?.v || "",
      }));
      setMessages(rows.reverse());
      setError("");
    } catch (err) {
      console.error("Failed to fetch wishes", err);
      setError("❌ Gagal memuat ucapan. Silakan coba lagi nanti.");
    }
  };

  useEffect(() => {
      const handleScroll = () => {
        if (bestWishesRef.current) {
          const rect = bestWishesRef.current.getBoundingClientRect();
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

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !wish.trim()) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Message", wish);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      setName("");
      setWish("");
      setStatus("✅ Do’a berhasil dikirim! Terima kasih atas restunya.");
      setTimeout(fetchMessages, 1000); // slight delay to ensure sheet updates
    } catch (err) {
      console.error("Submission failed", err);
      setStatus("❌ Gagal mengirim. Silakan coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-[#F9F4F3] text-[#C29897]" id="best-wishes">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className={`text-4xl font-elmessir text-center text-secondary mb-4 ${
            isShaking ? "animate-shake" : ""
          }`}
          ref={bestWishesRef}
        >
          Ucapan & Do’a Restu
        </h2>
        <p className="text-center mb-8 text-[#C29897] animate-pulse">
          Kirimkan harapan dan Do’a untuk mempelai 💌
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md mb-12"
          aria-label="Form kirim ucapan"
        >
          <div className="mb-4">
            <label className="flex items-center font-semibold mb-2" htmlFor="name">
              <UserIcon className="h-5 w-5 mr-2 text-[#C29897]" />
              Nama Anda
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29897]"
              placeholder="Contoh: Zahra Nabila"
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center font-semibold mb-2" htmlFor="wish">
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2 text-[#C29897]" />
              Ucapan atau Do’a
            </label>
            <textarea
              id="wish"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[#C29897]"
              placeholder="Tulis ucapan atau do’a restu..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#C29897] text-white font-bold rounded-lg hover:bg-[#D9B2AF] transition"
          >
            {loading ? "Mengirim..." : "Kirim Do’a"}
          </button>

          {status && (
            <p className="text-sm text-center text-[#6B4C4C] mt-4">{status}</p>
          )}
        </form>

        {error && (
          <p className="text-center text-red-500 mb-6">{error}</p>
        )}

        <div className="space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-[#C29897]">{msg.name}</p>
              <p className="text-sm text-gray-500">
                {msg.date ? formatLocalized(msg.date) : "Tanggal tidak tersedia"}
              </p>
              <p className="mt-2 text-[#6B4C4C] whitespace-pre-line">{msg.wish}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestWishes;