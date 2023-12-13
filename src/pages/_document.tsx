import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <body style={{ background: 'rgb(245, 247, 249)' }}>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}