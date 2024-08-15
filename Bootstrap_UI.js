document.getElementById('rightarrow').addEventListener('click', () => {
    document.querySelector('.scrolable_image').scrollBy({
      left: 1250,
      behavior: 'smooth'
    });
  });

  document.getElementById('leftarrow').addEventListener('click', () => {
    document.querySelector('.scrolable_image').scrollBy({
      left: -1250,
      behavior: 'smooth'
    });
  });