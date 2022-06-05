import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";
import {FiLogIn} from "react-icons/fi";
import Link from "next/link"

function Login(props) {


    const LoginUser = async event => {
        event.preventDefault()
    }

    return (
        <div id={`app`}>
            <Head>
                <title>Login here 4</title>
                <meta name="description"
                      content="Login & register to blog now"/>
            </Head>
            <Header/>
            <div className={`container my-3`}>
                <div className={`row`}>
                    <div className={`col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 m-auto`}>
                        <div className={`row`}>
                            <div className={`card p-0`}>
                                <div className={`card-header`}>
                                    <h1 className={`d-block m-0 p-2 text-center font-25 `}>Login</h1>
                                </div>
                                <div className={`card-body`}>
                                    <form action="#"
                                          method="POST"
                                          onSubmit={LoginUser}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">
                                                        Email/Username or mobile
                                                        <span className="text-danger px-1">*</span>
                                                    </label>
                                                    <input id="name"
                                                           name="name"
                                                           type="text"
                                                           autoComplete="name"
                                                           className="form-control"
                                                           required/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">
                                                        Password
                                                        <span className="text-danger px-1">*</span>
                                                    </label>
                                                    <input id="name"
                                                           name="name"
                                                           type="text"
                                                           autoComplete="name"
                                                           className="form-control"
                                                           required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button type="submit" className="btn btn-success px-4 m-auto d-block">
                                                    Login
                                                    <FiLogIn className={`mx-1`}/>
                                                </button>
                                            </div>
                                        </div>
                                        <hr/>
                                        <p className={`d-block text-center font-12 text-secondary`}>
                                            You don`n have an account yet?
                                            <Link href={`/auth/register`}>
                                                <a className={`text-decoration-none px-2`}>
                                                    Sign up now
                                                </a>
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default Login;