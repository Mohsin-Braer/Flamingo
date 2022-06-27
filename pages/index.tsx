import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SideBar from '../components/side-bar/side-bar-container/side-bar.component';
import NewsFeed from '../components/news-feed/news-feed.components';


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home / Flamingo </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <SideBar />
        <NewsFeed />

      </main>
    </div>
  )
}

export default Home
