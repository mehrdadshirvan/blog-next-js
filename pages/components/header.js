import Link from 'next/link';
function Header (props) {
    return (
        <>
            <header className={`bg-white shadow-sm header-height`}>
                <div className={`container-fluid`}>
                    <ul className={`nav-main-menu`}>
                        <li className={`active`}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
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