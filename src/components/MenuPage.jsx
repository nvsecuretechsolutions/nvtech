// Import the image at the top of your component file
import MenuImage from '../assets/menupageupdate.jpg'; // Same image
import '../styles/MenuPage.css';

function MenuPage() {
  return (
    <div className="menupage-container">
      <img
        src={MenuImage}
        alt="About NV Secure Tech Solutions"
        className="menupage-image"
      />
    </div>
  );
}

export default MenuPage;
