import { useEffect, useState } from "react";
import Head from "next/head";
import SideBar from "../components/side-bar/side-bar-container/side-bar.component";
import Modal from "../components/modal/modal.component";
import Comment from "../components/comment/comment.component";
import Widget from "../components/widgets/widget.component";
import PostData from "../components/post-data/post-data.component";
import { modalState } from "../atoms/modal.atoms";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { getProviders, getSession, useSession } from "next-auth/react";
import SignIn from "../components/sign-in/sign-in.component";
import { db } from "../utils/firebase.utils";
import {
    collection,
    doc,
    onSnapshot,
    orderBy,
    query,
  } from "@firebase/firestore";

const PostPage = ({trendingResults, followingResults, providers}) => {
    const {data: session} = useSession();
    const [isOpen, setIsOpen] = useRecoilState(modalState);
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState();
    const [comments, setComments] = useState([]);


    useEffect(() =>
        onSnapshot(doc(db, "posts", id), (snapshot) => {
            setPost(snapshot.data());
        }),
    [db]);
    
    useEffect(() =>
        onSnapshot(
            query(
                collection(db, "posts", id, "comments"),
                orderBy("timestamp", "desc")
            ),
            (snapshot) => setComments(snapshot.docs)
            ),
    [db, id]);

    if(!session) return(<SignIn providers={providers}/>);

    return(
        <div className="">
            <Head>
                <title> {post?.username} on Twitter: "{post?.text}"</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        

            <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
                <SideBar />
                <div className="flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
                    <div className="flex items-center px-1.5 py-2 border-b border-gray-700 text-[#d9d9d9] font-semibold text-xl gap-x-4 sticky top-0 z-50 bg-black">
                        <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0"
                             onClick={() => router.push("/")}>
                            <ArrowLeftIcon className="h-5 text-white"/>
                        </div>
                        Tweet
                    </div>

                    <PostData id={id} post={post} postPage />
                    {comments.length > 0 && (
                        <div className="pb-72">
                            {comments.map(comment => (
                                <Comment key={comment.id} id={comment.id} comment={comment.data()}/>
                            ))}
                        </div>
                    )}
                </div>

                <Widget trendingResults={trendingResults} followingResults={followingResults}/>

                {isOpen &&
                    <Modal /> }

            </main>

        </div>
    );
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

export default PostPage;