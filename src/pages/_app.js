import "@/styles/globals.css";
import { M_PLUS_2 } from "@next/font/google";
import Head from 'next/head'

const inter = M_PLUS_2({
  subsets: ['latin'],
  variable: "--font-inter",
  display: "swap",
});
export default function App({ Component, pageProps }) {
  return (<>
    {/* // <main className="--font-inter"> */}
    <Head>
      <meta name="viewport" content="width=device-width"></meta>
    </Head>
      <Component {...pageProps} />
    {/* // </main> */}
    </>
  );
}
