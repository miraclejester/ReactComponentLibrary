import classnames from "classnames";
import './badge.css';

export default function Badge({ children, variant = 'square', color = 'gray' }) {
    const variantClass = variant ? `badge-${variant}` : '';
    const colorClass = color ? `badge-${color}` : '';
    const allClasses = classnames('badge', variantClass, colorClass);
    
    console.log(allClasses);
    
    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}