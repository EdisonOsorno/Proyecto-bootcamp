document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('img').style.transform = 'scale(1.2)';
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('img').style.transform = 'scale(1)';
  });
});