import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./components/footer";

function Home(props) {

    const {posts} = props;
    return (
        <div id={`app`}>
            <Head>
                <title>Home</title>
                <meta name="description"
                      content="home"/>
            </Head>
            <Header/>
            <h1>Home</h1>
            <Footer/>
        </div>
    )
}


export default Home;