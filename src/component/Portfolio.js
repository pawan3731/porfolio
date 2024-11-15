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
                    <p className="textMd">"Showcasing a diverse spectrum of digital excellence and innovation."</p>
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
        { id: 1, title: 'Web Design', decs: 'Company Website', img: './images/website01.png', path: "https://online-classes-peach.vercel.app/" },
        { id: 2, title: 'Web Design', decs: 'Token Website', img: './images/website05.png', path: "https://p3stoken.com/" },
        { id: 3, title: 'Web Design', decs: 'Company Website', img: './images/website06.png', path: "https://vcodeit.com/" },
        { id: 4, title: 'Web Design', decs: 'Advertisement Website', img: './images/website02.png', path: "https://thebladeapp.com/" },
        { id: 5, title: 'Web Design', decs: 'Advertisement Website', img: './images/website03.png', path: "https://buuzapp.com/" },
        { id: 6, title: 'Web Design', decs: 'Medical Website', img: './images/website04.png', path: "https://givebackrx.com/" },
    ];

    return (
        <div>
            <PortfolioItems items={items} />
        </div>
    );
};

export default Portfolio;
