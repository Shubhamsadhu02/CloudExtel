import React from 'react'
import { BsArrowDown, BsArrowRight } from 'react-icons/bs'
import { Accordion } from 'react-bootstrap';

export default function CareerContainer({ name, location, department, date, link, description }) {
  // const [isExpanded, setIsExpanded] = useState({
  //   department: false,
  // });

  // const toggleDescription = () => {
  //   setIsExpanded(!isExpanded);
  // };

  return (
    <section className='Career__container'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="career__name">
              <h3>{name}</h3>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="career__details">
              <h4>Location</h4>
              <p>{location}</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="career__details">
              <h4>Department</h4>
              <p>{department}</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="career__details">
              <h4>Posted on</h4>
              <p>{date}</p>
            </div>
          </div>
          <div className="col-lg-2 d-flex justify-content-end">
            <div className="apply__btn">
              <a href={link} target="framename"><button type='submit'>Apply Now<BsArrowRight /></button></a>
            </div>
          </div>
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Read More <BsArrowDown /></Accordion.Header>
            <Accordion.Body>
              {description}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* <div className="read__more mt-5" onClick={toggleDescription}>
          <p>{isExpanded ? (<>Read Less <BsArrowUp /> </>) : (<>Read More <BsArrowDown /> </>)}</p>
        </div>
        {isExpanded && (
          <div className="career__description mt-3">
            <p>{description}</p>
          </div>
        )} */}
      </div>
    </section>
  )
}
