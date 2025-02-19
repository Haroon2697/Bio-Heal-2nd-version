
    
  /* Initialize Swiper */
      





    // nav

        
         // Navigation Toggle Script
         const menuToggle = document.getElementById("menuToggle");
         const closeMenu = document.getElementById("closeMenu");
         const navLinks = document.getElementById("navLinks");
         
         // Open the menu
         menuToggle.addEventListener("click", () => {
             navLinks.classList.add("active");
         });
         
         // Close the menu
         closeMenu.addEventListener("click", () => {
             navLinks.classList.remove("active");
         });
         
        
        
        

            // faq

            function toggleBiohealFaq(button) {
                // Close all other FAQs
                const allFaqs = document.querySelectorAll('.bioheal-faq-item');
                allFaqs.forEach(faq => {
                    if (faq !== button.parentElement) {
                        faq.classList.remove('active');
                    }
                });
                
                // Toggle the clicked FAQ
                button.parentElement.classList.toggle('active');
            }

            
            document.addEventListener('DOMContentLoaded', function() {
                const scrollContainer = document.querySelector('.ingredients-scroll-container');
                const scrollLine = document.querySelector('.scroll-line');
            
                function updateScrollIndicator() {
                    const scrollPercentage = (scrollContainer.scrollLeft / (scrollContainer.scrollWidth - scrollContainer.clientWidth)) * 100;
                    scrollLine.style.transform = `translateX(${scrollPercentage}%)`;
                }
            
                scrollContainer.addEventListener('scroll', updateScrollIndicator);
                window.addEventListener('resize', updateScrollIndicator);
            
                // Initial update
                updateScrollIndicator();
            });