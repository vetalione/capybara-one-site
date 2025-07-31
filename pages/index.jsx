export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white px-8 py-12">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-8">Capybara.one</h1>
      <p className="text-center mb-10 max-w-2xl mx-auto text-lg">
        Full-cycle Web3 marketing, community growth, and hype engineering. From presale sellouts to ambassador armies.
      </p>

      {/* Campaign Results */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
        <div className="border border-cyan-500 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-cyan-300 mb-2">$1M TVL NFT Collection</h2>
          <p className="text-sm">Full-stack launch campaign: liquidity design, community pre-hype, and KOL push (Pontem).</p>
        </div>
        <div className="border border-pink-500 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-pink-300 mb-2">7,000 NFTs in 22 Minutes</h2>
          <p className="text-sm">Sold out via influencer-driven mint strategy, KOL blast, and exclusive whitelist (Jade).</p>
        </div>
        <div className="border border-green-500 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-300 mb-2">$4M Raised in 6 Months</h2>
          <p className="text-sm">Lifecycle token sale with funnel marketing, investor content, and AMA reach (CryptoIndex).</p>
        </div>
        <div className="border border-red-500 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-300 mb-2">10x ROI Meme Coin Promo</h2>
          <p className="text-sm">Narrative-driven influencer activations and perfect-timing entry execution (Phill).</p>
        </div>
        <div className="border border-yellow-400 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-yellow-300 mb-2">Full GTM Strategy ($300K)</h2>
          <p className="text-sm">6-month funnel plan: 90K followers, 50K testers, $80K nodes, $100K tokens, $150K via KOLs.</p>
        </div>
        <div className="border border-purple-500 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-purple-300 mb-2">300K Telegram Users</h2>
          <p className="text-sm">$0.20 CAC, 85% retention, 10% engagement rate using gamified invites (Grace).</p>
        </div>
      </div>

      {/* Our Clients */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-6">Our Clients</h2>
        <p className="text-center text-zinc-400 text-sm mb-4">Since 2022 we’ve worked with 20+ crypto projects. Some of our publicly known partners:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-center text-zinc-300">
          <span>Waves</span>
          <span>Islamic Coin</span>
          <span>Blockchain Sports</span>
          <span>Music Token</span>
          <span>Grace</span>
          <span>Jade</span>
          <span>CryptoIndex</span>
          <span>Stalwart</span>
          <span>Phill</span>
          <span>PEPE.MP3</span>
          <span>TeraHash</span>
          <span>Grimace</span>
        </div>
      </div>

      {/* Our Services */}
      <div className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-6">Our Services</h2>
        <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
          <li>Pre-Sale Campaigns & Token Fundraising</li>
          <li>NFT Collection Sellouts & Hype Engineering</li>
          <li>Community Building, Moderation, and Contests</li>
          <li>Twitter/X Growth, Shilling & AI Engagement</li>
          <li>Influencer & KOL Campaigns across all regions</li>
          <li>Quest Platform Funnels (Zealy, TaskOn, Galxe)</li>
          <li>Reddit & Telegram Growth Hacks</li>
          <li>AMA Panels, Spaces & IRL Coverage</li>
          <li>Discord Setup, Gamification & Bots</li>
          <li>Custom Telegram Bots & MiniApps</li>
          <li>Full-Stack Content Production (Threads, Memes, Videos)</li>
        </ul>
      </div>

      {/* Our Team */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-6">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-zinc-300">
          <div><strong>Vitaliy:</strong> Founder. Web3 growth expert since 2018. 38+ projects, speaker, author of “Growth Hacking”.</div>
          <div><strong>Mira:</strong> SMM manager. Trends, reporting, scheduling & content optimization.</div>
          <div><strong>Agafon:</strong> Web3 designer. Banners, NFT art, animations, presentations, stickers.</div>
          <div><strong>Aman:</strong> Community & bot ops. TG+Discord setup, bots, tech support & contests.</div>
          <div><strong>Kanny:</strong> Native EN copywriter. AMAs, Medium, educational content.</div>
          <div><strong>Dennis:</strong> Community admin fluent in CN/EN/RU. Reddit & LinkedIn shilling.</div>
          <div><strong>Alice:</strong> Since 2017. Whitepapers, docs, tokenomics & pitch decks.</div>
          <div><strong>Nataly:</strong> Influencer buyer across YT/X/TG. Hires for token awareness & growth.</div>
          <div><strong>Alya:</strong> KOL strategist. Sources top-tier influencers for any region or goal.</div>
          <div><strong>Nikita:</strong> Developer: bots, AI agents, Web3 tools & mint sites.</div>
          <div><strong>Capy:</strong> AI assistant developer & prompt engineer.</div>
          <div><strong>Alexandra:</strong> Branding expert: logos, styles, UI/UX kits & layouts.</div>
          <div><strong>Phibi:</strong> Shill squad lead: 20+ active promo accounts on TG/X.</div>
          <div><strong>Insaf:</strong> Performance marketer: ad traffic, analytics, A/B testing, on-chain targeting.</div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-6">Why Work With Us?</h2>
        <ul className="list-disc list-inside text-zinc-300 space-y-2 text-sm">
          <li>Instant access to a fully-aligned team of Web3 pros — no need to train junior staff or wait for onboarding.</li>
          <li>We don’t overload team members — each client gets focused attention and real output.</li>
          <li>Tailored, flexible offers — no cookie-cutter packages, no wasted budget.</li>
          <li>Pre-built synergy — our internal workflows are already optimized, with zero friction or ego battles.</li>
          <li>Hiring us = 10x more tools, strategies, and proven blueprints than building in-house.</li>
          <li>We’ve already launched 30+ successful projects — skip the guesswork and move with speed.</li>
          <li>Lower risk, higher ROI — we adapt fast, bring outside perspective, and deliver results.</li>
        </ul>
      </div>
    </div>
  )
}