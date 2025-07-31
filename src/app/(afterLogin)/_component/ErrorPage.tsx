'use client'

import { useEffect } from 'react'
import styles from './errorPage.module.css';

export default function Error({ error, reset, }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className={styles.error}>
            <h2>페이지를 찾을 수 없습니다.</h2>
            <button onClick={() => reset()}>
                다시 시도
            </button>
        </div>
    )
}