import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import CM from '../images/CM.png';
import { Link } from 'gatsby';

export default () => {
  return (
    <>
      <Container fluid className="Background">
        <div className="Wrapper">
          <Link to="/">
            <a className="cta-btn cta-btn--hero backBtn">Back</a>
          </Link>
          <div className="Title">Unsplash search</div>
          <div className="Description">
            A simple web application that allows you to create, sign up for, and manage conferences.
            It also has a login and registration system, with administrator and presentation creator
            rights. It is also possible to upload presentations to a server and delete them, or to
            generate a link for viewing/downloading.
          </div>
        </div>
        <div className="Technology">
          <div className="Title">Used Technologies</div>
          <div className="Technologies">
            <div className="btn">
              <span class="noselect">React</span>
            </div>
            <div className="btn">
              <span class="noselect">Firebase</span>
            </div>
          </div>
        </div>
        <div className="Photos">
          <Image src={CM} fluid={true} />
        </div>
      </Container>
    </>
  );
};
