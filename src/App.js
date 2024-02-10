import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Learn from "./pages/app/learn/Learn"
import Chapter from "./pages/app/chapter/Chapter";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./pages/app/details/Details";
import ReactGA from "react-ga4"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Track page view for this component
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search, title: "Home Page" });
  }, []);
  const browerRouter = createBrowserRouter([
    {
      path: '/',
      element: <Nav/>,
      children: [
        {index:true , element: <Hero/>},
        {
          path: '/courses',
          children: [
            {index: true, element:<Courses/>},
            {
              path:':courseId',
              element: <Details/>
            }
          ]
        },
        {
          path: 'learn/:courseId',
          element: <Learn/>,
          children:[
            {
               path: 'chapter/:chapterId',
               element: <Chapter/>
            }

          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router = {browerRouter}/>
  );
}

export default App;
