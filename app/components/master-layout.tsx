import Link from "next/link";

const MasterLayout = ({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <main className='max-w-[500px] min-h-screen mx-auto flex flex-col justify-between'>
      <section className='p-8'>{children}</section>
      <footer className={"w-full flex justify-end z-10 text-black"}>
        <Link href='/' className='p-8'>
          Back to start
        </Link>
      </footer>
    </main>
  );
};

export default MasterLayout;
