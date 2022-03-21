import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import {TiChevronRight} from "react-icons/ti";

const PostSwiperSliderCard = ({post}) => {
    return (

        <div className={`card`}>
            <div>
                <div className={`p-2`}>
                    <Link href={`post/${post.id}`}>
                        <a title={post.title} className={`text-decoration-none`}>
                            <Image src="https://www.mehrdadshirvan.ir/public/images/mehrdad-shirvan-1.jpg"
                                   alt={post.title}
                                   width="200px"
                                   height="200px"
                                   className={`w-100 rounded overflow-hidden`}
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={`p-2`}>
                <p style={{minHeight: '51px'}}>
                    <Link href={`post/${post.id}`}>
                        <a className={`text-decoration-none text-secondary font-15 text-justify`}
                           title={post.title}>{post.title.substring(0, 40)}...
                        </a>
                    </Link>
                </p>
                <p className={`mb-0 text-start`}>
                    <Link href={`post/${post.id}`}>
                        <a className={`text-decoration-none text-primary font-11 text-justify`}>
                            Show more <TiChevronRight />
                        </a>
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default PostSwiperSliderCard;