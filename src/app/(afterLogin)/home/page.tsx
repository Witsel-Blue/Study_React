import style from './home.module.css';
import TabProvider from './_component/TabProvider';
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import PostForm from '@/app/(afterLogin)/home/_component/PostForm';
import Post from "@/app/(afterLogin)/_component/Post";

export default function Home() {
    return (
        <main className={style.main}>
            <TabProvider>
                <Tab />
                <PostForm />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </TabProvider>
        </main>
    )
}