import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-offset-3 intro-text">
                <img src="img/Weye confidential.png" />
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}


                </div>
                </div>
                
              

            </div>
          </div>

        </div>

      </header>
    );
  }
}

export default Header;
