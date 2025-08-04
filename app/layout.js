import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { Outfit } from "next/font/google";

export const metadata = {
  title: "Coingrow - Your first Crypto currency investment platform",
  description: "Invest in crypto today and earn more" ,
};

const poppins = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
      <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  );
}
