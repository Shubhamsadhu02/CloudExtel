import React, { useState, useContext } from 'react'
import Header from '../Partials/Header'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
import reducer from '../Context/reducer';
import { MdDelete } from 'react-icons/md';
import { AiFillEye } from 'react-icons/ai';
import { LiaEdit } from 'react-icons/lia';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';
import { Accordion, Modal } from 'react-bootstrap';

export default function Dashboard() {
  const context = useContext(reducer);
  const { getAllBlog, getAllCareer, deleteBlogs, deleteCareers } = context;

  const [key, setKey] = useState('blog');

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredBlogItems = getAllBlog.filter((item) =>
    item.blogs.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredCareerItems = getAllCareer.filter((item) =>
    item.jobs.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.jobs.location.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.jobs.department.toLowerCase().includes(searchValue.toLowerCase())
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedCareerItem, setSelectedCareerItem] = useState(null);

  const openModal = (item) => {
    setSelectedCareerItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
                    <thead style={{ background: "#D4E2ED" }}>
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
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td><img src={item.thumbnail} alt="thumbnail" width={60} height={40} /></td>
                            <td style={{ maxWidth: "200px", wordBreak: "break-all" }}>{item.blogs.title}</td>
                            <td>{item.date}</td>
                            <td>
                              <div className="action__items d-flex">
                                <p className='action--delete' title='Delete' onClick={() => deleteBlogs(item.id)}><MdDelete /></p>
                                <p className='action-view' title='View'><Link to={`/${item.id}/${item.blogs.title}`} state={{ data: item }}><AiFillEye /></Link></p>
                                <p className='action-edit' title='Edit'><Link to={`/edit-post/${item.id}/${item.blogs.title}`} state={{ data: item }}><LiaEdit /></Link></p>
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
              <div className="top__pannel d-flex justify-content-between">
                <div className="blog__inputs" style={{ width: "85%" }}>
                  <input type="text" placeholder='Search careers with title, location, and department' value={searchValue} onChange={handleSearch} />
                </div>
                <div className="create__btn">
                  <Link to={"/create-career"}><button type='button' >+ Create Careers</button></Link>
                </div>
              </div>
              <div className="bottom__pannel">
                {filteredCareerItems.length > 0 ? (<>
                  <table class="table table-striped table-hover">
                    <thead style={{ background: "#D4E2ED" }}>
                      <tr>
                        <th scope="col">S. No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Location</th>
                        <th scope="col">Department</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredCareerItems.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td style={{ maxWidth: "200px", wordBreak: "break-all" }}>{item.jobs.title}</td>
                            <td>{item.jobs.location}</td>
                            <td>{item.jobs.department}</td>
                            <td>{item.date}</td>
                            <td>
                              <div className="action__items d-flex">
                                <p className='action--delete' title='Delete' onClick={() => deleteCareers(item.id)}><MdDelete /></p>
                                <p className='action-view' title='View' onClick={() => openModal(item)}><AiFillEye /></p>
                                <p className='action-edit' title='Edit'><Link to={`/edit-career/${item.id}/${item.jobs.title}`} state={{ data: item }}><LiaEdit /></Link></p>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                      <Modal
                        show={showModal} onHide={closeModal}
                        contentLabel="Career Item Details"
                      >
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                          {selectedCareerItem && (
                            <>
                              <div className="row mt-5">
                                <div className="col-lg-4">
                                  <div className="career__name">
                                    <h3>{selectedCareerItem.jobs.title}</h3>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="career__details">
                                    <h4>Location</h4>
                                    <p>{selectedCareerItem.jobs.location}</p>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="career__details">
                                    <h4>Department</h4>
                                    <p>{selectedCareerItem.jobs.department}</p>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="career__details">
                                    <h4>Posted on</h4>
                                    <p>{selectedCareerItem.date}</p>
                                  </div>
                                </div>
                                <div className="col-lg-2 d-flex justify-content-end">
                                  <div className="apply__btn">
                                    <a href={selectedCareerItem.jobs.applyLink} target="framename"><button type='submit'>Apply Now<BsArrowRight /></button></a>
                                  </div>
                                </div>
                              </div>
                              <Accordion>
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header>Read More <BsArrowDown /></Accordion.Header>
                                  <Accordion.Body dangerouslySetInnerHTML={{ __html: selectedCareerItem.content }}>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </>
                          )}
                        </Modal.Body>
                      </Modal>
                    </tbody>
                  </table>
                </>
                ) : (
                  <h1>Not Found</h1>
                )}
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  )
}
