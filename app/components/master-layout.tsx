import Link from "next/link";

const MasterLayout = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <header
        className={
          "fixed bottom-0 left-0 w-full flex justify-end z-10 text-black"
        }
      >
        <Link href='/' className='p-8'>
          Back to start
        </Link>
      </header>
      <main className='max-w-[500px] mx-auto p-8'>{children}</main>
    </>
  );
};

export default MasterLayout;
