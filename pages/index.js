import Head from 'next/head'
import Image from 'next/image'
import Header from './components/header'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./components/footer";

function Home(props) {

    const {posts} = props;
    console.log(posts)

    return (
        <div id={`app`}>
            <Head>
                <title>Home</title>
                <meta name="description"
                      content="home"/>
            </Head>
            <Header/>
            {posts.map((post) => (<p>{post.title}</p>))}
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

export default Home;