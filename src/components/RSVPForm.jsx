export default function RSVPForm() {
  return (
    <section className="mx-4 md:mx-auto max-w-xl my-8">
      <h2 className="text-xl font-semibold text-center mb-4">RSVP</h2>
      <form className="bg-grey p-6 rounded-lg shadow space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Will attend</option>
          <option>Cannot attend</option>
        </select>
        <button type="submit" className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600">
          Submit
        </button>
      </form>
    </section>
  )
}