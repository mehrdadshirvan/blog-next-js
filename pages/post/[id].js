import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";
import Link from 'next/link';

function Post(props) {
    const {post} = props;
    return (
        <div id={`app`}>
            <Head>
                <title>{post.title}</title>
                <meta name="description"
                      content="home"/>
            </Head>
            <Header/>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
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