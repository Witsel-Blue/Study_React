'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Post as IPost } from '@/model/Post';
import { getComments } from '@/app/(afterLogin)/[username]/status/[id]/_lib/getComments';
import Post from '@/app/(afterLogin)/_component/Post';

type Props = {
    id: string;
    photo?: boolean;
}
export default function Comments({ id, photo }: Props) {
    const queryClient = useQueryClient();
    const post = queryClient.getQueryData(['posts', id]);
    const { data, error } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({
        queryKey: ['posts', id, 'comments'],
        queryFn: getComments,
        staleTime: 60 * 1000,
        gcTime: 300 * 1000,
        enabled: !!post, // 원본 글 없을 시 댓글 가져오기 X
    });
    if (post) {
        return data?.map((post) => <Post post={post} key={post.postId} photo={photo} />)
    }
    return null;
}