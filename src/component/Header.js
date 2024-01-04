import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";


function Header() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const [isBodyClassAdded, setIsBodyClassAdded] = useState(false);
    const toggleBodyClass = () => {
        setIsBodyClassAdded(!isBodyClassAdded);

        if (!isBodyClassAdded) {
            document.body.classList.toggle('lightTheme');
        }
    };


    const [addClass, setAddClass] = useState(false);

    const toggleClass = () => {
        setAddClass(!addClass);
    };


    return (
        <>
            <div className={scroll ? "topScroll show" : "topScroll"}>
                <span onClick={() => scrollToSection('home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                    </svg>
                </span>
            </div>

            <div className={scroll ? "siteHeader stickyHeader" : "siteHeader"}>
                <div className="container">
                    <div className="siteNav">
                        <div className="siteLogo">
                            <span>OP</span>
                        </div>
                        <ul className={addClass ? 'show' : ''} onClick={toggleClass}>
                            <div className="mobileToggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <li>
                                <Link to="/" onClick={() => scrollToSection('home')}>Home</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => scrollToSection('about')}>About</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => scrollToSection('services')}>Service</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => scrollToSection('portfolio')}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={() => scrollToSection('contact')}>Contact</Link>
                            </li>
                        </ul>
                        <div>
                            <label className="switchBtn" onClick={toggleBodyClass}>
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <div className="switchBtnInner">
                                    <div className="lightIcon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3.05469C10.3236 3.05469 10.5859 2.79234 10.5859 2.46875V0.585938C10.5859 0.262344 10.3236 0 10 0C9.67641 0 9.41406 0.262344 9.41406 0.585938V2.46875C9.41406 2.79234 9.67641 3.05469 10 3.05469ZM4.26035 5.08898C4.48918 5.31781 4.86016 5.31781 5.08898 5.08898C5.31781 4.86016 5.31781 4.48918 5.08898 4.26035L3.75766 2.92898C3.52883 2.70016 3.15785 2.70016 2.92902 2.92898C2.7002 3.15781 2.7002 3.52879 2.92902 3.75762L4.26035 5.08898ZM4.26012 14.9113L2.92879 16.2426C2.69996 16.4714 2.69996 16.8424 2.92879 17.0712C3.15762 17.3 3.52859 17.3 3.75742 17.0712L5.08879 15.7398C5.31762 15.511 5.31762 15.14 5.08879 14.9112C4.85996 14.6824 4.48895 14.6824 4.26012 14.9113ZM10 16.9453C9.67641 16.9453 9.41406 17.2077 9.41406 17.5312V19.4141C9.41406 19.7377 9.67641 20 10 20C10.3236 20 10.5859 19.7377 10.5859 19.4141V17.5312C10.5859 17.2077 10.3236 16.9453 10 16.9453ZM3.05469 10C3.05469 9.67641 2.79234 9.41406 2.46875 9.41406H0.585938C0.262344 9.41406 0 9.67641 0 10C0 10.3236 0.262344 10.5859 0.585938 10.5859H2.46875C2.79234 10.5859 3.05469 10.3236 3.05469 10ZM10 5.02082C7.25449 5.02082 5.02082 7.25449 5.02082 10C5.02082 12.7455 7.25449 14.9792 10 14.9792C12.7455 14.9792 14.9792 12.7455 14.9792 10C14.9792 7.25449 12.7455 5.02082 10 5.02082ZM15.7399 5.08875L17.0712 3.75738C17.3001 3.52855 17.3001 3.15758 17.0712 2.92875C16.8424 2.69992 16.4714 2.69992 16.2426 2.92875L14.9113 4.26012C14.6824 4.48895 14.6824 4.85992 14.9113 5.08875C15.1401 5.31758 15.5111 5.31758 15.7399 5.08875ZM15.7396 14.911C15.5108 14.6822 15.1398 14.6822 14.911 14.911C14.6822 15.1398 14.6822 15.5108 14.911 15.7396L16.2424 17.071C16.4712 17.2998 16.8422 17.2998 17.071 17.071C17.2998 16.8422 17.2998 16.4712 17.071 16.2424L15.7396 14.911ZM19.4141 9.41406H17.5312C17.2077 9.41406 16.9453 9.67641 16.9453 10C16.9453 10.3236 17.2077 10.5859 17.5312 10.5859H19.4141C19.7377 10.5859 20 10.3236 20 10C20 9.67641 19.7377 9.41406 19.4141 9.41406Z" fill="white"></path>
                                        </svg>
                                    </div>
                                    <div className="darkIocn">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8625 11.8081C18.7156 11.6979 18.5373 11.6379 18.3537 11.6366C18.1701 11.6354 17.9909 11.6931 17.8425 11.8012C16.5101 12.7442 14.8867 13.1848 13.2603 13.0447C11.634 12.9047 10.1098 12.1931 8.95816 11.0362C7.80114 9.88414 7.0897 8.35943 6.95011 6.73265C6.81052 5.10587 7.25181 3.48224 8.19566 2.14993C8.30265 1.99953 8.35931 1.81913 8.35751 1.63456C8.35572 1.44999 8.29556 1.27072 8.18566 1.12243C8.08198 0.978816 7.93491 0.872316 7.76611 0.818639C7.59731 0.764962 7.41574 0.766949 7.24816 0.824307C5.54928 1.38684 4.04495 2.42 2.91003 3.80368C-0.0412196 7.38493 0.0931555 12.6806 3.22191 16.1224C4.97941 18.0556 7.38128 19.1543 9.98628 19.2156C11.2637 19.2514 12.5348 19.025 13.7213 18.5503C14.9078 18.0755 15.9843 17.3626 16.8844 16.4556C17.9215 15.4233 18.7015 14.1616 19.1613 12.7724C19.2214 12.6009 19.2248 12.4146 19.171 12.2409C19.1172 12.0673 19.0091 11.9156 18.8625 11.8081ZM16.2219 15.7931C15.4111 16.6098 14.4416 17.2518 13.3731 17.6794C12.3046 18.107 11.1598 18.3112 10.0094 18.2793C7.66316 18.2231 5.49878 17.2337 3.91566 15.4918C1.09816 12.3931 0.97753 7.62431 3.63441 4.39993C4.60156 3.22039 5.86774 2.32223 7.30066 1.79931C6.29515 3.30977 5.84472 5.12226 6.02617 6.9277C6.20761 8.73315 7.0097 10.4198 8.29566 11.6999C9.57593 12.9857 11.2624 13.7877 13.0677 13.9693C14.8731 14.151 16.6855 13.7011 18.1963 12.6962C17.7747 13.8615 17.1005 14.9191 16.2219 15.7931Z" fill="#fff"></path>
                                            <path d="M11.085 6.6513C11.6232 6.80279 12.1134 7.09002 12.5086 7.48544C12.9038 7.88086 13.1907 8.3712 13.3419 8.90943C13.3761 9.0388 13.4522 9.15321 13.5582 9.23484C13.6643 9.31646 13.7943 9.36071 13.9282 9.36068H13.9294C14.0633 9.36091 14.1936 9.31685 14.2998 9.23534C14.4061 9.15383 14.4824 9.03946 14.5169 8.91005C14.6688 8.3718 14.9562 7.8815 15.3516 7.48603C15.7471 7.09057 16.2374 6.80317 16.7757 6.6513L16.7769 6.65068C16.9068 6.61662 17.0217 6.54046 17.1036 6.43412C17.1856 6.32778 17.23 6.19726 17.2298 6.063C17.2297 5.92875 17.185 5.79833 17.1029 5.69216C17.0207 5.586 16.9056 5.51008 16.7757 5.4763C16.2371 5.32507 15.7465 5.03797 15.3508 4.64254C14.9552 4.24712 14.6678 3.75664 14.5163 3.21818C14.4817 3.08905 14.4054 2.97497 14.2993 2.8937C14.1931 2.81243 14.0631 2.76852 13.9294 2.7688H13.9282C13.7944 2.76887 13.6644 2.81316 13.5583 2.89477C13.4523 2.97637 13.3762 3.09073 13.3419 3.22005C13.191 3.75813 12.9042 4.24832 12.5091 4.64348C12.1139 5.03863 11.6237 5.32543 11.0857 5.4763C10.9559 5.51038 10.841 5.58648 10.759 5.69272C10.677 5.79896 10.6325 5.92936 10.6324 6.06356C10.6324 6.19776 10.6767 6.3282 10.7586 6.43453C10.8405 6.54086 10.9553 6.61708 11.085 6.6513ZM13.93 4.2713C14.3306 5.03839 14.9569 5.66407 15.7244 6.0638C14.9568 6.46426 14.3305 7.09055 13.93 7.85818C13.5303 7.09066 12.9046 6.46433 12.1375 6.0638C12.9047 5.66419 13.5304 5.03843 13.93 4.2713Z" fill="#fff"></path>
                                        </svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="mobileToggle" onClick={toggleClass}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Header;