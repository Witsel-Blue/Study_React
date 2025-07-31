'use client'
import ErrorPage from '@/app/(afterLogin)/_component/ErrorPage';

export default function Error(props: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return <ErrorPage {...props} />;
}