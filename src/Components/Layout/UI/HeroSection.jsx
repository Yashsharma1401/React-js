import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = () =>{
    return(
        <main className=" container hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore The World, One Country At a Time
                    </h1>
                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. sort, Search, and filter through countries to find the details you 
                    </p>
                    <button className="btn btn-darker btn-inline bg-white-box">
                        Start Exploring <FaLongArrowAltRight />
                    </button>
                </div>
                <div className="hero-image">
                    <img src="../Images/Main-Image.jpg" alt="Main-Image" className="banner-image" />
                </div>
            </div>
        </main>
    )
};