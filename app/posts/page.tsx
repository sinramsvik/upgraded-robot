import postList from "@/app/post-list.json";
import { PostType } from "@/app/types";
import Thumbnail from "@/app/components/thumbnail";
import MasterLayout from "@/app/components/master-layout";

export default function PostsPage() {
  return (
    <MasterLayout>
      <div className='flex flex-col px-8 py-8 sm:px-0 sm:py-20 mx-auto text-center'>
        <h1 className='text-2xl mb-4'>
          <span className='font-bold'>Shared</span>
          <span className='text-gray-600'> by you</span>
        </h1>
        <ul className='grid grid-cols-1 gap-x-12 gap-y-12 sm:gap-x-0'>
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
      </div>
    </MasterLayout>
  );
}
