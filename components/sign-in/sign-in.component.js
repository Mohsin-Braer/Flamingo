import { sign } from "crypto";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SignIn = ({ providers }) => {
    return(

        <div className="flex flex-col items-center justify-center space-y-20 bg-[black min-h-screen">
           <Image className=""
                src="https://i.postimg.cc/25Qx5dSQ/flamingo-pink.png"
                width={150}
                height={500}
                objectFit="contain"
            /> 

            <div>
            {Object.values(providers).map((provider) => (
                 <div key={provider.name}>
                       
                        <button class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-black bg-white rounded-lg group"
                                onClick={() => signIn(provider.id, { callbackUrl: "/" })}>  
                            <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#e62d7d] rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
                            <span class="relative">Sign in with {provider.name}</span>
                        </button>
                    </div> ))}
            </div>

            <footer className="justify-end">
                <p className="tracking-wide text-white"> Created with <span className="">&#128151;</span> by Mohsin Braer </p>
            </footer>
        </div>
    );
};

export default SignIn;

