import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lowcost foods - A Food Restuarant in South Africa",
  description: "A restaurant offering an ambient dining experience.",
  openGraph: {
    title: "Lowcost foods - A Food Restuarant in South Africa",
    description: "A restaurant offering an ambient dining experience.",
    type: "website",
    locale: "en_SA",
    url: "lowcostfood-sa.com",
    siteName: "Lowcost Foods ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
