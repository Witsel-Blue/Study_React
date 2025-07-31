import style from './home.module.css';
import { Suspense } from 'react';
import Loading from '@/app/(afterLogin)/home/loading';
import TabProvider from './_component/TabProvider';
import Tab from '@/app/(afterLogin)/home/_component/Tab';
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import TabDeciderSuspense from './_component/TabDeciderSuspense';

export default async function Home() {
    // throw 'error test';

    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Suspense fallback={<Loading />}>
                    <TabDeciderSuspense />
                </Suspense>
            </TabProvider>
        </main>
    )
}