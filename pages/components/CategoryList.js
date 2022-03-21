import {TiThList} from "react-icons/ti";
import Link from "next/link"

function CategoryList (props){


    return (
        <div className="card" >
            <div className={`card-header`}>
                <h3 className="d-blocks font-16 m-0 py-1 px-0">
                    <TiThList className="mx-1"/>
                    Category
                </h3>
            </div>
            <ul className="category-list-sidebar" >
                <li ><Link href="/"><a>Sport</a></Link></li>
                <li ><Link href="/"><a>Animals</a></Link></li>
                <li ><Link href="/"><a>Mobile</a></Link></li>
                <li ><Link href="/"><a>Technology</a></Link></li>
                <li ><Link href="/"><a>Weather</a></Link></li>
            </ul>
        </div>
    )
}

export default CategoryList;