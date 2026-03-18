import { volkhov, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  title: "Jadoo",
  description: "Book your trip in minute, get full control for much longer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${volkhov.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}