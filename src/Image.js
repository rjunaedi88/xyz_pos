import logo from './hero-section-illustration.svg';
import './Style.css';

function Image() {
  return (
    <div className="Image">
      <header className="Image-header">
          <img src={logo} className="Image-logo" alt="image" />
        </header>
    </div>
  );
}

export default Image;
