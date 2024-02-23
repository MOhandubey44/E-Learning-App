import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, Outlet, useParams } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";
// Task4: Import all the required elements from the react-router-dom
function Learn() {
  useEffect(() => {
    // Track page view for this component
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page",
    });
  }, []);

  const { courseId } = useParams();
  const course = coursesData.find((course) => course.id === courseId);

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to="/courses">
          <h2 className={style.back}>{"<<"}</h2>
        </Link>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>
            {course.chapters.map((chapter, i) => {
              return (
                <div className={style.chapterId} key={i}>
                  <Link to={`chapter/${chapter.chapter}`}>{chapter.title}</Link>
                </div>
              );
            })}
          </ul>
        </div>

        <div className={style.courses}>
          {/**Task5:  Chapter Details Must be rendered here */}
          <Outlet context={{ ...course }} />
        </div>
      </div>
    </div>
  );
}

export default Learn;
