// ui-polish.js — restrained heading line mask entrance and shared UI enhancements

export function initHeadingMasks() {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isStatic = document.body.classList.contains('static-mode') || document.body.classList.contains('motion-off');

  const headings = document.querySelectorAll('.masked-heading');
  if (!headings.length) return;

  if (isReduced || isStatic) {
    headings.forEach(h => h.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  headings.forEach(h => {
    // Avoid double observing or clashing with existing controllers
    if (!h.closest('#voices') && !h.closest('.inside-copy')) {
      observer.observe(h);
    }
  });
}

export function initDetailsAccordion() {
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isStatic = document.body.classList.contains('static-mode') || document.body.classList.contains('motion-off');
  if (isReduced || isStatic) return;

  const allDetails = document.querySelectorAll('details');
  allDetails.forEach(details => {
    const summary = details.querySelector('summary');
    if (!summary) return;

    let animation = null;
    let isClosing = false;
    let isExpanding = false;

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      if (isClosing || !details.open) {
        // Open
        if (isClosing && animation) animation.cancel();
        isClosing = false;
        isExpanding = true;

        const startHeight = `${details.offsetHeight}px`;
        details.open = true;
        const endHeight = `${details.scrollHeight}px`;

        animation = details.animate({
          height: [startHeight, endHeight]
        }, {
          duration: 320,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
        });

        animation.onfinish = () => {
          isExpanding = false;
          details.style.height = '';
        };
      } else if (isExpanding || details.open) {
        // Close
        if (isExpanding && animation) animation.cancel();
        isExpanding = false;
        isClosing = true;

        const startHeight = `${details.scrollHeight}px`;
        const endHeight = `${summary.offsetHeight}px`;

        animation = details.animate({
          height: [startHeight, endHeight]
        }, {
          duration: 260,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
        });

        animation.onfinish = () => {
          details.open = false;
          isClosing = false;
          details.style.height = '';
        };
      }
    });
  });
}

function initAll() {
  initHeadingMasks();
  initDetailsAccordion();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll, { once: true });
} else {
  initAll();
}
