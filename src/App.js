import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./pages/app/details/Details";
// import "./analytics";
import { useEffect } from "react";
import { initGA4, pageView } from "./analytics";

function App() {
  useEffect(() => {
    const measurementId = "G-7T2PKJQD90"; // Replace with your actual Measurement ID
    initGA4(measurementId);
    pageView();
  }, []);

  const browerRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { index: true, element: <Hero /> },
        {
          path: "/courses",
          children: [
            { index: true, element: <Courses /> },
            {
              path: ":courseId",
              element: <Details />,
            },
          ],
        },
        {
          path: "learn/:courseId",
          element: <Learn />,
          children: [
            {
              path: "chapter/:chapterId",
              element: <Chapter />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={browerRouter} />;
}

export default App;
