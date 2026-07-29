import TestimonialBody from "./TestimonialBody";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialCaption from "./TestimonialCaption";
import TestimonialFigure from "./TestimonialFigure";
import TestimonialImage from "./TestimonialImage";
import TestimonialQuote from "./TestimonialQuote";
import './testimonial.css';

function Testimonial({ children }) {
    return (
        <div className='testimonial'>
            { children }
        </div>
    )
}

Testimonial.Body = TestimonialBody;
Testimonial.Header = TestimonialHeader;
Testimonial.Caption = TestimonialCaption;
Testimonial.Figure = TestimonialFigure;
Testimonial.Image = TestimonialImage;
Testimonial.Quote = TestimonialQuote;

export default Testimonial;