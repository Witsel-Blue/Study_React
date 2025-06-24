"use client";

import {useRouter} from "next/navigation";
import Home from "@/app/(beforeLogin)/_component/Home";

export default function Login() {
    const router = useRouter();
    router.replace('/i/flow/login');
    return (
        <Home />
    );
}
// router.push : 뒤로가기 실행 시 바로 전 히스토리로
// router.replace : 뒤로가기 시행 시 이전 페이지로