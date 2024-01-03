import React from "react";
import P1 from "../../Image/people/1.jpg";
// import P2 from "../../Image/people/2.png";
// import P3 from "../../Image/people/3.jpg";

export default function People() {
  return (
    <div className="people">
      <div>
        <img src={P1} alt="Director Pic" />
        <p>
          <span>Tlotliso Tsehlana</span>
          <br />
          Founder &amp; CEO <br />
          Phone: +26658589246
          <br /> Email: gerardtshehlanagmail.com
        </p>
      </div>
      {/* <div>
        <img src={P2} alt="Director Pic" />
        <p>
          <span>Thapelo Setlolela</span>
          <br /> Team Management <br />
          Phone: +26662409424
          <br /> Email: pankthapeleogmail.com
        </p>
      </div>
      <div>
        <img src={P3} alt="Director Pic" />
        <p>
          <span>Mamonamoli Tsehlana</span>
          <br /> Senior Markting Manager <br />
          Phone: +26653907139
          <br /> Email: mamonamoli@gmail.com
        </p>
      </div> */}
    </div>
  );
}
