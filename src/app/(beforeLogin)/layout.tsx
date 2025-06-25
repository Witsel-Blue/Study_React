import {ReactNode} from 'react';
import styles from '@/app/page.module.css';

type Props = {children: ReactNode, modal: ReactNode};

export default function Layout({children, modal}: Props ) { // 패러랠 라우트
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}