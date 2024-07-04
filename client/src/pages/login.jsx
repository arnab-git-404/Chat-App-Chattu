import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios  from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes.js";
import { Router, useRouter } from "next/router";

function login() {
  const router = useRouter();

  const loginHandler = async () => {
    const userDataProvider = new GoogleAuthProvider();

    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, userDataProvider);

      console.log('1st stage ');

    try {
      if (email) {
        console.log('2st stage ');


        const { data } = await axios.post( CHECK_USER_ROUTE , {email} );
        
        console.log({ data });

        if (!data.status) {
          router.push("/onboarding");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Login Failed");
    }

    // toast.success("Logged in Succesfully");
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex justify-center items-center gap-2 text-white">
        <Image src={"/whatsapp.gif"} alt="Chat_Name" height={300} width={300} />
        <span className="text-7xl">Chatti</span>
      </div>
      <button
        className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
        onClick={loginHandler}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-white text-2xl">Login / SignUP with Google</span>
        <Toaster />
      </button>
    </div>
  );
}

export default login;
