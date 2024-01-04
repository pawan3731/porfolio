
function About() {
    return (
        <section className="aboutWrap sectionPadding" id='about'>
            <div className="container">
                <div className="aboutRow">
                    <div className="aboutCol">
                        <div className="aboutImg lightBg">
                            <img src="./images/about.png" alt="about-img"></img>
                        </div>
                    </div>
                    <div className="aboutCol">
                        <div className="aboutDetail">
                            <div className="sectionTitleWrap">
                                <h2>About</h2>
                            </div>
                            <h4 className="subTitle">I have 5+ years of experiences in Frontend Development for give you better services.</h4>
                            <p className="textMd">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                            <div className="personlDetail">
                                <p className="textMd"><span>Name : </span> John Doe</p>
                                <p className="textMd"><span>Email : </span> johndoe@gmail.com</p>
                                <p className="textMd"><span>Phone : </span> +91-1234567890</p>
                                <p className="textMd"><span>Age : </span> 31</p>
                                <p className="textMd"><span>From : </span> Sector 60, Phase 8b, Mohali</p>
                            </div>
                            <div className="aboutFact">
                                <p>
                                    <span>120+</span>
                                    Projects Completed
                                </p>
                                <p>
                                    <span>10+</span>
                                    Awards Win
                                </p>
                                <p>
                                    <span>12k</span>
                                    Happy clients
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default About;