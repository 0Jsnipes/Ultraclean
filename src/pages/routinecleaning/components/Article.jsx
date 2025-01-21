import '../styles/ArticleStyles.css';

const Article = () => {
  return (
    <section className="article-section">
      <div className="article-overlay">
        <div className='article-content'>
        <h2>What is Routine Cleaning?</h2>
        <img src='../../../../public/assets/routine-cleaning-article.webp' />
        <p>
          Routine cleaning focuses on maintaining cleanliness and organization on a regular schedule. It includes essential tasks such as
          dusting, vacuuming, mopping, and sanitizing frequently used surfaces to keep your space fresh and inviting.
        </p>
        <p>
          Whether you prefer weekly, bi-weekly, or monthly services, our routine cleaning ensures that your home or office remains consistently
          tidy without the hassle of doing it yourself.
        </p>
        </div>
        <a href="/contact" className="contact-link">
         Schedule a Routine Cleaning Today!
        </a>
      </div>
    </section>
  );
};

export default Article;
