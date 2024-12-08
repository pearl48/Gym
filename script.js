function navigateTo(sectionId) {
  // Select all sections
  const sections = document.querySelectorAll('.section');

  // Hide all sections
  sections.forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('visible');
  });

  // Show the target section
  const targetSection = document.querySelector(sectionId);
  if (targetSection) {
      targetSection.classList.remove('hidden');
      targetSection.classList.add('visible');
  }
}

// Ensure homepage is visible by default
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#home').classList.add('visible');
});
