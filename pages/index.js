import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import FAQ from "../components/FAQs";
import Header from "../components/header";

export default function Index() {
  return (
    <>
      <Head>
        <title>Skelee-Mini-web01</title>
        <meta name="Description" content="skelee-mini-web" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
      
        <img
          src="/rarestudiosnewyork-sitebg.png"
          className="h-screen md:w-screen w-auto fixed top-0"
        />
    </>
  );
}
