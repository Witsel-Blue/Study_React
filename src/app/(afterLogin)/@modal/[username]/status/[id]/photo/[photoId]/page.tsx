import style from './photoModal.module.css';
import React from 'react';
import PhotoModalCloseButton
    from '@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/PhotoModalCloseButton';
import ImageZone from '@/app/(afterLogin)/@modal/[username]/status/[id]/photo/[photoId]/_component/ImageZone';
import SinglePost from '@/app/(afterLogin)/[username]/status/[id]/_component/SinglePost';
import CommentForm from '@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm';
import Comments from '@/app/(afterLogin)/[username]/status/[id]/_component/Comments';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getSinglePost } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost';
import { getComments } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getComments';

type Props = {
    params: Promise<{ id: string }>;
}

export default async function Default(props: Props) {
    const { id } = await props.params;

    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ['posts', id], queryFn: getSinglePost })
    await queryClient.prefetchQuery({ queryKey: ['posts', id, 'comments'], queryFn: getComments })
    const dehydratedState = dehydrate(queryClient)

    return (
        <div className={style.container}>
            <HydrationBoundary state={dehydratedState}>
                <PhotoModalCloseButton />
                <ImageZone id={id} />
                <div className={style.commentZone}>
                    <SinglePost id={id} noImage photo />
                    <CommentForm id={id} />
                    <Comments id={id} photo />
                </div>
            </HydrationBoundary>
        </div>
    );
}