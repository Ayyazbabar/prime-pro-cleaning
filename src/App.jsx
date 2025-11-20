import React, { useState } from "react";
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
