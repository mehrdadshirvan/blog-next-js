import Link from 'next/link';
import Image from 'next/image';
import {TiChevronRight} from "react-icons/ti";

const PostCard = ({post}) => {
    return (
        <div className={`col-12`}>
            <div className={`card mb-2 `}>
                <div className={`row`}
                     key={post.id}>
                    <div className={`col-sm-2 col-12`}>
                        <div className={`p-2`}>
                            <img src="https://www.mehrdadshirvan.ir/public/images/mehrdad-shirvan-1.jpg"
                                 alt={post.title}
                                 className={`w-100 rounded overflow-hidden`}/>
                        </div>
                    </div>
                    <div className={`col-sm-10 col-12 px-0 py-2 d-grid align-content-between`}>
                        <div>
                            <Link href={`post/${post.id}`}>
                                <a className={`text-decoration-none font-18 d-block text-dark`}>{post.title}</a>
                            </Link>
                            <p className={`text-secondary font-11 text-wrap w-100 mb-0`}>{post.body.substring(0, 100)}...</p>
                        </div>
                        <div>
                            <p className={`mb-0 text-start px-3`}>
                                <Link href={`post/${post.id}`}>
                                    <a className={`text-decoration-none text-primary font-12 text-justify`}>
                                        Show more <TiChevronRight/>
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PostCard;