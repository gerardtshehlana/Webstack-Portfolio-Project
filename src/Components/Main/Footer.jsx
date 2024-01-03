import React from 'react'
import { Link } from 'react-router-dom'
import applestor from '../../Image/pay/app.jpg'
import playstor from '../../Image/pay/play.jpg'
import PayImage from '../../Image/pay/pay.png'
import "./Footer.css"

export default function Footer() {
    return (
        <footer id="footer" className='fix-top'>
            <div className="col">
                <Link className="icon" to="/">MT SOLUTIONS</Link>
                <h4>Contact</h4>
                <p><strong>Address: </strong>Maseru, Lesotho</p>
                <p><strong>Phone: </strong>+26658589246</p>
                <p><strong>Hours: </strong>09:00 - 18:30(Monday - Sunday)</p>
                <h4>Follow</h4>
                <div className="follow-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tlotliso-ts-ehlana-888144291"><i className="fa-brands fa-linkedin" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100095416956600"><i className="fa-brands fa-facebook" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com/"><i className="fa-brands fa-whatsapp" /></a>
                    {/* <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCMr7miKWktz7vXj7zydHBcQ"><i className="fa-brands fa-youtube" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aman__indian/"><i className="fa-brands fa-instagram" /></a> */}
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Delivery Information</Link>
                <Link to="/contact">Privacy Policy</Link>
                <Link to="/contact">Terms &amp; Conditions</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <Link to="/cart"     >Sign In</Link>
                <Link to="/cart" >View Cart</Link>
                <Link to="/cart">My Watchlist</Link>
                <Link to="/cart">Track My Order</Link>
                <Link to="/cart">Help</Link>
            </div>
            <div className="col">
                <h4>Install App</h4>
                <p>From App Stor or Google Play Store</p>
                <div className="install-img">
                    <img src={applestor} alt="Download from App Store" />
                    <img src={playstor} alt="Download from Google Play Store" />
                </div>
                <p>Secure Payment Getway</p>
                <img src={PayImage} alt="Download from Google Play Store" />
            </div>
        </footer>
    )
}
