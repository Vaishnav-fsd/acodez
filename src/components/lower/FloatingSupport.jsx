import { FaWhatsapp } from 'react-icons/fa';
import './FloatingSupport.css';

const FloatingSupport = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      className="floating-support"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      id="floating-whatsapp-btn"
    >
      <FaWhatsapp size={26} color="#25d366" aria-hidden="true" />
    </a>
  );
};

export default FloatingSupport;
