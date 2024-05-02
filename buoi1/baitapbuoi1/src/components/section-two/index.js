import feat1 from '../../assets/image/features1.jpg';
import { FaPalette } from "react-icons/fa";
import { FaHandPointUp, FaUserGroup } from "react-icons/fa6";

function Sectiontwo() {
    return (
        <div className="section-two">
        <div className="container">
            <div className="inner-wrap">
                <div className="inner-image">
                    <img src={feat1} alt=""/>
                </div>
                <div className="inner-content">
                    <h3 className="inner-sub-title">
                        Core Features
                    </h3>
                    <h2 className="inner-title">
                        Best Business Software Solution
                    </h2>
                    <div className="inner-list">
                        <div className="inner-item">
                            <FaPalette />
                            <span>Design</span>
                        </div>
                        <div className="inner-item">
                            <FaHandPointUp />
                            <span>Usage</span>
                        </div>
                        <div className="inner-item">
                            <FaUserGroup />
                            <span>Testing</span>
                        </div>
                    </div>
                    <div className="inner-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint ex illum repudiandae quo modi eveniet animi fuga
                    </div>
                    <a href="" className="button button-two">
                        Read More
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Sectiontwo;