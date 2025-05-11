/**
* Template Name: iPortfolio - v1.4.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

  // Toggle projects function (Show More/Show Less)
  window.toggleProjects = function() {
    var button = document.getElementById('show-more-btn');
    var hiddenProjects = document.querySelectorAll('[data-hidden="true"]');
    var portfolioContainer = $('.portfolio-container');
    var isShowing = button.innerHTML.includes('Show More');
    
    hiddenProjects.forEach(function(project) {
      if (isShowing) {
        // Show projects
        project.style.display = 'block';
        project.classList.remove('hidden-project');
      } else {
        // Hide projects
        project.style.display = 'none';
        project.classList.add('hidden-project');
      }
    });
    
    // Update button text
    if (isShowing) {
      button.innerHTML = '<i class="bx bx-minus-circle"></i> Show Less Projects';
    } else {
      button.innerHTML = '<i class="bx bx-plus-circle"></i> Show More Projects';
      // Scroll to projects section when hiding
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Force Isotope reload
    if (portfolioContainer.data('isotope')) {
      setTimeout(function() {
        portfolioContainer.isotope('layout');
      }, 300);
    }
  }

  // JavaScript for Show More/Less Toggle
document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.getElementById('show-more-certificates');
  const hiddenCertificates = document.querySelector('.hidden-certificates');
  
  // Initially hide the certificates
  hiddenCertificates.style.display = 'none';
  
  showMoreBtn.addEventListener('click', function() {
    if (hiddenCertificates.style.display === 'none') {
      // Show certificates
      hiddenCertificates.style.display = 'block';
      showMoreBtn.innerHTML = '<i class="bx bx-minus-circle"></i> Show Less Certificates';
      
      // Add animation class to fade in
      hiddenCertificates.classList.add('fade-in');
      
      // Scroll to first hidden certificate
      setTimeout(function() {
        const firstHiddenCert = hiddenCertificates.querySelector('.cert-item');
        if (firstHiddenCert) {
          firstHiddenCert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 300);
    } else {
      // Hide certificates
      hiddenCertificates.style.display = 'none';
      showMoreBtn.innerHTML = '<i class="bx bx-plus-circle"></i> Show More Certificates';
      
      // Scroll back to all certificates heading
      document.querySelector('.cert-category-title:nth-of-type(2)').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
});

})(jQuery);