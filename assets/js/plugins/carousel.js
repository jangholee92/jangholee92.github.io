/**
 * Simple carousel for featured updates
 */
(function() {
  function initCarousel() {
    const container = document.querySelector('.feature-carousel-container');
    if (!container) return;

    const wrapper = container.querySelector('.feature-carousel-wrapper');
    const cards = wrapper.querySelectorAll('.feature-card');
    const prevBtn = container.querySelector('.carousel-btn-prev');
    const nextBtn = container.querySelector('.carousel-btn-next');
    
    let currentIndex = 0;
    const totalCards = cards.length;
    
    // 초기 상태 설정: 처음 3개만 보이기
    function updateVisibility() {
      cards.forEach((card, index) => {
        if (index >= currentIndex && index < currentIndex + 3) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      
      // 버튼 상태 업데이트
      prevBtn.style.display = currentIndex > 0 ? 'flex' : 'none';
      nextBtn.style.display = currentIndex + 3 < totalCards ? 'flex' : 'none';
    }
    
    // 다음 카드로
    nextBtn.addEventListener('click', function() {
      if (currentIndex + 3 < totalCards) {
        currentIndex++;
        updateVisibility();
      }
    });
    
    // 이전 카드로
    prevBtn.addEventListener('click', function() {
      if (currentIndex > 0) {
        currentIndex--;
        updateVisibility();
      }
    });
    
    // 초기화
    updateVisibility();
  }
  
  // DOM 로드 후 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
  } else {
    initCarousel();
  }
})();

