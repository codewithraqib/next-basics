import Image from "next/image";
import React from "react";

function Footer() {
  // const history = useHistory();
  const navigateRoute = (screen) => {
    // history.push(screen);
  };

  return (
    <div className="footer-parent-container">
      <div className="footer-container-inner">
        <div className="footer-item">
          <div className="footer-item-left">
            <Image
              className="footer-logo"
              src="/images/logo.jpg"
              alt="logo"
              width={120}
              height={120}
            />
            <div className="footer-title">
              <span>RCFR NR ||</span>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="link">
            <span onClick={() => navigateRoute("/acts")}>Acts &amp; Rules</span>
          </div>
          <div className="link">
            <span onClick={() => navigateRoute("/team")}>Our Team</span>
          </div>
          <div className="link">
            <span onClick={() => navigateRoute("/schemes")}>Schemes</span>
          </div>
          <div className="link">
            <span onClick={() => navigateRoute("/recruitment")}>
              Recruitment
            </span>
          </div>
        </div>
        <div className="footer-item">
          <div className="link">
            <span onClick={() => navigateRoute("/stakeholders")}>
              Database of stakeholders
            </span>
          </div>
          <div className="link">
            <span onClick={() => navigateRoute("/species")}>Species</span>
          </div>
          <div className="link">
            <span onClick={() => navigateRoute("/feedback")}>Feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
