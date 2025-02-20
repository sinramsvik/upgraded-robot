import Link from "next/link";

const links = [
  {
    href: "/giphy",
    title: "GIF fetcher",
  },
  {
    href: "https://codesandbox.io/p/devbox/aged-firefly-8wg83f?workspaceId=ws_KreS6gpqCFK3D6t8tFS7hS",
    title: "GIF fetcher (Sandbox)",
    target: "_blank",
  },
  {
    href: "/profile-form",
    title: "Profile form",
  },
  {
    href: "/posts",
    title: "Post list",
  },
];

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
      ➡️ {children}
    </Link>
  );
};

export default function Home() {
  return (
    <main className='flex flex-col max-w-[500px] mx-auto min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <h1 className='text-4xl font-bold mb-4'>Unfold sandbox 🏝️</h1>
      <ul className='flex flex-col gap-2'>
        {links.map((link) => (
          <li key={link.href}>
            <LinkItem href={link.href} target={link.target}>
              {link.title}
            </LinkItem>
          </li>
        ))}
      </ul>
    </main>
  );
}
