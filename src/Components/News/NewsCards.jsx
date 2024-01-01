import React, { useContext, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import reducer from '../../Context/reducer';
import ReactPaginate from 'react-paginate';

export default function NewdCards() {
    const context = useContext(reducer);
    const { getAllBlog } = context;

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const displayedBlogs = getAllBlog.slice(offset, offset + itemsPerPage);

    return (
        <>
            {getAllBlog.length > 0 ? (
                <>
                    <div className="row" style={{ rowGap: "25px" }}>
                        {displayedBlogs.map((item, index) => {
                            const { thumbnail } = item;
                            console.log(item);
                            return (
                                <div className="col-sm-12 col-lg-4">
                                    <Link to={`/news-container/${item.id}/${item.blogs.title}`} state={{ data: item }}>
                                        <div className="news__cards" key={index}>
                                            <div className="news__blogImage">
                                                <img src={thumbnail} alt="thumbnail" width={295} height={220} />
                                            </div>
                                            <div className="news__blogHeader">
                                                <h3>{item.blogs.title}</h3>
                                            </div>
                                            <div className="news__blogPara">
                                                <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
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
                    <ReactPaginate
                        pageCount={Math.ceil(getAllBlog.length / itemsPerPage)}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        subContainerClassName="pages pagination"
                        activeClassName="active"
                    />
                </>
            ) : (
                <h1>No News Present</h1>
            )}

        </>
    )
}
