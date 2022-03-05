import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>about us</title>
                <meta name="description" content="about" />
            </Head>
            <Header />
            <p>about us</p>
            <Footer />
        </>
    )
}
