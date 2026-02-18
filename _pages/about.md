---
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="about-me-section">
  <p>
    I am a <strong>Postdoctoral Researcher</strong> at the <span class="nyu-accent">Courant Institute of Mathematical Sciences, New York University (NYU)</span>. 
    Prior to this role, I served as a Postdoctoral Research Associate at the University of Illinois Chicago, where I worked in close collaboration with <strong>Argonne National Laboratory</strong>.
  </p>

  <p>Currently, my research is centered on two primary pillars:</p>
  
  <ul class="research-pillars">
    <li>
      <strong>AI-driven Climate Downscaling:</strong> 
      Focusing on generative frameworks such as <span class="nyu-accent">Diffusion models and GANs</span> to enhance spatial resolution and capture fine-grained atmospheric features.
    </li>
    <li>
      <strong>Urban Climate Dynamics:</strong> 
      Encompassing multi-scale observations, physical analysis, and numerical modeling for comprehensive impact assessments.
    </li>
  </ul>

  <p>
    These areas are deeply interconnected. By integrating <span class="nyu-accent">high-fidelity AI signals</span> with physical urban modeling, 
    I aim to bridge the gap between global climate projections and local-scale realities. 
    This work ultimately provides accurate tools for <strong>urban heat mitigation</strong> and <strong>climate resilience planning</strong>.
  </p>
</div>

<hr style="margin: 2rem 0; border: 0; border-top: 1px solid #eee;">

<h2 class="section-title">Featured Updates</h2>

<div class="feature-carousel-container">
  <button class="carousel-btn-prev" aria-label="Previous">❮</button>
  
  <div class="feature-carousel-wrapper">
    <div class="feature-card">
      <img src="{{ '/images/earlyCareer.jpeg' | relative_url }}" alt="AGU GEC Spotlight">
      <div class="card-content">
        <h3>AGU GEC Early Career Spotlight</h3>
        <a href="https://connect.agu.org/gec/webinars/future-webinar" target="_blank" rel="noopener" class="card-link">Learn More →</a>
      </div>
    </div>

    <div class="feature-card">
      <img src="{{ '/images/thumbnail3.png' | relative_url }}" alt="GeoHealth Award">
      <div class="card-content">
        <h3>GeoHealth Top Cited Paper Award</h3>
        <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023GH000799" target="_blank" rel="noopener" class="card-link">Learn More →</a>
      </div>
    </div>

    <div class="feature-card">
      <img src="{{ '/images/thumbnail1.png' | relative_url }}" alt="AP News Interview">
      <div class="card-content">
        <h3>Interview with AP News</h3>
        <a href="https://apnews.com/article/record-heat-deadly-climate-change-humidity-south-11de21a526e1cbe7e306c47c2f12438d" target="_blank" rel="noopener" class="card-link">Read Article →</a>
      </div>
    </div>

    <div class="feature-card">
      <img src="{{ '/images/thumbnail2.png' | relative_url }}" alt="AGU News Interview">
      <div class="card-content">
        <h3>Interview with AGU News</h3>
        <a href="https://news.agu.org/press-release/temperature-related-deaths-could-rise-five-fold-by-end-of-century-in-us/" target="_blank" rel="noopener" class="card-link">Read Article →</a>
      </div>
    </div>
  </div>
  
  <button class="carousel-btn-next" aria-label="Next">❯</button>
</div>

<style>
/* NYU Brand Colors */
:root {
  --nyu-purple: #57068c;
  --nyu-purple-light: #7b26ad;
}

/* About Me Styles */
.about-me-section {
  line-height: 1.75;
  color: #333;
  margin-bottom: 2rem;
}

.nyu-accent {
  color: var(--nyu-purple);
  font-weight: 600;
}

.research-pillars {
  list-style: none;
  padding-left: 0;
  margin: 1.5rem 0;
}

.research-pillars li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
}

.research-pillars li::before {
  content: "•";
  color: var(--nyu-purple);
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Carousel Section Header */
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  color: #222;
}

.section-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 40px;
  height: 3px;
  background-color: var(--nyu-purple);
}

/* Carousel Container */
.feature-carousel-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.feature-carousel-wrapper {
  display: flex;
  gap: 1.25rem;
  justify-content: flex-start;
  overflow: hidden;
  padding: 15px 5px;
}

/* Card Design */
.feature-card {
  width: 235px;
  background: #fff;
  border: 1px solid #efefef;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: none; /* Hidden by default, toggled by JS */
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  border-color: #ddd;
}

/* NYU Top-line accent on hover */
.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: var(--nyu-purple);
  transition: height 0.3s ease;
  z-index: 1;
}

.feature-card:hover::before {
  height: 4px;
}

.feature-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-bottom: 1px solid #f5f5f5;
}

.feature-card .card-content {
  padding: 1.2rem 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.feature-card h3 {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  font-weight: 600;
  color: #333;
  min-height: 2.8rem;
}

.card-link {
  color: var(--nyu-purple);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: auto;
}

.card-link:hover {
  color: var(--nyu-purple-light);
  text-decoration: underline;
}

/* Navigation Buttons */
.carousel-btn-prev,
.carousel-btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid #eee;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.2s ease;
  z-index: 10;
  color: #444;
}

.carousel-btn-prev { left: -55px; }
.carousel-btn-next { right: -55px; }

.carousel-btn-prev:hover, .carousel-btn-next:hover {
  background: var(--nyu-purple);
  color: #fff;
  border-color: var(--nyu-purple);
}

/* Responsive Adjustments */
@media screen and (max-width: 950px) {
  .carousel-btn-prev { left: -20px; }
  .carousel-btn-next { right: -20px; }
}

@media screen and (max-width: 900px) {
  .carousel-btn-prev, .carousel-btn-next { display: none !important; }
  .feature-carousel-wrapper { flex-wrap: wrap; justify-content: center; }
  .feature-card {
    width: calc(50% - 0.75rem);
    display: flex !important;
  }
}

@media screen and (max-width: 500px) {
  .feature-card { width: 100%; }
}
</style>

<script>
/**
 * Initialize Carousel functionality
 * Handles card visibility and navigation based on screen size
 */
(function() {
  function initCarousel() {
    const container = document.querySelector('.feature-carousel-container');
    if (!container) return;

    const cards = container.querySelectorAll('.feature-card');
    const prevBtn = container.querySelector('.carousel-btn-prev');
    const nextBtn = container.querySelector('.carousel-btn-next');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    const cardsToShow = 3;
    
    function updateVisibility() {
      const isDesktop = window.innerWidth > 900;
      
      if (isDesktop) {
        cards.forEach((card, index) => {
          // Show only 3 cards starting from currentIndex
          if (index >= currentIndex && index < currentIndex + cardsToShow) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
        
        // Toggle button visibility based on position
        prevBtn.style.display = currentIndex > 0 ? 'flex' : 'none';
        nextBtn.style.display = currentIndex + cardsToShow < totalCards ? 'flex' : 'none';
      } else {
        // Mobile view: show all cards in a grid/stack
        cards.forEach(card => card.style.display = 'flex');
      }
    }
    
    // Event Listeners for Navigation
    nextBtn.addEventListener('click', () => {
      if (currentIndex + cardsToShow < totalCards) {
        currentIndex++;
        updateVisibility();
      }
    });
    
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateVisibility();
      }
    });
    
    // Update on resize to handle transition between mobile/desktop
    window.addEventListener('resize', updateVisibility);
    
    // Initial call
    updateVisibility();
  }
  
  // Load after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
</script>