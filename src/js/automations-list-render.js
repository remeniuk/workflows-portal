// Render automation cards dynamically and filter by sidebar filters
(function() {
  const grid = document.getElementById('templatesGrid');
  const navItems = Array.from(document.querySelectorAll('.side-nav-item'));
  const planPills = Array.from(document.querySelectorAll('#planPills .pill-btn'));
  const availabilityPills = Array.from(document.querySelectorAll('#availabilityPills .pill-btn'));

  let selectedType = 'All';
  let selectedPlan = 'All';
  let selectedAvailability = 'All';

  function renderCards() {
    if (!window.automationsList) return;
    const type = selectedType;
    const plan = selectedPlan;
    const availability = selectedAvailability;
    const filtered = window.automationsList.filter(card => {
      const planMatch = !plan || plan === 'All' || card.plan === plan;
      const availabilityMatch = !availability || availability === 'All' || card.availability === availability;
      const typeMatch = !type || type === 'All' ? true : card.type === type;
      return planMatch && availabilityMatch && typeMatch;
    });
    grid.innerHTML = filtered.length ? filtered.map(card => cardHtml(card)).join('') : '<div style="padding:2rem;">No workflows found for selected filters.</div>';
  }

  function cardHtml(card) {
    const showPlan = card.plan && card.plan !== 'Starter';
    const showAvailability = card.availability && card.availability !== 'Generally Available';
    return `
      <a href="${card.link}" class="template-card workflow-card">
        <div class="card-header-row">
          <div class="card-icons">
            ${card.icons.map(icon => `<div class="app-icon ${icon.color}"><img src="${icon.src}" alt=""></div>`).join('')}
          </div>
          <div class="card-tags">
            ${showPlan ? `<span class="card-tag plan-tag" data-plan="${card.plan}">${card.plan}</span>` : ''}
            ${showAvailability ? `<span class="card-tag availability-tag" data-availability="${card.availability}">${card.availability}</span>` : ''}
          </div>
        </div>
        <div class="card-content">
          <h3>${card.title}</h3>
          <p>${card.description}</p>
        </div>
      </a>
    `;
  }

  planPills.forEach(btn => {
    btn.addEventListener('click', function() {
        planPills.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        selectedPlan = btn.getAttribute('data-value');
      renderCards();
    });
  });

  availabilityPills.forEach(btn => {
    btn.addEventListener('click', function() {
        availabilityPills.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        selectedAvailability = btn.getAttribute('data-value');
      renderCards();
    });
  });

  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      selectedType = this.getAttribute('data-type');
      renderCards();
    });
  });

  // Initial render
  renderCards();
})(); 