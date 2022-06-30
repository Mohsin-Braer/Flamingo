import { useEffect, useState } from "react";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import PostData from '../post-data/post-data.component';
import { db } from "../../utils/firebase.utils";
import { useSession } from "next-auth/react";

const NewsFeedData = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => onSnapshot(
            query(collection(db, "posts"), orderBy("timestamp", "desc")),
            (snapshot) => {
              setPosts(snapshot.docs);
            }
          ),
    [db]);

    return(
        <div className="pb-72">
            {posts.map(post => (
               <PostData key={post.id} id={post.id} post={post.data()} /> 
            ))}
        </div>
    );
};

export default NewsFeedData;