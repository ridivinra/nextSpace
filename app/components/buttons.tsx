'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";


export function SignInButton() {
    const { data: session, status } = useSession();
    if(status === 'authenticated'){
        return (
            <Link href={`/dashboard`}>
              <Image
                src={session.user?.image ?? '/mememan.webp'}
                width={32}
                height={32}
                alt="Your Name"
              />
            </Link>
          );
    }else if(status === 'loading'){
        return <p>...</p>;
    }
    else{
        return <button onClick={() => signIn()}>Sign in</button>;
    }
}

export function SignOutButton() {
    const { data: session, status } = useSession();
    if(status === 'authenticated'){
        return <button onClick={() => signOut()}>Sign out</button>;
    }else{
        return <></>;
    }
}