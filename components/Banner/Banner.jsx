import {IoIosCheckmarkCircle} from "react-icons/io";
import {IoCloseCircle, IoInformationCircle, IoWarning} from "react-icons/io5";
import classnames from "classnames";
import BannerBody from "./BannerBody";
import BannerTitle from "./BannerTitle";
import './banner.css';

const iconMap = {
    success: <IoIosCheckmarkCircle style={{color:'#34D399'}}/>,
    warning: <IoWarning style={{color:'#FBBF24'}}/>,
    error: <IoCloseCircle style={{color:'#F87171'}}/>,
    neutral: <IoInformationCircle style={{color:'#60A5FA'}}/>
}

function Banner({ variant, children }) {
    const icon = iconMap[variant] ?? iconMap['neutral'];
    const variantClass = variant ? `banner-${variant}` : '';
    const fullClass = classnames('banner', variantClass);

    return (
        <div className={fullClass}>
            { icon }
            { children }
        </div>
    )
}

Banner.Title = BannerTitle;
Banner.Body = BannerBody;

export default Banner