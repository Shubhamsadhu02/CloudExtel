import React, { useContext } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import News from '../../Images/Home/news.png';
import { Link } from 'react-router-dom';
import reducer from '../../Context/reducer';

export default function HomeNewsSection() {
  const context = useContext(reducer);
  const { getAllBlog } = context;

  return (
    <>
      {getAllBlog.length > 0 ? (
        <section className='news'>
          <div className="container">
            <div className="networks__content networks__content3">
              <div className="hero__header">
                <h1>In News</h1>
              </div>
              <div className="hero__para mt-4" style={{ width: '500px' }}>
                <p>Stay updated with the latest news and developments from Bombay Gas Ventures Pvt. Ltd.</p>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-6">
                <img src={News} alt="News" />
              </div>
              <div className="col-lg-6">
                <div className="latest">
                  <div className="hero__latest">
                    <p>Latest</p>
                  </div>
                  <Link to={`/${getAllBlog[0].id}/${getAllBlog[0].blogs.title}`} state={{ data: getAllBlog[0] }} >
                    <div className="hero__news--Header">
                      <h4>{getAllBlog[0].blogs.title}</h4>
                    </div>
                    <div className="hero__para--light">
                      <p dangerouslySetInnerHTML={{ __html: getAllBlog[0].content }}></p>
                    </div>
                  </Link>
                </div>
                {getAllBlog.length > 1 ? (
                  <div className="latest">
                    <div className="hero__latest">
                      <p>Latest</p>
                    </div>
                    <Link to={`/${getAllBlog[1].id}/${getAllBlog[1].blogs.title}`} state={{ data: getAllBlog[1] }} >
                      <div className="hero__news--Header">
                        <h4>{getAllBlog[1].blogs.title}</h4>
                      </div>
                      <div className="hero__para--light">
                        <p dangerouslySetInnerHTML={{ __html: getAllBlog[1].content }}></p>
                      </div>
                    </Link>
                  </div>
                ) : null}
                <div className="view__btn">
                  <Link to={"/news"}><button type='button'>VIEW ALL <BsArrowRight /></button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        null
      )}
    </>
  )
}
