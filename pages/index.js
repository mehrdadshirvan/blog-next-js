import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./components/footer";
import Slider from "./components/home/slider";
import PostSwiperSlider from "./components/home/postSwiperSlider";

function Home(props) {
    const {posts,postsMostView} = props;
    return (
        <div id={`app`} >
            <Head>
                <title>Home</title>
                <meta name="description"
                      content="home"/>
            </Head>
            <Header/>
            <div className={`container`}>
                <Slider />
                <PostSwiperSlider posts={posts} title="Popular post"/>
                <PostSwiperSlider posts={postsMostView} title="Most view"/>
            </div>

            <Footer/>
        </div>
    )
}


export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`)
    const posts = await res.json()
    const res2 = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=10&_limit=20`)
    const postsMostView = await res2.json()
    return {
        props: {posts,postsMostView},
    }
}

export default Home;