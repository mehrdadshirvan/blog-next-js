import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./components/footer";
import {Carousel} from "react-bootstrap";
import Slider from "./components/home/slider";

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
            <div className={`container`}>
                <Slider />
            </div>
            <Footer/>
        </div>
    )
}


export default Home;