import SocialLinks from "./SocialLinks";

function Footer() {
    return (
        <div className="footer sectionPadding lightBg">
            <div className="container">
                <div className="siteLogo">
                    <span>OM</span>
                    {/* <span>https://my-app-ecru-mu.vercel.app/</span> */}
                </div>
                <SocialLinks/>
                <p className="copyRightTxt">© 2024. All rights reserved by OM</p>
            </div>
        </div>
    )
}

export default Footer;