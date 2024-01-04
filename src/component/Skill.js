
import React from 'react';

function Skill() {
    // useEffect(() => {
    //     window.onload = () => {
    //       const element = document.getElementById('myElementId');
    //       element.classList.add('myNewClass');
    //     };
    //   }, []);



    const skillData = [
        { skill: 'Html', skillCount: 95 },
        { skill: 'Css', skillCount: 90 },
        { skill: 'Bootstrap', skillCount: 85 },
        { skill: 'Tailwind Css', skillCount: 75 },
        { skill: 'And Design', skillCount: 80 },
        { skill: 'Material UI', skillCount: 65 },
        { skill: 'Sass', skillCount: 60 },
        { skill: 'Javascript', skillCount: 50 },
        { skill: 'React Js', skillCount: 55 },
        { skill: 'Photoshop', skillCount: 60 },
        { skill: 'Figma', skillCount: 50 },
    ];


    return (
        <section className="SkillWrap sectionPadding lightBg" id='services'>
            <div className="container">
                <div className="sectionTitleWrap textCenter titleSpace">
                    <h2>My Skills</h2>
                    <p className="textMd">I Like To Craft Beautiful And Scalable Web Products</p>
                </div>
                <div className="skillRow">
                    {skillData.map((items, index) => {
                        return (
                            <div key={index} className="skillBarWrap">
                                <p>{items.skill}</p>
                                <div id='myElementId' className='skillBar' style={{ width: `${items.skillCount}%` }}>
                                    <span className="skill-count1">{items.skillCount}%</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skill;