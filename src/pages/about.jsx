import { useRef } from "react";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();

  let inputRef = useRef();

  function selectText() {
    inputRef.current.select();
  }
  return (
    <div className="container2 about-page">
      <h1 className="about">About our website</h1>
      <p className="first">
        Our website is to showcase different professsionals from different
        domains.It displays the name,role,bio,images thorugh individual cards.
      </p>
      <h3 className="website">Website features</h3>
      <p className="second">
        {" "}
        Users can explore professionals in different fields such as
        Cybersecurity, DevOps, MERN Stack Development, Data Analytics,
        Artificial Intelligence and Machine Learning, and Cloud Computing. They
        can also view or hide each professional's biography.
      </p>
      <h3 className="technology">Technology used</h3>
      <p className="third">
        The website is developed using React.js for building user interface,Html
        focus on structuring,Css adds styling and Bootsrap for responsive
        layouts.
      </p>
      <h3 className="hook">Hooks used</h3>
      <p className="fourth">
        useState is used to show and hide professional biographies.useRef is
        used to focus and access the search input field.
      </p>
      <h3 className="navigation">Navigation</h3>
      <p className="fifth">
        React Router is used to navigate between home page and about page
      </p>
    </div>
  );
}

export default About;
