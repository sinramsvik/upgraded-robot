"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { BiExpandAlt } from "react-icons/bi";
import { PostType } from "@/app/types";

const Thumbnail = ({ id, image, title, description }: PostType) => {
  return (
    <div className='text-center'>
      <motion.figure layoutId={id.toString()} className='relative'>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className='object-cover aspect-square rounded-lg mb-6'
        />
        <div className='absolute inset-0 rounded-lg bg-black opacity-20'></div>
      </motion.figure>
      <motion.div exit={{ opacity: 0 }}>
        <h2 className='text-4xl font-bold mb-3'>{title}</h2>
        <p className='text-gray-600 mb-8'>{description}</p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.6, delay: 0.1 }}
          exit={{ scale: 0 }}
        >
          <Link href={`/posts/${id}`} className='inline-block mb-0'>
            <BiExpandAlt className='w-16 h-16 bg-black text-white rounded-full p-5' />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Thumbnail;
