import Header from "./components/header";
import Footer from "./components/footer";
import Head from "next/head";
import Slider from "./components/home/slider";

function AboutUs() {
    return (
        <>
            <Head>
                <title>About us</title>
                <meta name="description" content="about" />
            </Head>
            <Header />
            <div className={`container my-4`}>
                <div className={`row`}>
                    <div className={`col-sm-12`}>
                        <h1 className={`text-center d-block `}>About us</h1>
                    </div>
                </div>
            </div>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-sm-12`}></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;