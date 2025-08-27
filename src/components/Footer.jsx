export default function WeddingFooter() {
  return (
    <footer className="bg-gradient-to-t from-rose-100 to-white text-center py-6 text-sm text-gray-700 font-light">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-2 italic">“And We created you in pairs.” — Qur'an 78:8</p>
        <p className="mb-4">Ali & Aisyah's Wedding • August 30, 2025 • Cimahi, Indonesia</p>
        <div className="flex justify-center space-x-4 text-rose-500">
          <a href="#rsvp" className="hover:underline">RSVP</a>
          <a href="#location" className="hover:underline">Location</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
        </div>
      </div>
    </footer>
  );
}