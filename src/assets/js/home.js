import "lite-youtube-embed";
import BasePage from "./base-page";
import Lightbox from "fslightbox";
window.fslightbox = Lightbox;

class Home extends BasePage {
    onReady() {
        this.initFeaturedTabs();
        this.initCountdownTimers();
        this.initCategoryTabs();
        this.initScrollToTop();
        this.initProductCarousel();
    }

    /**
     * used in views/components/home/featured-products-style*.twig
     */
    initFeaturedTabs() {
        app.all('.tab-trigger', el => {
            el.addEventListener('click', ({ currentTarget: btn }) => {
                let id = btn.dataset.componentId;
                // btn.setAttribute('fill', 'solid');
                app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'is-active opacity-0 translate-y-3', 'inactive', tab => tab.id == btn.dataset.target)
                    .toggleClassIf(`#${id} .tab-trigger`, 'is-active', 'inactive', tabBtn => tabBtn == btn);

                // fadeIn active tabe
                setTimeout(() => app.toggleClassIf(`#${id} .tabs-wrapper>div`, 'opacity-100 translate-y-0', 'opacity-0 translate-y-3', tab => tab.id == btn.dataset.target), 100);
            })
        });
        document.querySelectorAll('.s-block-tabs').forEach(block => block.classList.add('tabs-initialized'));
    }

    /**
     * Initialize countdown timers for top banner and deals section
     */
    initCountdownTimers() {
        // Top banner countdown
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        const millisecondsEl = document.getElementById('milliseconds');
        
        if (hoursEl && minutesEl && secondsEl && millisecondsEl) {
            let hours = parseInt(hoursEl.textContent) || 0;
            let minutes = parseInt(minutesEl.textContent) || 0;
            let seconds = parseInt(secondsEl.textContent) || 0;
            let milliseconds = parseInt(millisecondsEl.textContent) || 0;
            
            setInterval(() => {
                milliseconds--;
                if (milliseconds < 0) {
                    milliseconds = 99;
                    seconds--;
                    if (seconds < 0) {
                        seconds = 59;
                        minutes--;
                        if (minutes < 0) {
                            minutes = 59;
                            hours--;
                            if (hours < 0) {
                                hours = 23;
                            }
                        }
                    }
                }
                
                hoursEl.textContent = String(hours).padStart(2, '0');
                minutesEl.textContent = String(minutes).padStart(2, '0');
                secondsEl.textContent = String(seconds).padStart(2, '0');
                millisecondsEl.textContent = String(milliseconds).padStart(2, '0');
            }, 10);
        }

        // Deals countdown
        const dealsTimerBoxes = document.querySelectorAll('.deals-countdown .timer-box');
        if (dealsTimerBoxes.length > 0) {
            let dealsHours = 9;
            let dealsMinutes = 20;
            let dealsSeconds = 54;
            let dealsMilliseconds = 27;
            
            setInterval(() => {
                dealsMilliseconds--;
                if (dealsMilliseconds < 0) {
                    dealsMilliseconds = 99;
                    dealsSeconds--;
                    if (dealsSeconds < 0) {
                        dealsSeconds = 59;
                        dealsMinutes--;
                        if (dealsMinutes < 0) {
                            dealsMinutes = 59;
                            dealsHours--;
                            if (dealsHours < 0) {
                                dealsHours = 23;
                            }
                        }
                    }
                }
                
                if (dealsTimerBoxes[0]) dealsTimerBoxes[0].textContent = String(dealsHours).padStart(2, '0');
                if (dealsTimerBoxes[1]) dealsTimerBoxes[1].textContent = String(dealsMinutes).padStart(2, '0');
                if (dealsTimerBoxes[2]) dealsTimerBoxes[2].textContent = String(dealsSeconds).padStart(2, '0');
                if (dealsTimerBoxes[3]) dealsTimerBoxes[3].textContent = String(dealsMilliseconds).padStart(2, '0');
            }, 10);
        }
    }

    /**
     * Initialize category tabs in featured products section
     */
    initCategoryTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                // Here you can add logic to filter products based on the active tab
            });
        });
    }

    /**
     * Initialize scroll to top button
     */
    initScrollToTop() {
        const scrollTopBtn = document.querySelector('.scroll-top-btn');
        
        if (scrollTopBtn) {
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    scrollTopBtn.style.display = 'flex';
                } else {
                    scrollTopBtn.style.display = 'none';
                }
            });
            
            scrollTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    /**
     * Initialize product carousel navigation
     */
    initProductCarousel() {
        const navArrows = document.querySelectorAll('.nav-arrow');
        
        navArrows.forEach(arrow => {
            arrow.addEventListener('click', function() {
                const isLeft = this.querySelector('.sicon-chevron-left, .fa-chevron-left');
                const productsGrid = this.closest('.container').querySelector('.products-grid, .manufacturers-grid');
                
                if (productsGrid) {
                    if (isLeft) {
                        productsGrid.scrollBy({ left: -300, behavior: 'smooth' });
                    } else {
                        productsGrid.scrollBy({ left: 300, behavior: 'smooth' });
                    }
                }
            });
        });
    }
}

Home.initiateWhenReady(['index']);