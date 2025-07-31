'use client';

import style from '@/app/(afterLogin)/messages/message.module.css';
import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.locale('ko');
dayjs.extend(relativeTime)

export default function Room() {
    const router = useRouter();
    const user = {
        id: 'hero',
        nickname: '영웅',
        Messages: [
            { roomId: 123, content: 'message test', createdAt: new Date() },
            { roomId: 123, content: 'hello world', createdAt: new Date() },
        ],
    }

    const onClick = () => {
        router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
    };

    return (
        <div className={style.room} onClickCapture={onClick}>
            <div className={style.roomUserImage}>
                <img src={faker.image.avatar()} alt='' />
            </div>
            <div className={style.roomChatInfo}>
                <div className={style.roomUserInfo}>
                    <p className={style.roomUserName}>{user.nickname}</p>
                    <p className={style.roomUserId}>@{user.id}</p>
                    <p className={style.roomDot}>·</p>
                    <p className={style.roomDate}>{dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}</p>
                </div>
                <div className={style.roomLastChat}>
                    {user.Messages?.at(-1)?.content}
                </div>
            </div>
        </div>
    )
}