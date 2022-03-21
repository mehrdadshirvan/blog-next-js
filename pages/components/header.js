import Link from 'next/link';
import {FiLogIn, FiLogOut} from "react-icons/fi";
import {BsFillShieldLockFill} from "react-icons/bs";
function Header (props,context) {
    return (
        <>
            <div className={`container-fluid bg-dark`}>
                <div className={`container`}>
                    <div className={`row py-2`}>
                        <div className={`col-sm-12`}>
                            <Link href="/auth/login">
                                <a className={`font-12 text-decoration-none text-white  justify-items-center px-2`}>
                                    <FiLogIn className={`ms-1`}/>
                                    <span className={`mt-1`}>Sign in</span>
                                </a>
                            </Link>
                            <Link href="/privacy-and-security">
                                <a className={`font-12 text-decoration-none text-white  justify-items-center px-2`}>
                                    <BsFillShieldLockFill className={`ms-1`}/>
                                    <span>Privacy & security</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <header className={`bg-white shadow-sm header-height`}>
                <div className={`container`}>
                    <ul className={`nav-main-menu`}>
                        <li className={``}>
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about
                            ">
                                <a>About Us</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/post">
                                <a>post</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;