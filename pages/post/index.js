import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";
import Link from 'next/link';
import PostCard from "./PostCard";

function Posts(props) {

    const {posts} = props;

    return (
        <div id={`app`}>
            <Head>
                <title>Home</title>
                <meta name="description"
                      content="home"/>
            </Head>
            <Header/>
            <div className={`container my-4`}>
                <div className={`row`}>
                    <div className={`col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12`}>
                        side bar
                    </div>
                    <div className={`col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12`}>
                       <div className={`row`}>
                           { posts.map((post) => <PostCard post={post} />) }
                       </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    return {
        props: {posts}, // will be passed to the page component as props
    }
}

export default Posts;