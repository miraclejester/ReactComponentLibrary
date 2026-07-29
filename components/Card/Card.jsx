import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import CardIcon from "./CardIcon";
import './card.css';

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    )
}

Card.Title = CardTitle;
Card.Body = CardBody;
Card.Icon = CardIcon;

export default Card;