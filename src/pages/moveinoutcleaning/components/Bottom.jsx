
import '../styles/movBottom.css';

const Bottom = () => {
  return (
    <section className="bottom-section">
      <h2>Why Choose Us?</h2>
      <div className="bottom-images">
        {/*I want to make these flip over and be clickable giving reasons to choose this company*/ }
        <img src="/assets/move-in-cleaning1.jpg" alt="Clean home ready to move in" />
        <img src="/assets/move-out-cleaning2.jpg" alt="Vacant clean apartment" />
        <img src="/assets/move-in-cleaning2.jpg" alt="Spotless kitchen for move in" />
      </div>
      <p className="bottom-info">
        Moving can be stressful. Let us handle the cleaning so you can focus on settling into your new home. Our thorough move-in/out cleaning ensures a fresh start for you and helps you leave a great impression at your old place.
      </p>
    </section>
  );
};

export default Bottom;
