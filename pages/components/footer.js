import Link from 'next/link';

function Footer(props) {
    return (
        <footer>
            <div className={`container-fluid bg-dark py-4`}>
                <p className={`text-center text-white font-12 mb-3`}>© 2022 Cable News Network.A Warner Media Company.All Rights Reserved.</p>
                <p className={`text-center text-white font-12 m-0`}>Covernews Sans ™ & © 2016 Cable News Network.</p>
            </div>
        </footer>
    )
}

export default Footer;