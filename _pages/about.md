---
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

**About Me**
<p>
  I am a <strong>Postdoctoral Researcher</strong> at the University of Illinois Chicago,
  working on the <strong>CROCUS</strong> project in collaboration with <strong>Argonne National Laboratory</strong>.
  Within this effort, I serve as the <strong>Planning Lead</strong> for the
  <strong>Artificial Intelligence and Digital Twins (AIDT)</strong> initiative, advancing data-driven
  approaches to understand and manage complex urban climate systems.
</p>

<h3>Research Focus</h3>
<ol>
  <li>
    <strong>Urban Climate Physics</strong> —
    I study how urban form, surface energy balance, and anthropogenic heat shape local microclimates.
    My work integrates physical climate modeling with high-resolution environmental sensing to uncover
    the mechanisms behind urban heat, flooding, and air-quality dynamics.
  </li>
  <li>
    <strong>AI-Enhanced Environmental Data Science</strong> —
    I develop AI-driven frameworks that combine satellite, sensor, and model data to enhance environmental
    observability. Using methods such as convolutional and recurrent networks, hybrid physics–AI models,
    and generative architectures, I reconstruct, downscale, and interpret complex environmental processes.
  </li>
  <li>
    <strong>Climate Impacts and Urban Resilience</strong> —
    I link physical and social dimensions of climate impacts by quantifying how urban heat, flooding,
    and pollution intersect with socioeconomic vulnerability. My research translates environmental data
    into actionable insights for equitable climate adaptation and mitigation.
  </li>
  <li>
    <strong>Digital Twin Systems for Climate Intelligence</strong> —
    I lead efforts to build urban digital twin frameworks that fuse real-time sensing, AI analytics,
    and physics-based simulations. These systems enable adaptive forecasting, scenario testing,
    and evidence-based decision support for sustainable and resilient urban design.
  </li>
</ol>


---

**Featured Updates**

<style>
.feature-carousel-container {
  position: relative;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 740px;
}

.feature-carousel-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  justify-content: space-between;
}

.feature-card {
  width: 230px;
  flex-shrink: 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
  overflow: hidden;
  transition: opacity 0.3s ease;
  display: none; /* 초기에 숨김 - JavaScript가 보여줄 카드만 표시 */
}

.feature-card img {
  width: 100%;
  height: auto;
}

.feature-card .card-content {
  padding: 1rem;
}

.feature-card h3 {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
}

.carousel-btn-prev,
.carousel-btn-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  color: #333;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  z-index: 10;
}

.carousel-btn-prev {
  left: -50px;
}

.carousel-btn-next {
  right: -50px;
}

.carousel-btn-prev:hover,
.carousel-btn-next:hover {
  background: #fff;
  box-shadow: 0 3px 8px rgba(0,0,0,0.3);
}

.carousel-btn-prev:active,
.carousel-btn-next:active {
  transform: translateY(-50%) scale(0.95);
}

@media screen and (max-width: 900px) {
  .carousel-btn-prev,
  .carousel-btn-next {
    display: none !important;
  }
  
  .feature-carousel-container {
    width: 100%;
  }
  
  .feature-carousel-wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .feature-card {
    width: calc(33.333% - 0.67rem);
  }
}
</style>

<div class="feature-carousel-container">
  <button class="carousel-btn-prev" aria-label="Previous cards">‹</button>
  
  <div class="feature-carousel-wrapper">
    <!-- Card 1: AGU GEC Early Career Spotlight -->
    <div class="feature-card">
      <img src="{{ '/images/earlyCareer.jpeg' | relative_url }}" 
           alt="AGU GEC Early Career Spotlight">
      <div class="card-content">
        <h3>AGU GEC Early Career Spotlight</h3>
        <p>
          <a href="https://connect.agu.org/gec/webinars/future-webinar" 
             target="_blank" 
             rel="noopener" 
             style="color: #007acc; text-decoration: none;">
            Learn More
          </a>
        </p>
      </div>
    </div>

    <!-- Card 2: GeoHealth Top Cited Paper Award -->
    <div class="feature-card">
      <img src="{{ '/images/thumbnail3.png' | relative_url }}" 
           alt="GeoHealth Award Thumbnail">
      <div class="card-content">
        <h3>GeoHealth Top Cited Paper Award</h3>
        <p>
          <a href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2023GH000799" 
             target="_blank" 
             rel="noopener" 
             style="color: #007acc; text-decoration: none;">
            Learn More
          </a>
        </p>
      </div>
    </div>

    <!-- Card 3: Interview with AP News -->
    <div class="feature-card">
      <img src="{{ '/images/thumbnail1.png' | relative_url }}" 
           alt="AP News Thumbnail">
      <div class="card-content">
        <h3>Interview with AP News</h3>
        <p>
          <a href="https://apnews.com/article/record-heat-deadly-climate-change-humidity-south-11de21a526e1cbe7e306c47c2f12438d"
             target="_blank" 
             rel="noopener" 
             style="color: #007acc; text-decoration: none;">
            Read Article
          </a>
        </p>
      </div>
    </div>

    <!-- Card 4: Interview with AGU News -->
    <div class="feature-card">
      <img src="{{ '/images/thumbnail2.png' | relative_url }}" 
           alt="AGU News Thumbnail">
      <div class="card-content">
        <h3>Interview with AGU News</h3>
        <p>
          <a href="https://news.agu.org/press-release/temperature-related-deaths-could-rise-five-fold-by-end-of-century-in-us/"
             target="_blank" 
             rel="noopener" 
             style="color: #007acc; text-decoration: none;">
            Read Article
          </a>
        </p>
      </div>
    </div>
  </div>
  
  <button class="carousel-btn-next" aria-label="Next cards">›</button>
</div>

<script>
(function() {
  function initCarousel() {
    const container = document.querySelector('.feature-carousel-container');
    if (!container) return;

    const cards = container.querySelectorAll('.feature-card');
    const prevBtn = container.querySelector('.carousel-btn-prev');
    const nextBtn = container.querySelector('.carousel-btn-next');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    
    function updateVisibility() {
      cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + 3) {
          card.style.setProperty('display', 'block', 'important');
        } else {
          card.style.setProperty('display', 'none', 'important');
        }
      });
      
      prevBtn.style.display = currentIndex > 0 ? 'flex' : 'none';
      nextBtn.style.display = currentIndex + 3 < totalCards ? 'flex' : 'none';
    }
    
    nextBtn.addEventListener('click', function() {
      if (currentIndex + 3 < totalCards) {
        currentIndex++;
        updateVisibility();
      }
    });
    
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateVisibility();
      }
    });
    
    updateVisibility();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();
</script>
