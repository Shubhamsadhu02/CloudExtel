import React from 'react'
import newsImage from '../../Images/News/news.png';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function NewdCards() {
  return (
    <>
    <div className="news__cards">
        <div className="news__blogImage">
            <img src={newsImage} alt="" />
        </div>
        <div className="news__blogHeader">
            <h3>The office of the future: A whole new (floor) plan dddddddddddddddddddddddddddddddd</h3>
        </div>
        <div className="news__blogPara">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className="news__blogDate">
            <p>Aug 22, 2023</p>
            <Link><BsArrowRight /></Link>
        </div>
    </div>
    </>
  )
}
