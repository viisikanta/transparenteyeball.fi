// ========== NAV SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ========== MOBILE NAV ==========
function toggleMobileNav() {
  document.getElementById('mobileNav').classList.toggle('active');
}

// ========== INTERSECTION OBSERVER FOR FADE-INS ==========
const observerOpts = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, observerOpts);
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ========== TOAST ==========
function showToast(text) {
  const t = document.getElementById('toast');
  if (!t) return;
  document.getElementById('toastText').textContent = text;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ========== CONTACT FORM (Formspree) ==========
function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelectorAll('input')[1].value;
  const company = form.querySelectorAll('input')[2].value;
  const message = form.querySelector('textarea').value;

  fetch('https://formspree.io/f/mnjgvqed', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, company, message, _subject: 'New inquiry from Transparent Eyeball website' })
  })
  .then(response => {
    if (response.ok) {
      showToast('Message sent successfully!');
      form.reset();
    } else {
      // Fallback to mailto if Formspree not configured yet
      const subject = encodeURIComponent('New inquiry from Transparent Eyeball website');
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`);
      window.location.href = `mailto:hello@transparenteyeball.fi?subject=${subject}&body=${body}`;
      showToast('Opening your email client...');
    }
  })
  .catch(() => {
    // Fallback to mailto
    const subject = encodeURIComponent('New inquiry from Transparent Eyeball website');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`);
    window.location.href = `mailto:hello@transparenteyeball.fi?subject=${subject}&body=${body}`;
    showToast('Opening your email client...');
  });
}
