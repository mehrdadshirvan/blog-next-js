import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";
import Link from 'next/link';
import PostCard from "./postCard";
import {TiCalendarOutline, TiPencil, TiTag} from "react-icons/ti";
import PostSwiperSlider from "../components/home/postSwiperSlider";
import CategoryList from "../components/CategoryList";

function Post(props) {
    const {post,postsSuggestion} = props;
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
                        <div className={`row mb-4`}>
                            <div className={`card px-0`}>
                                <div className={`card-header`}>

                                    <h1 className={`font-18 `}>  <TiTag />{post.title}</h1>
                                </div>
                                <div className={`card-body`}>
                                    {post.body}
                                    <br/>
                                    {post.body}
                                    <br/>
                                    {post.body}
                                    {post.body}
                                    <br/>
                                    {post.body}
                                    <br/>
                                    {post.body}
                                    <br/>
                                    {post.body}
                                </div>
                                <div className={`card-footer`}>
                                    <div className={`row`}>
                                        <div className={`col-sm-12`}>
                                            <span className={`m-0 `}>
                                                <TiCalendarOutline />
                                                <span className="font-11">
                                                { new Date().toDateString() }
                                                </span>
                                            </span>
                                            <span className={`mx-1`}> | </span>
                                            <span className={`m-0 `}>
                                                <TiPencil />
                                                <span className="font-11">Mehrdad shirvan</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <PostSwiperSlider posts={postsSuggestion} title="Popular post" slidesPerView={3}/>
                        </div>
                    </div>
                    <div className={`col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12`}>
                        <CategoryList />

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export async function getServerSideProps(context) {

    //current post
    const url = 'https://jsonplaceholder.typicode.com/posts/' + context.query.id
    const res = await fetch(url)
    const post = await res.json()

    //10 suggestion post
    const resSuggestion = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`)
    const postsSuggestion = await resSuggestion.json()

    return {
        props: {post,postsSuggestion}, // will be passed to the page component as props
    }
}

export default Post;