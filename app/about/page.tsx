export const dynamic = 'force-static';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'We are a social media platform',
}

export default async function About() {
    return (
        <main>
            <h1 >
                About
            </h1>
            <h3>
                We are a social media platform.
            </h3>
            <p>
                We are a social media platform. And specialise in social media.
            </p>
        </main>
    )
} 