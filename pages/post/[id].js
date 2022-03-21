import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";
import Link from 'next/link';
import PostCard from "./postCard";

function Post(props) {
    const {post} = props;
    return (
        <div id={`app`}>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.title}/>
            </Head>
            <Header/>
            <div className={`container my-3`}>
                <div className={`row`}>
                    <div className={`col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12`}>
                        <div className={`row`}>
                            <div className={`card px-0`}>
                                <div className={`card-header`}>
                                    <h1 className={`font-18 `}>{post.title}</h1>
                                </div>
                                <div className={`card-body`}>
                                    {post.body}
                                    {post.body}
                                    {post.body}
                                    {post.body}
                                    {post.body}
                                    {post.body}
                                    {post.body}
                                </div>
                                <div className={`card-footer`}>
                                    <div className={`row`}>
                                        <div className={`col-sm-12`}>
                                            <p className={`text-start m-0 `}>
                                                { new Date().toDateString() }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12`}>
                        side bar
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export async function getServerSideProps(context) {

    const url = 'https://jsonplaceholder.typicode.com/posts/' + context.query.id
    const res = await fetch(url)
    const post = await res.json()
    return {
        props: {post}, // will be passed to the page component as props
    }
}

export default Post;