import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SideBar from '../components/side-bar/side-bar-container/side-bar.component';
import Feed from '../components/news-feed/news-feed.components';


const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title> Flamingo </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto"> {/**custom color: bg-[]*/}
        <SideBar />
        <Feed />
        {/* Widgets */}

        {/* Modal */}

      </main>
    </div>
  )
}

export default Home
