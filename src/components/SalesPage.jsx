// Import the image at the top of your component file
import SalesPageUpdate from '../assets/salespageupdate.jpg'; // Adjust path as needed
import '../styles/SalesPage.css';

function SalesPage() {
  return (
    <div className="salespage-container">
      <img
        src={SalesPageUpdate}
        alt="About NV Secure Tech Solutions"
        className="salespage-image"
      />
    </div>
  );
}

export default SalesPage;
