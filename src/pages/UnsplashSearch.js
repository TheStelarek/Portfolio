import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import unsplashPresentation from '../images/unsplashPresentation.png';
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
            A simple application that allows the user, using the unsplash API to search for a given
            phrase in a search engine, and choose how many images from a given keyword should show
            up.
          </div>
        </div>
        <div className="Technology">
          <a
            target="_blank"
            className="cta-btn cta-btn--hero"
            href="https://unsplash-search-jade.vercel.app"
          >
            Live
          </a>
          <div className="Title">Used Technologies</div>
          <div className="Technologies">
            <div className="btn">
              <span class="noselect">Vue</span>
            </div>
            <div className="btn">
              <span class="noselect">Vuex</span>
            </div>
            <div className="btn">
              <span class="noselect">Vue-router</span>
            </div>
          </div>
        </div>
        <div className="Photos">
          <Image src={unsplashPresentation} fluid={true} />
        </div>
      </Container>
    </>
  );
};
