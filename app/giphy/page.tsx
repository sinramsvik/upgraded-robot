import { GifFetcher } from "@/app/components/gif-fetcher";
import MasterLayout from "../components/master-layout";

export default function GiphyPage() {
  return (
    <MasterLayout>
      <main className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-2xl font-bold mb-4'>Giphy Fetcher</h1>
        <GifFetcher />
      </main>
    </MasterLayout>
  );
}
