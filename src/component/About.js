
function About() {
    return (
        <section className="aboutWrap sectionPadding" id='about'>
            <div className="container">
                <div className="aboutRow">
                    <div className="aboutCol">
                        <div className="aboutImg lightBg">
                            <img src="./images/my_photo.png" alt="about-img"></img>
                        </div>
                    </div>
                    <div className="aboutCol">
                        <div className="aboutDetail">
                            <div className="sectionTitleWrap">
                                <h2>About</h2>
                            </div>
                            <h4 className="subTitle">I have 6+ years of experiences in Frontend Development for give you better services.</h4>
                            <p className="textMd">In the tranquility of this moment, my soul revels, akin to the gentle embrace of spring mornings, cherished with utmost delight.</p>
                            <div className="personlDetail">
                                <p className="textMd"><span>Name : </span> Om Parkash</p>
                                <p className="textMd"><span>Email : </span> pawan007Nokhwal@gmail.com</p>
                                <p className="textMd"><span>Phone : </span> +91-9888223731</p>
                                <p className="textMd"><span>Age : </span> 31</p>
                                <p className="textMd"><span>Marital Status : </span> Married</p>
                                <p className="textMd"><span>From : </span> Sector 60, Phase 8b, Mohali</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;