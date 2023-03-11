/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">NiftyPlace</p>
        <div className="flex mt-4"></div>
        <center>
          <Link href="/" legacyBehavior>
            <a className="mr-6 text-2xl font-bold text-purple-700">
              Home
            </a>
          </Link>
          <Link href="/create-nft" legacyBehavior>
            <a className="mr-6 text-2xl font-bold text-purple-700">
              Mint NFTs
            </a>
          </Link>
          <Link href="/my-nfts" legacyBehavior>
            <a className="mr-6 text-2xl font-bold text-purple-700">
              My Collection
            </a>
          </Link>
          <Link href="/dashboard" legacyBehavior>
            <a className="mr-6 text-2xl font-bold text-purple-700">
              Listed NFTs
            </a>
          </Link>
          </center>
      </nav>
      <Component {...pageProps} />
      </div>
  )
}

export default MyApp