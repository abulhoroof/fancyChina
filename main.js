let suppliers = [];
const filterBar = document.getElementById('filterBar');
const linkGrid = document.getElementById('linkGrid');
let activeTag = 'all';

async function loadSuppliers() {
  try {
    const response = await fetch('/suppliers.json');
    suppliers = await response.json();
    renderTags();
    render();
  } catch (error) {
    console.error('Error loading suppliers:', error);
    linkGrid.innerHTML = '<p style="text-align: center; color: red;">Error loading suppliers. Please try again later.</p>';
  }
}

function renderTags() {
  const tags = [...new Set(suppliers.flatMap(s => s.tags))];
  filterBar.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.textContent = 'All';
  allBtn.className = 'filter-btn active';
  allBtn.onclick = () => { activeTag = 'all'; render(); };
  filterBar.appendChild(allBtn);

  tags.forEach(tag => {
    const btn = document.createElement('button');
    btn.textContent = `#${tag}`;
    btn.className = 'filter-btn';
    btn.onclick = () => {
      activeTag = tag;
      render();
    };
    filterBar.appendChild(btn);
  });
}

function render() {
  [...filterBar.children].forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase().includes(activeTag));
  });

  linkGrid.innerHTML = '';
  const filtered = activeTag === 'all' ? suppliers : suppliers.filter(s => s.tags.includes(activeTag));
  filtered.forEach(s => {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Create image element with error handling
    const img = document.createElement('img');
    img.src = s.image;
    img.alt = s.title;
    img.onerror = function() {
      this.src = 'https://via.placeholder.com/300x200?text=No+Image';
      this.style.objectFit = 'contain';
    };

    card.innerHTML = `
      <div class="card-body">
        <div class="card-title">${s.title}</div>
        <div class="card-desc">${s.desc}</div>
        <div class="tags">${s.tags.map(t => `#${t}`).join(' ')}</div>
        <a href="${s.url}" target="_blank">Visit Store</a>
      </div>
    `;
    card.insertBefore(img, card.firstChild);
    linkGrid.appendChild(card);
  });
}

// Load suppliers when the page loads
loadSuppliers(); 