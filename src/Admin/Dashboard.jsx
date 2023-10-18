import React, { useState, useContext } from 'react'
import Header from '../Partials/Header'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import reducer from '../Context/reducer';
import { MdDelete } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { LiaEdit } from 'react-icons/lia';

export default function Dashboard() {
  const context = useContext(reducer);
  const { getAllBlog } = context;

  const [key, setKey] = useState('blog');

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredBlogItems = getAllBlog.filter((item) =>
    item.blogs.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header isWhite={false} isLogin={true} />
      <section className='admin__dashboard'>
        <div className="container">
          <div className="admin__header text-center mb-4">
            <h2>Admin Dashboard</h2>
          </div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="blog" title="Blogs">
              <div className="top__pannel d-flex justify-content-between">
                <div className="blog__inputs" style={{ width: "85%" }}>
                  <input type="text" placeholder='Search Blogs With Title' value={searchValue} onChange={handleSearch} />
                </div>
                <div className="create__btn">
                  <Link to={"/create-post"}><button type='button' >+ Create Blogs</button></Link>
                </div>
              </div>
              <div className="bottom__pannel">
                {filteredBlogItems.length > 0 ? (<>
                  <table class="table table-striped table-hover">
                    <thead style={{background: "#D4E2ED"}}>
                      <tr>
                        <th scope="col">S. No.</th>
                        <th scope="col">Thumbnail</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBlogItems.map((item, index) => {
                        const { thumbnail, date } = item;
                        console.log(item);
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td><img src={thumbnail} alt="thumbnail" width={60} height={40} /></td>
                            <td style={{maxWidth: "200px", wordBreak: "break-all"}}>{item.blogs.title}</td>
                            <td>{date}</td>
                            <td>
                              <div className="action__items d-flex">
                                <p className='action--delete' title='Delete'><MdDelete/></p>
                                <p title='View'><AiFillEye/></p>
                                <p title='Edit'><LiaEdit/></p>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  </>
                ) : (
                  <h1>Not Found</h1>
                )}
              </div>
            </Tab>
            <Tab eventKey="career" title="Careers">
              Tab content for Profile
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  )
}
