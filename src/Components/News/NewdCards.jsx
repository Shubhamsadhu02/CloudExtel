import React, { useContext } from 'react'
import newsImage from '../../Images/News/news.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import reducer from '../../Context/reducer';

export default function NewdCards() {
    const context = useContext(reducer);
    const { getAllBlog } = context;
    return (
        <>
            {getAllBlog.length > 0 ? (
                <>
                    <div className="row" style={{ rowGap: "25px" }}>
                        {getAllBlog.map((item, index) => {
                            const { thumbnail } = item;
                            console.log(item);
                            return (
                                <div className="col-sm-12 col-lg-4">
                                    <Link to={`/news-container/${item.id}/${item.blogs.title}`} state={{ data: item }}>
                                        <div className="news__cards">
                                            <div className="news__blogImage">
                                                <img src={thumbnail} alt="thumbnail" width={295} height={220} />
                                            </div>
                                            <div className="news__blogHeader">
                                                <h3>{item.blogs.title}</h3>
                                            </div>
                                            <div className="news__blogPara">
                                                <p>{item.blogs.content}</p>
                                            </div>
                                            <div className="news__blogDate">
                                                <p>{item.date}</p>
                                                <Link to={`/news-container/${item.id}/${item.blogs.title}`} state={{ data: item }}><BsArrowRight /></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </>
            ) : (
                <h1>No Blogs Present</h1>
            )}

        </>
    )
}
