import React, { useState } from "react";

export default function PrimeProCleaningSite() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", service: "House Cleaning", date: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Booking request', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm({ name: "", email: "", phone: "", address: "", service: "House Cleaning", date: "", notes: "" });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">PP</div>
            <div>
              <h1 className="text-lg font-semibold">PrimePro Cleaning</h1>
              <p className="text-xs text-gray-500">Residential • Commercial • Duct • Warehouse</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Professional Cleaning Services across Australia</h2>
            <p className="mt-4 text-gray-600">Reliable, insured teams offering house cleaning, commercial & warehouse cleaning, and specialist duct cleaning. Eco-friendly products, trained staff, easy online booking.</p>
          </div>
        </section>

        <section id="book" className="mt-16 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold">Book a Service</h3>
          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Full name" className="p-3 border rounded" />
            <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email" className="p-3 border rounded" />
            <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="p-3 border rounded" />
            <input name="address" value={form.address} onChange={handleChange} placeholder="Service address (suburb, state)" className="p-3 border rounded" />
            <select name="service" value={form.service} onChange={handleChange} className="p-3 border rounded">
              <option>House Cleaning</option>
              <option>Commercial / Warehouse</option>
              <option>Duct Cleaning</option>
              <option>Carpet / Upholstery</option>
            </select>
            <input name="date" value={form.date} onChange={handleChange} type="date" className="p-3 border rounded" />
            <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Additional notes" className="p-3 border rounded md:col-span-2" />
            <div className="md:col-span-2 flex items-center gap-4">
              <button className="bg-blue-600 text-white px-5 py-3 rounded-md" type="submit">Send Booking Request</button>
            </div>
            {submitted && <div className="md:col-span-2 text-green-600">Thanks — your request has been submitted. We'll contact you soon.</div>}
          </form>
        </section>
      </main>
    </div>
  );
}
