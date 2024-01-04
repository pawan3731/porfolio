import React, { useState } from 'react';

const ListItem = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  const [nextGroupIndex, setNextGroupIndex] = useState(1);

  const showNextGroup = () => {
    setVisibleItems(visibleItems + 3);
    setNextGroupIndex(nextGroupIndex + 1);
  };

  const hasMoreItems = visibleItems < items.length;

  return (
    <div className='container'>
      <div className="portfolioRow">
        {items.slice(0, visibleItems).map((data, index) => (

          <div className="porfolioCol" key={index}>
            <div className="porfolioCard">
              <div className="porfolioImg">
                {<img src={(data.img)} alt="" />}
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
        <div className="textCenter" style={{ marginTop: 24 }}>
        <button type="button" className="primaryBtn" onClick={showNextGroup}>View More</button>
        </div>
      )}
    </div>
  );
};  

const Posts = () => {
  const items = [
    { id: 1, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio01.jpg' },
    { id: 2, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio02.jpg' },
    { id: 3, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio03.jpg' },
    { id: 4, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio01.jpg' },
    { id: 5, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio02.jpg' },
    { id: 6, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio03.jpg' },
    { id: 7, title: 'Web Design', decs: 'Business Website Design', img: './images/portfolio01.jpg' },
    { id: 8, title: 'Web Development', decs: 'Food Website Design', img: './images/portfolio02.jpg' },
    { id: 9, title: 'Digital Marketing', decs: 'App Marketing', img: './images/portfolio03.jpg' }
    // Add more items as needed
  ];

  return (
    <div>
      <ListItem items={items} />
    </div>
  );
};

export default Posts;
