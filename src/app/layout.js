import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "GTCFX | Trade Forex, Indices, Commodities & CFDs with a Global Broker",
  description: "Trade global markets including Forex, indices, commodities, and CFDs with GTCFX. Access advanced trading platforms, competitive conditions, and a secure trading environment designed for traders worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <ToastContainer autoClose={3000} />
      </body>
    </html>
  );
}
