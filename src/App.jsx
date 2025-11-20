
import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", service: "House Cleaning", date: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Booking request", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm({ name: "", email: "", phone: "", address: "", service: "House Cleaning", date: "", notes: "" });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Prime Pro Cleaning</h1>
      <p className="mb-6">Professional cleaning services for homes, warehouses, and businesses across Australia.</p>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="p-2 border rounded w-full" required />
        <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="p-2 border rounded w-full" required />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-2 border rounded w-full" required />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="p-2 border rounded w-full" />
        <select name="service" value={form.service} onChange={handleChange} className="p-2 border rounded w-full">
          <option>House Cleaning</option>
          <option>Commercial / Warehouse</option>
          <option>Duct Cleaning</option>
          <option>Carpet / Upholstery</option>
        </select>
        <input name="date" value={form.date} onChange={handleChange} type="date" className="p-2 border rounded w-full" />
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Additional Notes" className="p-2 border rounded w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Booking Request</button>
        {submitted && <p className="text-green-600">Thanks! Your request has been submitted.</p>}
      </form>
    </div>
  );
}
