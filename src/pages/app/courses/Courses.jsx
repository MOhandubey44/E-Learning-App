import React, { useEffect } from 'react';
import style from './Courses.module.css';
import Card from '../../../components/card';
import coursesData from '../../../data/courses.json';
import { Link } from 'react-router-dom';
import ReactGA from "react-ga4"
function Courses() {

  useEffect(()=>{
    ReactGA.event({
      category: "Click",
      action: "My action",
      label: "Courses View", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  })
  return (
    <div className={style.courses_container}>
      <div className={style.heading}>
        <h1>Popular Courses</h1>
        <h4>Choose your Katana ⚔️</h4>
      </div>
      <div className={style.courses}>
        {coursesData.map((course, index) => {
          return (
            <div key={index} className={style.card_container}>
              <Link to={`/courses/${course.id}`}>
                <Card
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  img={course.img}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
