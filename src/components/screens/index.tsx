import AboutUs from './About';
import Feature from './Feature';
import Header from './Header';
import OurAdvantages from './OurAdvantages';
// import OurClasses from './OurClasses';
import Packages from './Packages';



const Home = () => {
    return (
        <>
            <Header />
            <AboutUs />
            <Packages />
            <Feature />
            <OurAdvantages />
            {/* <OurClasses/> */}
            {/* 
            <Packages /> */}
        </>
    )
};

export default Home;