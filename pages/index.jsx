import Head from 'next/head'
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

      {/* Clients Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-cyan-300 mb-6">Our Clients</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
          <li>1. <a href="https://x.com/wavesprotocol" className="text-cyan-400 underline">Waves</a></li>
          <li>2. <a href="https://x.com/islamic_coin" className="text-cyan-400 underline">Islamic Coin</a></li>
          <li>3. <a href="https://x.com/blockchainsprts" className="text-cyan-400 underline">Blockchain Sports</a></li>
          <li>4. Grimace (logo only)</li>
          <li>5. <a href="https://x.com/musictokworld" className="text-cyan-400 underline">Music Token</a></li>
          <li>6. <a href="https://x.com/graceecosystem" className="text-cyan-400 underline">Grace</a></li>
          <li>7. <a href="https://x.com/jade_ordinals" className="text-cyan-400 underline">Jade</a></li>
          <li>8. <a href="https://x.com/indexcrypto" className="text-cyan-400 underline">CryptoIndex</a></li>
          <li>9. <a href="https://x.com/stalwart_ai" className="text-cyan-400 underline">Stalwart</a></li>
          <li>10. <a href="https://x.com/philtokeneth" className="text-cyan-400 underline">Phill</a></li>
          <li>11. <a href="https://x.com/pepegotavoice" className="text-cyan-400 underline">PEPE.MP3</a></li>
          <li>12. <a href="https://x.com/terahash_co" className="text-cyan-400 underline">TeraHash</a></li>
        </ul>
      </div>
    </div>
  )
}
