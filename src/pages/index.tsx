import { type NextPage } from "next";
import Head from "next/head";

import Textarea from "../components/Textarea";

const Home: NextPage = () => {
 

  return (
    <>
      <Head>
        <title>Ai pet generator</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col py-8 items-center text-zinc-50 justify-center bg-gradient-to-b from-[#010213] to-[#150A33]">
       <h1 className="flex font-black text-4xl uppercase mb-6"> Ai pet generator</h1>
        <Textarea />


      </main>
    </>
  );
};

export default Home;