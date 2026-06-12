/**
 * BOPEP MUSIC STUDIO — MAIN SCRIPTS
 * 比波普音乐工作室 · 全局脚本
 *
 * Features:
 * - Mobile navigation toggle
 * - Smooth scroll for anchor links
 * - Contact form validation
 * - Gallery lightbox
 * - Page load animations
 */
(function () {
    'use strict';

    /* ================================================================
       1. MOBILE NAVIGATION
       ================================================================ */
    var navbar = document.querySelector('.navbar');
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    var navAnchors = document.querySelectorAll('.nav-links a');

    if (navToggle && navLinks) {
        // Toggle menu
        navToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            document.body.classList.toggle('nav-open');
        });

        // Close menu when a nav link is clicked
        navAnchors.forEach(function (link) {
            link.addEventListener('click', function () {
                document.body.classList.remove('nav-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (document.body.classList.contains('nav-open') &&
                !navbar.contains(e.target)) {
                document.body.classList.remove('nav-open');
            }
        });

        // Close menu on ESC
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
                document.body.classList.remove('nav-open');
            }
        });
    }

    /* ================================================================
       2. ACTIVE NAV HIGHLIGHT
       ================================================================ */
    (function () {
        var path = window.location.pathname;
        var page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

        navAnchors.forEach(function (link) {
            var href = link.getAttribute('href') || '';
            if (href === page ||
                (page === '' && href === 'index.html') ||
                (page === '/' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    })();

    /* ================================================================
       3. SMOOTH SCROLL
       ================================================================ */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = parseInt(getComputedStyle(document.documentElement)
                    .getPropertyValue('--nav-height').trim()) || 64;
                var offset = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    /* ================================================================
       4. CONTACT FORM VALIDATION
       ================================================================ */
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous errors
            contactForm.querySelectorAll('.form-error').forEach(function (el) {
                el.classList.remove('visible');
                el.textContent = '';
            });
            contactForm.querySelectorAll('.form-input').forEach(function (el) {
                el.classList.remove('error');
            });

            // Get fields
            var nameField = contactForm.querySelector('#form-name');
            var phoneField = contactForm.querySelector('#form-phone');
            var messageField = contactForm.querySelector('#form-message');

            var isValid = true;

            // Validate name
            if (!nameField || nameField.value.trim().length < 2) {
                showError(nameField, '请输入您的姓名（至少2个字）');
                isValid = false;
            }

            // Validate phone
            var phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneField || !phoneRegex.test(phoneField.value.trim())) {
                showError(phoneField, '请输入有效的手机号码');
                isValid = false;
            }

            // Validate message
            if (!messageField || messageField.value.trim().length < 10) {
                showError(messageField, '请输入留言内容（至少10个字）');
                isValid = false;
            }

            if (!isValid) return;

            // Success
            var formContainer = contactForm.parentElement;
            var successEl = document.getElementById('form-success');

            contactForm.style.display = 'none';

            if (successEl) {
                successEl.classList.add('visible');
            } else {
                var successDiv = document.createElement('div');
                successDiv.id = 'form-success';
                successDiv.className = 'form-success visible';
                successDiv.innerHTML =
                    '<div class="success-icon">&#10004;</div>' +
                    '<h3>感谢您的留言！</h3>' +
                    '<p>我们会尽快与您联系。<br>' +
                    '您也可以直接添加微信：<strong style="color:#C9A84C;">cxf810529</strong></p>';
                formContainer.appendChild(successDiv);
            }

            // Reset form data
            contactForm.reset();
        });
    }

    function showError(field, message) {
        if (!field) return;
        field.classList.add('error');
        var errorEl = field.parentElement.querySelector('.form-error');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('visible');
        }
    }

    /* ================================================================
       5. GALLERY LIGHTBOX
       ================================================================ */
    var lightbox = document.getElementById('lightbox');
    var lightboxContent = lightbox ? lightbox.querySelector('.lightbox-content') : null;

    // Create lightbox if it doesn't exist
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.className = 'lightbox';
        lightbox.innerHTML =
            '<button class="lightbox-close" aria-label="关闭">&times;</button>' +
            '<div class="lightbox-content"></div>';
        document.body.appendChild(lightbox);
        lightboxContent = lightbox.querySelector('.lightbox-content');
    }

    var lightboxClose = lightbox.querySelector('.lightbox-close');

    // Open lightbox on gallery item click
    document.querySelectorAll('.gallery-item, .gallery-placeholder').forEach(function (item) {
        item.addEventListener('click', function () {
            var img = this.querySelector('img');

            if (img && img.src) {
                lightboxContent.innerHTML =
                    '<img src="' + img.src + '" alt="' + (img.alt || '') + '">';
            } else {
                // Placeholder
                var label = this.querySelector('.placeholder-text');
                var text = label ? label.textContent : '照片';
                lightboxContent.innerHTML =
                    '<div class="lightbox-placeholder">' +
                    '<span>&#127928; ' + text + '</span>' +
                    '</div>';
            }

            lightbox.classList.add('open');
            document.body.classList.add('lightbox-open');
        });
    });

    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.classList.remove('lightbox-open');
        lightboxContent.innerHTML = '';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', function (e) {
            e.stopPropagation();
            closeLightbox();
        });
    }

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('open')) {
            closeLightbox();
        }
    });

    /* ================================================================
       6. SCROLL-TRIGGERED ANIMATIONS
       ================================================================ */
    var animatedElements = document.querySelectorAll('.animate-in');

    if (animatedElements.length > 0 && 'IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        animatedElements.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // Fallback: show all immediately
        animatedElements.forEach(function (el) {
            el.style.opacity = '1';
        });
    }

})();
