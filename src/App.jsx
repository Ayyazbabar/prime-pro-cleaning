import React, { useState } from "react";

// PrimePro Cleaning - Single-file React component
// Tailwind CSS utility classes used (assumes Tailwind is configured in the project)
// Replace placeholder images and links with your real assets.

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", service: "House Cleaning", date: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Placeholder: In production, replace with API call (Stripe, Zapier, Netlify Forms, or your backend)
    // Example: fetch('/api/book', { method: 'POST', body: JSON.stringify(form) })
    console.log('Booking request', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm({ name: "", email: "", phone: "", address: "", service: "House Cleaning", date: "", notes: "" });
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* NAV */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">PP</div>
            <div>
              <h1 className="text-lg font-semibold">PrimePro Cleaning</h1>
              <p className="text-xs text-gray-500">Residential • Commercial • Duct • Warehouse</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#book" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700">Book Now</a>
          </nav>
          <div className="md:hidden">
            <a href="#book" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm">Book</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold leading-tight">Professional Cleaning Services across Australia</h2>
            <p className="mt-4 text-gray-600">Reliable, insured teams offering house cleaning, commercial & warehouse cleaning, and specialist duct cleaning. Eco-friendly products, trained staff, easy online booking.</p>

            <div className="mt-6 flex gap-3">
              <a href="#book" className="bg-green-500 text-white px-5 py-3 rounded-md font-semibold shadow">Get a Quote</a>
              <a href="#services" className="border border-gray-300 px-5 py-3 rounded-md">See Services</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p><strong>Insured • ABN Ready • GST Registered (if applicable)</strong></p>
            </div>
          </div>

          <div className="flex justify-center">
            {/* Replace with hero image */}
            <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/images/hero-placeholder.jpg" alt="Cleaning team" className="w-full object-cover h-56" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-16">
          <h3 className="text-2xl font-bold">Our Services</h3>
          <p className="mt-2 text-gray-600">We cover everything from homes to industrial warehouses — all with safety and professionalism.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold">Residential Cleaning</h4>
              <p className="mt-2 text-sm text-gray-600">Standard cleaning, deep cleaning, move-in/move-out, and regular scheduled visits.</p>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                <li>✔ Trained staff</li>
                <li>✔ Eco-friendly products</li>
                <li>✔ Flexible scheduling</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold">Commercial & Warehouse</h4>
              <p className="mt-2 text-sm text-gray-600">Large area cleaning, pallet aisles, floor scrubbing, industrial vacuums and waste removal.</p>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                <li>✔ Night/weekend shifts</li>
                <li>✔ Equipment & safety gear</li>
                <li>✔ Contract pricing available</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold">Duct & Specialist Cleaning</h4>
              <p className="mt-2 text-sm text-gray-600">Duct cleaning, carpet and upholstery, pressure washing, and post-construction clean-ups.</p>
              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                <li>✔ HEPA vacuums</li>
                <li>✔ Inspection camera reports</li>
                <li>✔ Certificate of service available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mt-16">
          <h3 className="text-2xl font-bold">Pricing (sample)</h3>
          <p className="mt-2 text-gray-600">Final price depends on job size — use this as a starting guide.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold">House Cleaning</h4>
              <p className="mt-2 text-gray-600">From AUD 80 - 180 per visit</p>
              <p className="mt-3 text-sm text-gray-500">Standard clean for 1-3 bedroom homes.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold">Warehouse Cleaning</h4>
              <p className="mt-2 text-gray-600">From AUD 200 - 2000 per job</p>
              <p className="mt-3 text-sm text-gray-500">Based on warehouse size and scope.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-5">
              <h4 className="font-semibold">Duct Cleaning</h4>
              <p className="mt-2 text-gray-600">From AUD 20 - 50 per vent</p>
              <p className="mt-3 text-sm text-gray-500">Includes inspection photos & report.</p>
            </div>
          </div>
        </section>

        {/* BOOKING FORM */}
        <section id="book" className="mt-16 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold">Book a Service</h3>
          <p className="mt-2 text-gray-600">Fill this short form and we'll contact you with a quote and availability.</p>

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
              <div className="text-sm text-gray-500">We will reply within 24 hours. (Replace with your actual SLA)</div>
            </div>

            {submitted && <div className="md:col-span-2 text-green-600">Thanks — your request has been submitted. We'll contact you soon.</div>}
          </form>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="mt-16">
          <h3 className="text-2xl font-bold">What Clients Say</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <blockquote className="bg-white rounded-lg shadow p-5">"Fast, reliable and thorough — our go-to cleaners for months." — Amanda, Sydney</blockquote>
            <blockquote className="bg-white rounded-lg shadow p-5">"Great industrial cleaning crew and excellent communication." — Raj, Melbourne</blockquote>
            <blockquote className="bg-white rounded-lg shadow p-5">"Duct cleaning with photos was very professional." — Claire, Brisbane</blockquote>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mt-16 bg-white rounded-lg shadow p-6">
          <h3 className="text-2xl font-bold">About PrimePro Cleaning</h3>
          <p className="mt-2 text-gray-600">PrimePro Cleaning was founded to deliver trustworthy, insured cleaning services across Australia. We use trained staff, industry-grade equipment and eco-friendly cleaning products. We provide ABN, insurance proof, and can issue tax invoices on request.</p>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Our Promise</h4>
              <p className="text-sm text-gray-600">Reliable scheduling, professional teams, and satisfaction guarantee.</p>
            </div>
            <div>
              <h4 className="font-semibold">Certifications</h4>
              <p className="text-sm text-gray-600">Public Liability Insurance, trained technicians, equipment safety checks.</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 text-sm text-gray-600">
          <div className="border-t pt-6 pb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">PP</div>
                <div>
                  <div className="font-semibold">PrimePro Cleaning</div>
                  <div className="text-xs text-gray-500">ABN: YOUR-ABN-HERE</div>
                </div>
              </div>
              <div className="mt-4 text-xs">Address: Virtual Office, [City, State, Australia]</div>
            </div>

            <div className="flex gap-6">
              <div>
                <div className="font-semibold">Contact</div>
                <div className="text-xs">Phone: +61 XXX XXX XXX</div>
                <div className="text-xs">Email: hello@primeprocleaning.com</div>
              </div>

              <div>
                <div className="font-semibold">Follow</div>
                <div className="text-xs">Facebook • Instagram • Google Business</div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} PrimePro Cleaning. All rights reserved.</div>
        </footer>

        {/* NOTES (visible in code only):
            - Replace /images/hero-placeholder.jpg with your own image or use an external URL.
            - To accept bookings: connect this form to Netlify Forms, Formspree, Zapier, or your own API.
            - To deploy: use Vercel, Netlify, or any static host that supports React apps.
            - Tailwind: ensure your project is configured with Tailwind CSS.
            - For payments or deposits: integrate Stripe Checkout or PayPal after you have an AU bank or merchant account.
        */}

      </main>
    </div>
  );
}
