const projects = document.querySelectorAll('.project');
const wrapper = document.querySelector('.scroll-wrapper');

function updateActiveProject() {
  const center = wrapper.scrollLeft + wrapper.offsetWidth / 2;

  projects.forEach(project => {
    const rect = project.offsetLeft + project.offsetWidth / 2;

    if (Math.abs(center - rect) < project.offsetWidth / 2) {
      project.classList.add('active');
    } else {
      project.classList.remove('active');
    }
  });
}

wrapper.addEventListener('scroll', updateActiveProject);
window.addEventListener('load', updateActiveProject);
