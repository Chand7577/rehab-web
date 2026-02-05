import CallToActionSection from "../components/layouts/CallToAction";
import Header from "../components/UI/Header"
import Hero from "../components/layouts/Hero";
import Feature1 from "../components/layouts/Feature1";
import Feature2 from "../components/layouts/Feature2";
import { home_info } from "../utils/helper";
import Footer from "../components/UI/Footer"
const Homepage = () => {
   
    return (
        <div className="bg-red-600">
            
                <Header />
                <Hero />
                <CallToActionSection />
                {
                    home_info.map((obj,idx)=>{
                        return(<Feature1   key={idx} obj={obj} reverse={idx % 2 === 1}/>)
                    })
                }
                <Feature2/>
                <Footer/>
           

        </div>
    )
}

export default Homepage;