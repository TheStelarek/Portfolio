import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import GM from '../images/GM.png';
import { Link } from 'gatsby';

export default () => {
  return (
    <>
      <Container fluid className="Background">
        <div className="Wrapper">
          <Link to="/">
            <a className="cta-btn cta-btn--hero backBtn">Back</a>
          </Link>
          <div className="Title">GreatMove</div>
          <div className="Description">
            An app that helps the user with their daily workouts. Ability to use recipes, with
            micronutrients broken down, add items to cart, then ability to print or save as .pdf.
            Calculators like BMI, TMR or BMR. The project is still being developed.
          </div>
        </div>
        <div className="Technology">
          <div className="Title">Used Technologies</div>
          <div className="Technologies">
            <div className="btn">
              <span class="noselect">Next.js</span>
            </div>
            <div className="btn">
              <span class="noselect">Express.js</span>
            </div>
          </div>
        </div>
        <div className="Photos">
          <Image src={GM} fluid={true} />
        </div>
      </Container>
    </>
  );
};
