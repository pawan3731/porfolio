import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import SocialLinks from './SocialLinks';

function Banner() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="banner sectionPadding" id='home'>
            <div className="container">
                <div style={{width:'100%'}}>
                    <h1>Hi, I Am John Doe</h1>

                    <TypeAnimation
                        sequence={[
                            'I am Designer',
                            1000,
                            'I am Forntend Developer',
                            1000,
                            'I am UI-UX Designer',
                            1000
                        ]}
                        wrapper="div"
                        speed={10}
                        repeat={Infinity}
                    />

                    <Link className='primaryBtn' to="/" onClick={() => scrollToSection('contact')}>Contact Us</Link>

                    <a href={'./images/dummy.pdf'} download="cv" target="_blank" rel="noreferrer" className='primaryBtn orangeBtn'>Download CV</a>
                </div>
            </div>
            <div className='bannerSocial'>
                <SocialLinks/>
            </div>
        </section>
    )
}

export default Banner;