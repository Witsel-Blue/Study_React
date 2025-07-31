'use client';

import style from './rightSearchZone.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import SearchForm from '@/app/(afterLogin)/_component/SearchForm';

export default function RightSearchZone() {
    const pathname = usePathname()
    const searchParams = useSearchParams();
    const router = useRouter();

    const onChangeFollow = () => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('pf', 'on');
        router.replace(`/search?${newSearchParams.toString()}`);
    }
    const onChangeAll = () => {
        let url = `/search?q=${searchParams.get('q')}`;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete('pf');
        router.replace(`/search?${newSearchParams.toString()}`);
    }

    if (pathname === '/explore') {
        return null;
    }

    if (pathname === '/search') {
        return (
            <div className={style.filterWrap}>
                <h5 className={style.filterTitle}>검색 필터</h5>
                <div className={style.filterSection}>
                    <div>
                        <h3>사용자</h3>
                        <div className={style.radio}>
                            <label for='all'>모든 사용자</label>
                            <input id='all' type='radio' name='pf' defaultChecked onChange={onChangeAll} />
                        </div>
                        <div className={style.radio}>
                            <label for='following'>내가 팔로우하는 사람들</label>
                            <input id='following' type='radio' name='pf' value='on' onChange={onChangeFollow} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ marginBottom: 60, width: 'inherit' }}>
            <SearchForm />
        </div>
    )
}