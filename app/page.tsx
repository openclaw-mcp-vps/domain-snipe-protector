export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Domain Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Registrars From{" "}
          <span className="text-[#58a6ff]">Sniping Your Domains</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Every domain you search leaks your intent. Domain Snipe Protector routes
          availability checks through rotating anonymous proxies so registrars never
          see your searches — and can&apos;t snatch the name before you do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Protected — $9/mo
        </a>
        <ul className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-left">
          {[
            ["Rotating Proxies", "Queries cycle through dozens of anonymous endpoints."],
            ["Zero Fingerprinting", "No IP, no pattern, no identity exposed to registrars."],
            ["Instant Results", "Availability status returned in under 2 seconds."],
          ].map(([title, desc]) => (
            <li key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="font-semibold text-white mb-1">{title}</p>
              <p className="text-[#8b949e]">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited anonymous domain checks",
              "Rotating proxy pool (50+ endpoints)",
              "Bulk CSV domain import",
              "Real-time availability dashboard",
              "Email alerts for newly available domains",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Protecting Searches
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Is registrar domain sniping real?",
              "Yes. Multiple studies and user reports confirm that some registrars monitor search queries and register domains shortly after users search for them, then resell at a premium.",
            ],
            [
              "How does the proxy rotation work?",
              "Your availability queries are forwarded through a pool of 50+ residential and datacenter proxies that rotate per request, making it impossible to correlate searches back to you.",
            ],
            [
              "Will this slow down my domain checks?",
              "No. Our proxy infrastructure is optimized for WHOIS and DNS lookups. Results typically return within 1–2 seconds, comparable to direct queries.",
            ],
          ].map(([q, a]) => (
            <details key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5 group">
              <summary className="font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg">+</span>
              </summary>
              <p className="mt-3 text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} Domain Snipe Protector. All rights reserved.
      </footer>
    </main>
  );
}
