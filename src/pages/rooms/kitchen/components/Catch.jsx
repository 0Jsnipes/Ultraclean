
import '../../../../styles/ProcessStyles/CleanCatch.css'; // Ensure the CSS file is correctly linked

const Catch = () => {
    return (
      <section>

            <div className="catch-cta-button">
        <p>
          Ready to experience a cleaner, happier home?{" "}
          <a href="/contact">Contact us online</a> or call us at{" "}
          <strong>(336) 675-3700</strong> today!
        </p>
      </div>
        <div className="catch-container">
            <div className="catch-image">
                <img src="/assets/kitchen-catch.jpg" alt="Cleanliness" style={{
                    height: "798px"
                }} />
            </div>
            <div className="catch-quote">
            <blockquote>Reclaim your time and peace of mind with our professional cleaning services.</blockquote>
            </div>
            <div className="catch-cta">
                <button>Book Now</button>
            </div>
            <div className="catch-color-block" style={{backgroundImage: `url('/assets/kitchen-block.jpg')`}}>
                {/* This block can be styled directly with background color in CSS */}
            </div>

        </div>
      </section>
    );
};

export default Catch;
