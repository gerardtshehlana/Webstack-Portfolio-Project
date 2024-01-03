import React from "react";
import HeaderImage from "../../Image/about/a6.jpg";

export default function Header() {
  return (
    <section id="about-head">
      <img src={HeaderImage} alt="This is header Pic" />
      <div>
        <h1>Who We Are?</h1>
        <p>
        We believe in offering only the best. Our laptops undergo rigorous quality checks to ensure they meet the highest standards, providing you with a reliable and durable 
        computing experience.
        <br></br>
        <br></br>
        We understand that every user has unique needs. That's why we offer a diverse range of laptops, from sleek ultrabooks for professionals to high-performance gaming laptops for enthusiasts. Whatever your requirements, we have the perfect solution for you.
        </p>
        <abbr title="">
        Come and get quality products and services at MT SOLUTIONS We are the best.
        </abbr>
        {
          // eslint-disable-next-line
          <marquee bgcolor="#ccc" scrollamount={5} loop={-1}>
            Come and get quality products and services at MT SOLUTIONS We are the best.
          </marquee>
        }
      </div>
    </section>
  );
}
