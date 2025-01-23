import '../../../../styles/ProcessStyles/CleanCatch.css';
import { Link } from 'react-router-dom';

const Catch = () => {
    return (
      <section>

            <div className="catch-cta-button">
        <p>
          Ready to experience a cleaner, happier home?{" "}
          <Link to="/contact">Contact us online</Link> or call us at{" "}
          <strong>(336) 675-3700</strong> today!
        </p>
      </div>
        <div className="catch-container">
            <div className="catch-image">
                <img src="/assets/living-catch.jpg" alt="Cleanliness" 
                style={{
                    height: "798px",
                    
                }}
                 />
            </div>
            <div className="catch-quote">
            <blockquote>Reclaim your time and peace of mind with our professional cleaning services.</blockquote>
            </div>
            <div className="catch-cta">
                <Link to='/contact'>
                <button>Book Now</button>
                </Link>
            </div>
            <div className="catch-color-block" style={{backgroundImage: `url('/assets/living-block.jpg')`}}>
                {/* This block can be styled directly with background color in CSS */}
            </div>

        </div>
      </section>
    );
};

export default Catch;
