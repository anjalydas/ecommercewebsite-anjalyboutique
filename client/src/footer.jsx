import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="/about">About Us</a></li>
            <li><a href="/privacy-policy">Privacy & Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            <li><a href="/cancellation-refund-policy">Cancellation & Refund Policy</a></li>
            <li><a href="/customer-care">Customer Care</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <h4 className="footer-heading">Contact Us</h4>
          <p>
            anjalyboutique.com, 537 D, Ward 14,<br />
            Elliyarackal Junction Konni,<br />
            Pathanamthitta, Kerala-689691
          </p>
          <p className="footer-contact">📞 +91 82000 00077</p>
          <p className="footer-contact">📧 customercare@anjalyboutique.com</p>
        </div>

        {/* Mobile App */}
        <div className="footer-section">
          <h4 className="footer-heading">Find Our App On Mobile</h4>
          <div className="footer-flex">
            <img src="https://d2yjtfae5jrf96.cloudfront.net/media/www.stickersstickers.com/source/apple-app-store-qr-code-sticker.png" alt="App Store" />
            <img src="https://d2yjtfae5jrf96.cloudfront.net/media/www.stickersstickers.com/source/google-play-store-qr-code-sticker.png" alt="Google Play" />
          </div>
        </div>

        {/* Payments & Social */}
        <div className="footer-section">
          <h4 className="footer-heading">Payment Methods</h4>
          <div className="footer-flex">
            <img src="https://qdelo.com/assets/images/cards/visa.png" alt="Visa" />
            <img src="https://qdelo.com/assets/images/cards/master.png" alt="Mastercard" />
            <img src="https://qdelo.com/assets/images/cards/mobile-money.png" alt="Other" />
          </div>
          <h4 className="footer-heading social-heading">Keep In Touch</h4>
          <div className="footer-flex">
            <a href="#"><img src="https://fortconcho.com/wp-content/uploads/2018/01/facebook-logo-png.png" alt="Facebook" /></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4M4Y-6t5RJuSWFY1ODSF_oJFHcwOLSqhZJ0OKfof2ik7-raUcw2-MSxWZJt-10XrTDfY&usqp=CAU" alt="Instagram" /></a>
            <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qEnYL4qHVxUt4DymptKAWE7W-RcYBxqhuw&s" alt="WhatsApp" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
