import React, { useEffect } from "react";
import styles from "./Chapter.module.css";
import { useOutletContext, useParams } from "react-router-dom";
import ReactGA from "react-ga4";

function Chapter() {
  const { chapterId } = useParams();
  const course = useOutletContext();
  const chapter = course.chapters.find(
    // convert the number to string for equality check
    (chapter) => String(chapter.chapter) === chapterId
  );
  console.log(chapter);

  // useEffect(() => {
  //   // Track page view for this component
  //   ReactGA.send({
  //     hitType: "pageview",
  //     page: window.location.pathname + window.location.search,
  //     title: "Chapter View",
  //   });
  // }, []);

  return (
    <div>
      <h1>{chapter.title}</h1>
      <hr />
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src={chapter.video}
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
