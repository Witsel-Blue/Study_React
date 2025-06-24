"use client";

import {useRouter} from "next/navigation";
import Home from "@/app/(beforeLogin)/_component/Home";

export default function Signup() {
    const router = useRouter();
    router.replace('/i/flow/signup');
    return (
        <Home />
    );
}