import Head from 'next/head'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      <Head>
        <title>Capybara.one — Web3 Growth Agency</title>
      </Head>

      <header className="mb-20 text-center">
        <h1 className="text-5xl font-bold glitch text-cyan-400" data-text="Capybara.one">Capybara.one</h1>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          Full-cycle Web3 marketing, community growth, and hype engineering. From presale sellouts to ambassador armies.
        </p>
      </header>

      {/* CASES SECTION */}

      <section id="cases" className="mb-24">
        <h2 className="text-4xl glitch text-cyan-300 mb-8" data-text="$&">📊 Proven Campaign Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 border border-cyan-400 rounded-lg p-6">
            <h3 className="text-xl text-cyan-300 mb-2">$1M TVL NFT Collection</h3>
            <p className="text-zinc-400">Full-stack launch campaign: liquidity design, community pre-hype, and KOL push (Pontem).</p>
          </div>
          <div className="bg-zinc-900 border border-pink-400 rounded-lg p-6">
            <h3 className="text-xl text-pink-300 mb-2">7,000 NFTs in 22 Minutes</h3>
            <p className="text-zinc-400">Sold out via influencer-driven mint strategy, KOL blast, and exclusive whitelist (Jade).</p>
          </div>
          <div className="bg-zinc-900 border border-green-400 rounded-lg p-6">
            <h3 className="text-xl text-green-300 mb-2">$4M Raised in 6 Months</h3>
            <p className="text-zinc-400">Lifecycle token sale with funnel marketing, investor content, and AMA reach (CryptoIndex).</p>
          </div>
          <div className="bg-zinc-900 border border-red-400 rounded-lg p-6">
            <h3 className="text-xl text-red-300 mb-2">10x ROI Meme Coin Promo</h3>
            <p className="text-zinc-400">Narrative-driven influencer activations and perfect-timing entry execution (Phill).</p>
          </div>
          <div className="bg-zinc-900 border border-yellow-400 rounded-lg p-6">
            <h3 className="text-xl text-yellow-300 mb-2">Full GTM Strategy ($300K)</h3>
            <p className="text-zinc-400">6-month funnel plan: 90K followers, 50K testers, $80K nodes, $100K tokens, $150K via KOLs.</p>
          </div>
          <div className="bg-zinc-900 border border-purple-400 rounded-lg p-6">
            <h3 className="text-xl text-purple-300 mb-2">300K Telegram Users</h3>
            <p className="text-zinc-400">$0.20 CAC, 85% retention, 10% engagement rate using gamified invites (Grace).</p>
          </div>
          <div className="bg-zinc-900 border border-fuchsia-400 rounded-lg p-6">
            <h3 className="text-xl text-fuchsia-300 mb-2">AI Growth Automation</h3>
            <p className="text-zinc-400">200–300 replies/day via AI agent, 100K daily views, +100 followers/day (CryptoIndex).</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .glitch {
          position: relative;
          display: inline-block;
          animation: glitch 1.5s infinite;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          background: black;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 red;
          animation: glitchTop 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 blue;
          animation: glitchBottom 1.5s infinite linear alternate-reverse;
        }

        @keyframes glitch {
          0% { transform: none; }
          20% { transform: skew(-0.5deg, 0.5deg); }
          40% { transform: skew(0.5deg, -0.5deg); }
          60% { transform: none; }
          80% { transform: translate(1px, -1px); }
          100% { transform: none; }
        }

        @keyframes glitchTop {
          0% { clip: rect(0, 9999px, 0, 0); }
          50% { clip: rect(0, 9999px, 5px, 0); }
          100% { clip: rect(0, 9999px, 0, 0); }
        }

        @keyframes glitchBottom {
          0% { clip: rect(5px, 9999px, 9999px, 0); }
          50% { clip: rect(0, 9999px, 9999px, 0); }
          100% { clip: rect(5px, 9999px, 9999px, 0); }
        }
      `}</style>
    </main>
  )
}
