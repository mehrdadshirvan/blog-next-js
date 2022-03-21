import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";

function Login(props) {


    return (
        <div id={`app`}>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login & register to blog now"/>
            </Head>
            <Header/>
            <div className={`container my-3`}>
                <div className={`row`}>
                    <div className={`col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12`}>
                        <div className={`row`}>
                            <h1>Login</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}



export default Login;