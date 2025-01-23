import '../styles/deepArticleStyles.css'
const Article = () => {
  return (
    <div className=''>
        <section className="article-section">
  <div className="article-overlay">
    <h2>What is Deep Cleaning?</h2>
    <div className="article-content">
      <img
        src="../../public/assets/deep-cleaning-article.webp"
        alt="Deep Cleaning in Action"
        className="article-image"
      />
       <div className="article-text">
         <p>
          Deep cleaning goes beyond the surface to ensure every nook and cranny of your space is thoroughly cleaned. Unlike regular cleaning, 
          deep cleaning focuses on areas that are often overlooked during routine cleanings. This includes scrubbing grout lines, cleaning 
          behind appliances, and reaching into high or hard-to-access spaces.
         </p>
         <p>
          Whether you're moving into a new home, moving out, or simply need a reset, our expert team will ensure every detail is covered. 
          With our professional-grade tools and eco-friendly cleaning products, we deliver unmatched results, leaving your space fresh, 
          sanitized, and inviting. Experience the difference with our deep cleaning services and give your home or office the attention 
          it deserves.
        </p>
        </div>
        </div>
         <a href="/contact" className="contact-link">
         Schedule a Deep Clean Today!
        </a>
      </div>
     </section>
    </div>
  )
}

export default Article