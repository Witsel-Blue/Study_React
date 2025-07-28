import style from './home.module.css';
import TabDecider from './_component/TabDecider';
import TabProvider from './_component/TabProvider';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getPostRecommends } from './_lib/getPostRecommends';

export default async function Home() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ['posts', 'recommends'], queryFn: getPostRecommends })
    const dehydratedState = dehydrate(queryClient);

    return (
        <main className={style.main}>ß
            <HydrationBoundary state={dehydratedState}>
                <TabProvider>
                    <Tab />
                    <PostForm />
                    <TabDecider />
                </TabProvider>
            </HydrationBoundary>
        </main>
    )
}