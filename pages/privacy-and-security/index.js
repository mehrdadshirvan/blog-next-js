import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";

function privacyAndSecurity(props) {


    return (
        <div id={`app`}>
            <Head>
                <title>privacy And Security</title>
                <meta name="description" content="privacyAndSecurity"/>
            </Head>
            <Header/>
            <div className={`container my-3`}>
                <div className={`row`}>
                    <div className={`col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12`}>
                        <h1>privacyAndSecurity</h1>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default privacyAndSecurity;