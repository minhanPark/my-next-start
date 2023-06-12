import "./globals.css";
import { Inter, Noto_Sans_KR } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

console.log(inter.className);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${notoSansKR.className}`}>
        {children}
      </body>
    </html>
  );
}