"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { useParams } from "next/navigation";

const MasterLayout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const params = useParams();

  return (
    <>
      <header
        className={cn(
          "fixed bottom-0 left-0 w-full flex justify-end z-10",
          params.id ? " text-white" : " text-black",
          className
        )}
      >
        <Link href='/' className='p-8'>
          Back to start
        </Link>
      </header>
      {children}
    </>
  );
};

export default MasterLayout;
