import Navbar from "../components/Navbar";
import WhytoChoose from "../sections/WhytoChoose";
import Commitement from "../sections/Commitment";
import Hero from "../sections/Hero";
import ProfileCard from "../components/ProfileCard";
import Clients from "../components/Client";
import ContactSection from "../sections/ContactSection";
import Footer from "../components/Footer";
function Home() {


    return (
        <>
            <Navbar />
            <Hero />
            <ProfileCard />
            <Commitement />
            <WhytoChoose />
            <Clients />
            <ContactSection/>
            <Footer/>
        </>
    );
}

export default Home;