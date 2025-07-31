import style from './post.module.css';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';
import ActionButtons from '@/app/(afterLogin)/_component/ActionButtons';
import PostArticle from '@/app/(afterLogin)/_component/PostArticle';
import PostImages from '@/app/(afterLogin)/_component/PostImages';
import type { Post } from '@/model/Post';

dayjs.locale('ko');
dayjs.extend(relativeTime)

type Props = {
    noImage?: boolean
    post: Post
    photo?: boolean;
}
export default function Post({ noImage, post, photo }: Props) {
    const target = post;
    if (!post?.User) return null;

    return (
        <PostArticle post={target}>
            <div className={style.postWrapper} {...(photo ? { 'data-photo': 'true' } : {})}>
                <div className={style.postUserSection}>
                    <Link href={`/${target.User.id}`} className={style.postUserImage}>
                        <img src={target.User.image} alt={target.User.nickname} />
                        <div className={style.postShade} />
                    </Link>
                    <div className={style.postMeta}>
                        <Link href={`/${target.User.id}`}>
                            <span className={style.postUserName}>{target.User.nickname}</span>
                            <span className={style.postUserId}>@{target.User.id}</span>
                        </Link>
                        <p className={style.postDot}>·</p>
                        <p className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</p>
                    </div>
                </div>
                <div className={style.postBody}>
                    <div>{target.content}</div>
                    {!noImage && <div>
                        <PostImages post={target} />
                    </div>}
                    <ActionButtons post={post} />
                </div>
            </div>
        </PostArticle>
    )
}