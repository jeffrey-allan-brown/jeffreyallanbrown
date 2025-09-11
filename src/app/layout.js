import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import "./globals.css";

export const metadata = {
  title: "jeffrey allan brown - full stack web developer",
  description: "i'm jeffrey, a full-stack web developer based in ohio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo-32.png" sizes="any" />
      <body className={`antialiased mx-auto lg:mx-auto aligns-center bg-neutral-100 font-lato`}>
        <Header />
          <main className="container mx-auto flex-auto min-w-0 flex flex-col px-2 sm:px-12 bg-neutral-100">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
