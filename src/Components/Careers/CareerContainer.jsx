import React, { useContext, useState } from 'react'
import { BsArrowDown, BsArrowRight } from 'react-icons/bs'
import { Accordion } from 'react-bootstrap';
import reducer from '../../Context/reducer';
import { BiSearch } from 'react-icons/bi';
import ReactPaginate from 'react-paginate';

export default function CareerContainer() {
  const context = useContext(reducer);
  const { getAllCareer } = context;

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;

  const filteredCareerItems = getAllCareer.filter((item) =>
    item.jobs.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.jobs.location.toLowerCase().includes(searchValue.toLowerCase()) ||
    item.jobs.department.toLowerCase().includes(searchValue.toLowerCase())
  )
  .slice(offset, offset + itemsPerPage);

  return (
    <>
      {filteredCareerItems.length > 0 ? (
        <>
          <div className="career__search d-flex justify-content-center my-5">
            <div className="career__inputs">
              <input type="text" placeholder='Search by location, keyword or job title' value={searchValue} onChange={handleSearch} /><BiSearch />
            </div>
          </div>
          <section className='Career__container'>
            <div className="container">
              {filteredCareerItems.map((item, index) => {
                console.log(item);
                return (
                  <>
                    <div className="row mt-5" key={index}>
                      <div className="col-lg-4">
                        <div className="career__name">
                          <h3>{item.jobs.title}</h3>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="career__details">
                          <h4>Location</h4>
                          <p>{item.jobs.location}</p>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="career__details">
                          <h4>Department</h4>
                          <p>{item.jobs.department}</p>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="career__details">
                          <h4>Posted on</h4>
                          <p>{item.date}</p>
                        </div>
                      </div>
                      <div className="col-lg-2 d-flex justify-content-end">
                        <div className="apply__btn">
                          <a href={item.jobs.applyLink} target="framename"><button type='submit'>Apply Now<BsArrowRight /></button></a>
                        </div>
                      </div>
                    </div>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Read More <BsArrowDown /></Accordion.Header>
                        <Accordion.Body dangerouslySetInnerHTML={{ __html: item.content }}>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <hr />
                  </>
                )
              })}
              <ReactPaginate
                        pageCount={Math.ceil(getAllCareer.length / itemsPerPage)}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        subContainerClassName="pages pagination"
                        activeClassName="active"
                    />
            </div>
          </section>
        </>
      ) : (
        <h1>No Careers Present</h1>
      )}
    </>
  )
}
