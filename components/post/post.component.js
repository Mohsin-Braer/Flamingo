import {
    CalendarIcon,
    ChartBarIcon,
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
  } from "@heroicons/react/outline";
  import { useRef, useState } from "react";
  import { db, storage } from "../../utils/firebase.component";
  import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
    setDoc,
  } from "@firebase/firestore";
  import { getDownloadURL, ref, uploadString } from "@firebase/storage";
//   import { signOut, useSession } from "next-auth/react";
//   import dynamic from "next/dynamic";
//   import { Picker } from "emoji-mart";
//   import "emoji-mart/css/emoji-mart.css";
  
  function Post() {
    //const { data: session } = useSession();
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const filePickerRef = useRef(null);
    const [showEmojis, setShowEmojis] = useState(false);



    const sendPost = async () => {
        if(loading) return;
        setLoading(true);

        //returns a pointer reference to document created within collection "posts"
        const docRef = await addDoc(collection(db, 'posts'), {
            // id: session.user.uid,
            // username: session.user.name,
            // userImg: session.user.image,
            // tag: session.user.tag,
            text: input,
            timestamp: serverTimestamp(),
        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`); // tell firebase where to store/host image within "storage"

        if(selectedFile){
            await uploadString(imageRef, selectedFile, "data_url").then(async () => {
                    const downloadURL = await getDownloadURL(imageRef);
                    await setDoc(doc(db, "posts", docRef.id), {
                        text: input, 
                        image: downloadURL,
                        timestamp: serverTimestamp(),
                    });
                });
        }

        //Once post is uploaded to firebase, confirm & reset Post component to defaults using set functions
        setLoading(false);
        setInput("");
        setSelectedFile(null);
        setShowEmojis(false);

    };
  
    //Utilizes FileReader to upload file and add it's downloadable URL to it's to selectedFile variable (apart of Post obj to send to firebase)
    const addImageToPost = (e) => { 
      const reader = new FileReader();
      if (e.target.files[0]) { //image stored at index 0
        reader.readAsDataURL(e.target.files[0]); //returns a URL link to queue download to local computer
      }
  
      reader.onload = (readerEvent) => {
        setSelectedFile(readerEvent.target.result);
      };
    };
  
    //Function utilized to add emoji mart character to textarea input
    const addEmoji = (e) => {
      let sym = e.unified.split("-");
      let codesArray = [];
      sym.forEach((el) => codesArray.push("0x" + el));
      let emoji = String.fromCodePoint(...codesArray);
      setInput(input + emoji);
    };
  
    return (
      <div
        className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide ${loading && "opacity-60"}`}>
        <img
          src="https://lh3.googleusercontent.com/a/AATXAJwCsuneWAkKlHwMPxOmLNjFACEvbtN8QPwbUsZ-=s96-c"
          alt=""
          className="h-11 w-11 rounded-full cursor-pointer"
          
        />
        <div className="divide-y divide-gray-700 w-full">
          <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's happening?"
              rows="2"
              className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
            />
  
            {selectedFile && (
              <div className="relative">
                <div
                  className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                  onClick={() => setSelectedFile(null)}
                >
                  <XIcon className="text-white h-5" />
                </div>
                <img
                  src={selectedFile}
                  alt=""
                  className="rounded-2xl max-h-80 object-contain"
                />
              </div>
            )}
          </div>

         {!loading && ( 
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex items-center">
                <div
                  className="icon"
                  onClick={() => filePickerRef.current.click()}
                  >
                  <PhotographIcon className="text-[#e88484] h-[22px]" />
                  <input
                    type="file"
                    ref={filePickerRef}
                    hidden
                    onChange={addImageToPost}
                  />
                </div>
  
                <div className="icon rotate-90">
                  <ChartBarIcon className="text-[#e88484] h-[22px]" />
                </div>
  
                <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                  <EmojiHappyIcon className="text-[#e88484] h-[22px]" />
                </div>
  
                <div className="icon">
                  <CalendarIcon className="text-[#e88484] h-[22px]" />
                </div>
  
                {/* {showEmojis && (
                  <Picker
                    onSelect={addEmoji}
                    style={{
                      position: "absolute",
                      marginTop: "465px",
                      marginLeft: -40,
                      maxWidth: "320px",
                      borderRadius: "20px",
                    }}
                    theme="dark"
                  />
                )} */}
              </div>
              <button
                className="bg-[#e88484] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#ea6464] disabled:hover:bg-[#e88484] disabled:opacity-50 disabled:cursor-default"
                disabled={!input.trim() && !selectedFile}
                onClick={sendPost}
              >
                Tweet
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Post;