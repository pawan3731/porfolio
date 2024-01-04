import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioItems = ({ items }) => {
    const [loadMore, setLoadMore] = useState(3);

    const showNextGroup = () => {
        setLoadMore(loadMore + 3);
    };

    const hasMoreItems = loadMore < items.length;

    return (
        <section className="sectionPadding"  id='portfolio'>
            <div className='container'>
                <div className="sectionTitleWrap textCenter titleSpace">
                    <h2>Portfolio</h2>
                </div>
                <div className="portfolioRow">
                    {items.slice(0, loadMore).map((data, i) => (
                        <div key={i} className="porfolioCol">
                            <div className="porfolioCard">
                                <div className="porfolioImg">
                                    {<img src={(data.img)} alt="" />}
                                    <Link to={data.path ? data.path : "/"} className="primaryBtn orangeBtn" target='_blank'>View Live</Link>
                                </div>
                                <div className="porfolioContent">
                                    <p className="textMd">{data.title}</p>
                                    <h4 className="subTitle">{data.decs}</h4>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {hasMoreItems && (
                    <div className="textCenter" style={{ marginTop: 32 }}>
                        <button type="button" className="primaryBtn" onClick={showNextGroup}>Load More</button>
                    </div>
                )}
            </div>  
        </section>
    );
};

const Portfolio = () => {
    const items = [
        { id: 1, title: 'Web Design', decs: 'Business Website Design', img: './images/website01.png', path: "https://www.google.com" },
        { id: 2, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio02.jpg', path: "https://www.google.com" },
        { id: 3, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio03.jpg', path: "https://www.google.com" },
        { id: 4, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio04.jpg', path: "https://www.google.com" },
        { id: 5, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio05.jpg', path: "https://www.google.com" },
        { id: 6, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio06.jpg', path: "https://www.google.com" },
        { id: 7, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio07.jpg', path: "https://www.google.com" },
        { id: 8, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio08.jpg', path: "https://www.google.com" },
        { id: 9, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio09.jpg', path: "https://www.google.com" }
    ];

    return (
        <div>
            <PortfolioItems items={items} />
        </div>
    );
};

export default Portfolio;
