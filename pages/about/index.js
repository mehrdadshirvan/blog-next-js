import Head from 'next/head'
import Image from 'next/image'
import Header from './../components/header'
import 'bootstrap/dist/css/bootstrap-grid.rtl.min.css'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import Footer from "./../components/footer";

function About(props) {


    return (
        <div id={`app`}>
            <Head>
                <title>About</title>
                <meta name="description" content="Posts"/>
            </Head>
            <Header/>

            <section className="features6 cid-r6VllVMW1T" id="features6-6">

                <div className="container">
                    <div className="col-md-12">
                        <div className="media-container-row">
                            <div className=" align-left">

                                <div className="mbr-section-text">

                                </div>

                                <div className="block-content">
                                    <div className="card p-3 pr-3  col-md-12 col-lg-6">
                                        <div className="media">
                                            <div className=" align-self-center card-img pb-3">
                                                <span className="mbr-iconfont mobi-mbri-responsive-2 mobi-mbri"/>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="card-title mbr-fonts-style align-left display-5"><em>We
                                                    provide comfort</em></h4>
                                            </div>
                                        </div>
                                        <div className="card-box">
                                            <p className="block-text mbr-fonts-style mbr-text card-text mbr-light display-7">You
                                                can view our materials for premium Bootstrap templates on mobile devices
                                                and desktops. If you miss the deadline, we can transfer your progress to
                                                another session.</p>
                                        </div>

                                    </div>

                                    <div className="card p-3 pr-3 col-lg-6 col-md-12">
                                        <div className="media">
                                            <div className="align-self-center card-img pb-3">
                                                <span className="mbr-iconfont mobi-mbri-help mobi-mbri"/>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="card-title mbr-fonts-style align-left display-5"><em>Our
                                                    tutors will help you</em></h4>
                                            </div>
                                        </div>

                                        <div className="card-box">
                                            <p className="block-text mbr-fonts-style mbr-text card-text mbr-light display-7">
                                                If you have any questions, our tutors will help you. We provide many
                                                additional materials on the premium Bootstrap templates, share useful
                                                links and contacts, youll find guidelines on your user panel.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="cid-r6Vl2LvYf1" id="features1-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="row-item">
                                <div className="card-img pb-3 align-center">
                                    <span className="mbr-iconfont mobi-mbri-info mobi-mbri"></span>
                                </div>
                                <h4 className="mbr-fonts-style mbr-card-title align-center pb-2 display-5">Learn
                                    more</h4>

                                <p className="mbr-text mbr-fonts-style align-center mbr-light m-0 display-7">What are
                                    you into? Write down all the interests you work with during 10 years to learn
                                    yourself.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="row-item">
                                <div className="card-img pb-3 align-left">
                                    <span className="mbr-iconfont mobi-mbri-idea mobi-mbri"></span>
                                </div>
                                <h4 className="mbr-fonts-style mbr-card-title align-center pb-2 display-5">Generate
                                    ideas</h4>

                                <p className="mbr-text mbr-fonts-style align-center mbr-light m-0 display-7">First,
                                    check if your interests are up-to-date. Then think, how premium bootstrap templates
                                    can be needed in the future.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="row-item">
                                <div className="card-img pb-3 align-left">
                                    <span className="mbr-iconfont mobi-mbri-rocket mobi-mbri"></span>
                                </div>
                                <h4 className="mbr-fonts-style mbr-card-title align-center pb-2 display-5">Start a
                                    project</h4>
                                <p className="mbr-text mbr-fonts-style align-center mbr-light m-0 display-7">If you
                                    attend our lecture, youll learn ways to state yourself and start the project
                                    successfully.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3">
                            <div className="row-item">
                                <div className="card-img pb-3 align-left">
                                    <span className="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
                                </div>
                                <h4 className="mbr-fonts-style mbr-card-title align-center pb-2 display-5">Monetize
                                    it</h4>
                                <p className="mbr-text mbr-fonts-style align-center mbr-light m-0 display-7">Get some
                                    marketing tricks! Well provide you with modern marketing time-tested tools.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}



export default About;