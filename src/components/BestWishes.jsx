import { useState, useEffect } from "react";
import { ChatBubbleLeftRightIcon, UserIcon } from "@heroicons/react/24/solid";

const BestWishes = () => {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  


  const scriptURL = "https://script.google.com/macros/s/AKfycbzojTILEi4suMacuckYZadVsJECx68sBiRcSvsJe2LrUTPdfXBPiewvo8flfAtrGowD5Q/exec" // Replace with your deployed Apps Script URL
  const sheetReadURL = "https://docs.google.com/spreadsheets/d/1OMyuhsW0ujO1OaLquRIZBLw49cOsxres4MQOAt4BNbc/gviz/tq?tqx=out:json&sheet=BestWishes"; // Replace with your Sheet ID

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
  } catch (err) {
    console.error("Failed to fetch wishes", err);
  }
};

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(""), 5000);
            return () => clearTimeout(timer);
        }
        }, [status]);

  useEffect(() => {
    fetchMessages();
  }, []);

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
        fetchMessages();
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
        <h2 className="text-4xl font-bold text-center mb-4">Ucapan & Do’a Restu</h2>
        <p className="text-center mb-8 text-[#C29897]">
          Kirimkan harapan dan cinta untuk mempelai 💌
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md mb-12">
          <div className="mb-4">
            <label className="flex items-center font-semibold mb-2">
              <UserIcon className="h-5 w-5 mr-2 text-[#C29897]" />
              Nama Anda
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-[#D8B5B4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C29897]"
              placeholder="Contoh: Zahra Nabila"
              required
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center font-semibold mb-2">
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2 text-[#C29897]" />
              Ucapan atau Do’a
            </label>
            <textarea
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
            <p className="text-sm text-center text-[#6B4C4C] mt-4">
                {status}
            </p>
            )}


        </form>
        
        <div className="space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
              <p className="font-semibold text-[#C29897]">{msg.name}</p>
              <p className="text-sm text-gray-500">{msg.date}</p>
              <p className="mt-2 text-[#6B4C4C] whitespace-pre-line">{msg.wish}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestWishes;
