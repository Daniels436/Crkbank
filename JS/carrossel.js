const gallery = document.querySelector('.box-r');
let isHovering = false;

gallery.addEventListener('mouseenter', () => {
  isHovering = true;
});

gallery.addEventListener('mouseleave', () => {
  isHovering = false;
});

gallery.addEventListener('mousemove', (event) => {
  if (isHovering) {
    const galleryWidth = gallery.offsetWidth;
    const offsetX = event.clientX - gallery.getBoundingClientRect().left;
    const scrollOffset = (offsetX / galleryWidth) * (gallery.scrollWidth - galleryWidth);
    gallery.scrollLeft = scrollOffset;
  }
});