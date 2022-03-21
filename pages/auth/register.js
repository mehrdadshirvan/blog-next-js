import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";
import {TiPlus} from "react-icons/ti";
import Link from "next/link";

function Register(props) {


    const RegisterUser = async event => {
        event.preventDefault()
    }

    return (
        <div id={`app`}>
            <Head>
                <title>Login</title>
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
                                    <h1 className={`d-block m-0 p-2 text-center font-25 `}>Register</h1>
                                </div>
                                <div className={`card-body`}>
                                    <form action="#"
                                          method="POST"
                                          onSubmit={RegisterUser}>
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
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="name">
                                                        Confirm-Password
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
                                                    Register
                                                    <TiPlus className={`mx-1`}/>
                                                </button>
                                            </div>
                                        </div>

                                        <hr/>
                                        <p className={`d-block text-center font-12 text-secondary`}>
                                            You are really have an account?
                                            <Link href={`/auth/login`}>
                                                <a className={`text-decoration-none px-2`}>
                                                    Sign in here
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


export default Register;