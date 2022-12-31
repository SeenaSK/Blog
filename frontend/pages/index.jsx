import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl text-fuchsia-400 font-bold underline flex justify-center py-5 border-red-600 border-x-2 px-0 mx-6">
          Hello World
        </h1>
      </main>
    </>
  );
}
