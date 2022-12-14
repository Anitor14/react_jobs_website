import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby four dollar toast ascot farm-to-table sustainable health
            goth cornhole jianbing everyday carry tousled normcore art party
            activated charcoal williamsburg raclette. Tattooed franzen
            pitchfork, VHS cardigan jianbing craft beer coloring book tilde
            asymmetrical ramps.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
