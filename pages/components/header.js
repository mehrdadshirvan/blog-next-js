import Link from 'next/link';
function Header (props) {
    return (
        <>
            <header>
                <div className={`container-fluid`}>
                    <ul>
                        <li>
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