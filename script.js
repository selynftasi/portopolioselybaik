function showTab(tabId, event) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');
  
    contents.forEach(c => c.style.display = 'none');
    buttons.forEach(b => b.classList.remove('active'));
  
    document.getElementById(tabId).style.display = 'block';
    event.target.classList.add('active');
  }  