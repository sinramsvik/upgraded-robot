import Link from "next/link";

const LinkItem = ({
  href,
  children,
  target = "_self",
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
}) => {
  return (
    <Link
      href={href}
      target={target}
      className='text-blue-500 hover:text-blue-700 hover:underline'
    >
      {children}
    </Link>
  );
};

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='text-4xl font-bold mb-2'>Unfold sandbox 🏝️</h1>
      <div className='flex gap-4'>
        <LinkItem href='/giphy'>GIF fetcher</LinkItem>
        <LinkItem
          href='https://codesandbox.io/p/devbox/aged-firefly-8wg83f?workspaceId=ws_KreS6gpqCFK3D6t8tFS7hS'
          target='_blank'
        >
          GIF fetcher (Sandbox)
        </LinkItem>
        <LinkItem href='/profile-form'>Profile form</LinkItem>
        <LinkItem href='/posts'>Post list</LinkItem>
      </div>
    </main>
  );
}
