import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              officia mollitia repellendus aut omnis, quia eaque laboriosam
              illum architecto placeat earum quam fuga, doloremque eveniet autem
              vero. Totam excepturi vero ipsam assumenda quasi illum consectetur
              nobis vel iusto! Possimus perspiciatis minima, quasi et cumque ab
              dolorem aut ad explicabo fugit accusamus quam similique distinctio
              veritatis alias temporibus ullam voluptate doloremque culpa veniam
              rem repudiandae tempore! Ipsam repellendus quo commodi non velit
              placeat. Reprehenderit, quia alias? Facere minus voluptatem modi
              aut doloribus enim consequatur illum quasi id dolorem sapiente
              ducimus aliquid quia impedit deleniti accusamus nobis odio
              officiis, facilis quas accusantium.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/About.webp"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
