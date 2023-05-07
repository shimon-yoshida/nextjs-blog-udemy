import "@/styles/globals.css";
import { M_PLUS_2 } from "@next/font/google";

const inter = M_PLUS_2({
  subsets: ['latin'],
  variable: "--font-inter",
  display: "swap",
});
export default function App({ Component, pageProps }) {
  return (
    <main className="--font-inter">
      <Component {...pageProps} />
    </main>
  );
}
