import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';

const PostSwiperSliderCard = ({post}) => {
    return (

        <div className={`card`}>
            <div>
                <div className={`p-2`}>
                    <Link href={`post/${post.id}`}>
                        <a title={post.title} className={`text-decoration-none`}>
                            <img src="https://www.mehrdadshirvan.ir/public/images/mehrdad-shirvan-1.jpg"
                                 alt={post.title}
                                 className={`w-100 rounded overflow-hidden`}/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={`p-2`}>
                <p style={{minHeight: '50px'}}>
                    <Link href={`post/${post.id}`}>
                        <a className={`text-decoration-none text-secondary font-15 text-justify`}
                           title={post.title}>{post.title.substring(0, 45)}...
                        </a>
                    </Link>
                </p>
                <p className={`mb-0 text-start`}>
                    <Link href={`post/${post.id}`}>
                        <a className={`text-decoration-none text-primary font-11 text-justify`}>
                            Show more >
                        </a>
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default PostSwiperSliderCard;