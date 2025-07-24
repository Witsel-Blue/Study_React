import style from './search.module.css';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import SearchForm from '@/app/(afterLogin)/_component/SearchForm';
import Tab from '@/app/(afterLogin)/search/_component/Tab';
import Post from '@/app/(afterLogin)/_component/Post';
import { headers } from 'next/headers';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default async function Search() {
    const headersList = await headers();

    const rawUrl = headersList.get('x-url') || BASE_URL;
    const url = new URL(rawUrl);
    const q = url.searchParams.get('q') || '';

    return (
        <main className={style.main}>
            <div className={style.searchTop}>
                <div className={style.searchZone}>
                    <div className={style.buttonZone}>
                        <BackButton />
                    </div>
                    <div className={style.formZone}>
                        <SearchForm q={q} pageName='search' />
                    </div>
                </div>
                <Tab />
            </div>
            <div className={style.list}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <Post key={i} />
                ))}
            </div>
        </main>
    );
}