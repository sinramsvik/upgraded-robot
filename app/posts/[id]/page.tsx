"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import postList from "@/app/post-list.json";
import { PostType } from "@/app/types";
import { motion } from "motion/react";
import { FaCommentAlt } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export default function PostPage() {
  const { id } = useParams();
  const router = useRouter();
  //Let's pretend we're fetching dynamically
  const post = postList.find(
    (post) => post.id === parseInt(id as string)
  ) as PostType;

  //If the post is not found, return a 404 page
  if (!post) {
    return <h1>Post not found</h1>;
  }

  const handleNavigation = () => {
    // For the sake of demoing the animation, we'll just use the router.back() method
    // We could also add additional logic to handle direct visits, or history outside of domain
    router.back();
  };

  return (
    <main>
      <section className='w-screen h-screen relative'>
        <button
          type='button'
          className='absolute top-8 left-8 z-10 text-white'
          onClick={handleNavigation}
        >
          <CgClose className='w-12 h-12' />
        </button>
        <motion.figure layoutId={id as string} className='h-svh relative'>
          <Image
            src={post.image as string}
            alt={post.title as string}
            width={500}
            height={500}
            className='max-w-screen max-h-screen w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black opacity-20'></div>
        </motion.figure>
        <div className='text-white z-10 absolute bottom-24 left-12 w-1/2'>
          <motion.h1
            initial={{ y: -72 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.6, delay: 0.1 }}
            className='text-7xl font-bold'
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ y: 72 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.15 }}
            className='ml-2 text-2xl'
          >
            {"By " + post.author}
          </motion.p>
        </div>
        <motion.p
          initial={{ x: 36 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", bounce: 0.5, delay: 0.15 }}
          className='text-white text-2xl z-10 absolute bottom-24 right-12 flex items-center gap-2'
        >
          {post.comments} <FaCommentAlt />
        </motion.p>
      </section>
    </main>
  );
}
