/**
 * Simple carousel for featured updates
 */
(function() {
  function initCarousel() {
    const container = document.querySelector('.feature-carousel-container');
    if (!container) {
      console.log('Carousel container not found');
      return;
    }

    const wrapper = container.querySelector('.feature-carousel-wrapper');
    const cards = wrapper.querySelectorAll('.feature-card');
    const prevBtn = container.querySelector('.carousel-btn-prev');
    const nextBtn = container.querySelector('.carousel-btn-next');
    
    console.log('Total cards:', cards.length);
    
    let currentIndex = 0;
    const totalCards = cards.length;
    
    // 초기 상태 설정: 처음 3개만 보이기
    function updateVisibility() {
      console.log('Current index:', currentIndex, 'Total cards:', totalCards);
      cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + 3) {
          card.style.display = 'block';
          card.style.setProperty('display', 'block', 'important');
        } else {
          card.style.display = 'none';
          card.style.setProperty('display', 'none', 'important');
        }
      });
      
      // 버튼 상태 업데이트
      const showPrev = currentIndex > 0;
      const showNext = currentIndex + 3 < totalCards;
      
      console.log('Show prev:', showPrev, 'Show next:', showNext);
      
      prevBtn.style.display = showPrev ? 'flex' : 'none';
      nextBtn.style.display = showNext ? 'flex' : 'none';
    }
    
    // 다음 카드로
    nextBtn.addEventListener('click', function() {
      console.log('Next clicked');
      if (currentIndex + 3 < totalCards) {
        currentIndex++;
        updateVisibility();
      }
    });
    
    // 이전 카드로
    prevBtn.addEventListener('click', function() {
      console.log('Prev clicked');
      if (currentIndex > 0) {
        currentIndex--;
        updateVisibility();
      }
    });
    
    // 초기화
    console.log('Initializing carousel');
    updateVisibility();
  }
  
  // DOM 로드 후 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();

