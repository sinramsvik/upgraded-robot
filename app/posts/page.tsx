import postList from "@/app/post-list.json";
import { PostType } from "@/app/types";
import Thumbnail from "@/app/components/thumbnail";
import MasterLayout from "@/app/components/master-layout";

export default function PostsPage() {
  return (
    <MasterLayout>
      <section className='flex flex-col min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-screen-lg mx-auto mb-48'>
        <h1 className='text-2xl sm:text-4xl mx-auto mb-4'>
          <span className='font-bold'>Shared</span>
          <span className='text-gray-600'> by you</span>
        </h1>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-8'>
          {postList.map((post: PostType) => {
            return (
              <li key={post.id}>
                <Thumbnail
                  id={post.id}
                  image={post.image}
                  title={post.title}
                  description={post.description}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </MasterLayout>
  );
}
