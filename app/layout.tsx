import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type {Metadata} from "next";
import {Nunito} from "next/font/google";
import "./globalicons.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const font = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} className={font.className}>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='../../../public/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='../../../public/img/favicon/32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='../../../public/img/favicon/16x16.png'
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body>
        <>
          {/* <RunningText data={listRunningText} lang={params.lang} />
          <HeaderWithDownload />
          <NavbarMenu data={listKontak} lang={params.lang} logo={listLogo} />
          <Suspense fallback={<BasicLoading />}>
            <main>{children}</main>
          </Suspense> */}
          <Navbar />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}