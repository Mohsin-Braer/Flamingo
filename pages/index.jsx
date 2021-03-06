// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import SideBar from '../components/side-bar/side-bar-container/side-bar.component';
import NewsFeed from '../components/news-feed/news-feed.components';
import { getProviders, getSession, useSession } from 'next-auth/react';
import SignIn from '../components/sign-in/sign-in.component';
import Modal from '../components/modal/modal.component';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modal.atoms';
import Widget from '../components/widgets/widget.component';


const Home = ({trendingResults, followingResults, providers}) => {
  const {data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if(!session) return(<SignIn providers={providers}/>);
 
  return (
    <div className="">
      <Head>
        <title> Flamingo </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <SideBar />
        <NewsFeed />
        <Widget trendingResults={trendingResults} followingResults={followingResults}/>


        {isOpen &&
          <Modal /> }

      </main>

    </div>
  )
}

export async function getServerSideProps(context){
  const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then((response) => response.json());
  const followingResults = await fetch("https://jsonkeeper.com/b/WWMJ").then((response) => response.json());

  const providers = await getProviders();
  const session = await getSession(context);

  return{
    props: {
        trendingResults,
        followingResults,
        providers,
        session,
    },
  };
  
}

export default Home;
