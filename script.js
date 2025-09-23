// JavaScript for the Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button functionality
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '↑';
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    document.body.appendChild(backToTopButton);
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            
            // Show loading state
            btnText.classList.add('d-none');
            btnLoading.classList.remove('d-none');
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form submission code)
            setTimeout(function() {
                // Reset button state
                btnText.classList.remove('d-none');
                btnLoading.classList.add('d-none');
                submitBtn.disabled = false;
                
                // Show success message
                alert('Thank you for your message! I will get back to you within 24 hours.');
                
                // Reset form
                contactForm.reset();
            }, 2000);
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate__animated.animate__fadeInUp');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Add animation classes to elements that need animation
    const addAnimationClasses = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const cards = section.querySelectorAll('.card, .project-item, .contact-item, .soft-skill-item, .skill-item');
            
            cards.forEach((card, index) => {
                if (!card.classList.contains('animate__animated')) {
                    card.classList.add('animate__animated', 'animate__fadeInUp');
                    card.style.animationDelay = `${index * 0.1}s`;
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                }
            });
        });
    };
    
    // Initialize animations
    addAnimationClasses();
    animateOnScroll();
    
    // Listen for scroll events to trigger animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.pageYOffset > 50) {
            navbar.style.backgroundColor = 'rgba(10, 29, 61, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 29, 61, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
    
    // Image hover effect
    const profileImages = document.querySelectorAll('.profile-image-container');
    profileImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.card, .project-item, .contact-item');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Skill bars animation
    const skillBars = document.querySelectorAll('.progress-bar');
    const animateSkillBars = function() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            const elementPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                bar.style.width = width;
            }
        });
    };
    
    // Initialize skill bars animation
    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref && linkHref.includes(currentPage) && currentPage !== '') {
            link.classList.add('active');
        }
    });
    
    // If on index page, add active class to home link when scrolling
    if (currentPage === '' || currentPage === 'index.html') {
        const sections = document.querySelectorAll('section');
        const homeLink = document.querySelector('a[href="#home"]');
        const aboutLink = document.querySelector('a[href="#about"]');
        const skillsLink = document.querySelector('a[href="#skills"]');
        const projectsLink = document.querySelector('a[href="#projects"]');
        const contactLink = document.querySelector('a[href="#contact"]');
        
        const navLinksMap = {
            '#home': homeLink,
            '#about': aboutLink,
            '#skills': skillsLink,
            '#projects': projectsLink,
            '#contact': contactLink
        };
        
        window.addEventListener('scroll', function() {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    currentSection = '#' + section.getAttribute('id');
                }
            });
            
            // Remove active class from all links
            Object.values(navLinksMap).forEach(link => {
                if (link) link.classList.remove('active');
            });
            
            // Add active class to current section link
            if (navLinksMap[currentSection]) {
                navLinksMap[currentSection].classList.add('active');
            }
        });
    }
    
    // Preloader (optional - remove if not needed)
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.style.opacity = '0';
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }
    
    // Console log for debugging
    console.log('Portfolio website scripts loaded successfully!');
});

// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Function to handle form validation
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    });
    
    return isValid;
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        const tempAlert = document.createElement('div');
        tempAlert.textContent = 'Copied to clipboard!';
        tempAlert.style.position = 'fixed';
        tempAlert.style.top = '20px';
        tempAlert.style.right = '20px';
        tempAlert.style.backgroundColor = '#28a745';
        tempAlert.style.color = 'white';
        tempAlert.style.padding = '10px 20px';
        tempAlert.style.borderRadius = '5px';
        tempAlert.style.zIndex = '9999';
        document.body.appendChild(tempAlert);
        
        setTimeout(function() {
            tempAlert.remove();
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy text: ', err);
    });
}

// Function to handle email link clicks
function handleEmailClick(email) {
    // You can add analytics or other functionality here
    console.log('Email clicked:', email);
    return true; // Allow default behavior
}

// Function to handle phone link clicks
function handlePhoneClick(phone) {
    // You can add analytics or other functionality here
    console.log('Phone clicked:', phone);
    return true; // Allow default behavior
}

// Function to initialize tooltips (if needed)
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Function to handle dark mode toggle (optional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference
function checkDarkModePreference() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Initialize dark mode on page load
checkDarkModePreference();