import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700"
                    rel="stylesheet"
                />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <body style={{ background: 'rgb(245, 247, 249)' }}>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}