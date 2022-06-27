import Image from "next/image";
import SidebarLink from '../side-bar-link/side-bar-link.component';
import { HomeIcon } from '@heroicons/react/solid';
import {
    HashtagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardListIcon,
    UserIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
  } from '@heroicons/react/solid';


const SideBar = () => {
    return(
        <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
                <Image src="https://i.postimg.cc/25Qx5dSQ/flamingo-pink.png" width={30} height={30}/>
            </div>
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                {/* <HomeIcon className="h-7" /> */}
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="Explore" Icon={HashtagIcon} />
                <SidebarLink text="Notifications" Icon={BellIcon} />
                <SidebarLink text="Messages" Icon={InboxIcon} />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
                <SidebarLink text="Lists" Icon={ClipboardListIcon} />
                <SidebarLink text="Profile" Icon={UserIcon} />
                <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
            </div>
            <button className="hidden xl:inline ml-auto bg-[#e88484] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#ea6464]">
                    Tweet
            </button>

            <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5">
                <img src="https://lh3.googleusercontent.com/a/AATXAJwCsuneWAkKlHwMPxOmLNjFACEvbtN8QPwbUsZ-=s96-c" alt="" 
                          className="h-10 w-10 rounded-full xl:m-r-2.5" /> {/** Using base img rather than Image comp because not sure where img coming from */}

                <div className="hidden xl:inline leading-5">
                    <h4 className="font-bold">Testing</h4>
                    <p className="text-[#6e767d]">@test</p>
                </div>
                <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
            </div>
            

        </div>
    );
}

export default SideBar;

