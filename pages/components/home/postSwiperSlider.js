import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import PostSwiperSliderCard from "./postSwiperSliderCard";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {BsBookmarks, IconName} from "react-icons/bs";

const PostSwiperSlider = ({posts,title}) => {
    return (
        <div className={`mb-4`}>
            <div className={`row`}>
                <h3 className={`font-18`}>
                    <BsBookmarks />
                    {title}
                </h3>
            </div>
            <Swiper spaceBetween={20}
                    slidesPerView={5}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation
                    pagination={{ clickable: true }}
            >
                {posts.map((post) => <SwiperSlide><PostSwiperSliderCard post={post}/></SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default PostSwiperSlider;