
import Homepage from "./pages/Homepage"
import Programs from "./pages/Programs"
import AboutUs from "./pages/AboutUs"
import WhyUs from "./pages/WhyUs"
import ContactUs from "./pages/ContactUs"
import {Routes,Route} from "react-router-dom"
function App() {
  const navLinks=[
    {
      path:"/",element:<Homepage/>
    },

    {
      path:"/programs",element:<Programs/>
    },
    {
      path:"/why",element:<WhyUs/>
    },
    {
      path:"/about",element:<AboutUs/>
    },
    {
      path:"/contact",element:<ContactUs/>
    }
  ]

  return (
    <>
  <Routes>
    {
      navLinks.map((route,idx)=>{
        return<Route key={idx} path={route.path} element={route.element}/>
      })
    }
  </Routes>
    </>
  )
}

export default App
