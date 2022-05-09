function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  /* Linha Alvo */
  const targetLine = scrollY + innerHeight / 2;

  /* Verificar se a seção passou da linha */
  /* Quais dados eu preciso? */

  /* topo da seção */
  const sectionTop = section.offsetTop;
  /* altura da seção */
  const sectionHeight = section.offsetHeight;

  /* O topo da seção chegou ou ultrapassou a linha alvo */
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

  /* Informações de dados e lógica */
  console.log(sectionTopReachOrPassedTargetline);
  /*verificar se a base está abaixo da linha alvo*/
  /*Quais dados eu preciso?*/

  /* Onde a seção termina? */
  const sectionEndsAt = sectionTop + sectionHeight;
  /* O final da seção passou da linha alvo? */
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine;
  console.log(sectionEndPassedTargetline);

  /* limites da seção */
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
}

onScroll();
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

window.addEventListener('scroll', onScroll);

function openMenu() {
  document.body.classList.add('menu-expanded');
}
function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards,
#about,
#about header,
#about .content`);
