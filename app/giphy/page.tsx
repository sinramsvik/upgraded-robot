import { GifFetcher } from "@/app/components/gif-fetcher";
import MasterLayout from "@/app/components/master-layout";

export default function GiphyPage() {
  return (
    <MasterLayout>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold mb-4'>Giphy Fetcher</h1>
        <GifFetcher />
      </div>
    </MasterLayout>
  );
}
