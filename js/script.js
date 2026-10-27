/* DRAME FAMILIALE LOCATION — script principal */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- En-tête : fond au scroll ---------- */
  var entete = document.querySelector('.entete');
  function surScroll() {
    if (!entete) return;
    if (window.scrollY > 40) entete.classList.add('scroll');
    else entete.classList.remove('scroll');
  }
  window.addEventListener('scroll', surScroll);
  surScroll();

  /* ---------- Menu mobile ---------- */
  var burger = document.querySelector('.menu-burger');
  var nav = document.querySelector('.nav-principale');
  var navListe = nav ? nav.querySelector('ul') : null;
  var navTel = nav ? nav.querySelector('.nav-tel') : null;

  function fermerMenu() {
    if (!nav) return;
    nav.classList.remove('ouvert');
    if (navListe) navListe.classList.remove('ouvert');
    if (navTel) navTel.classList.remove('ouvert');
    if (burger) { burger.classList.remove('actif'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Ouvrir le menu'); }
    document.body.classList.remove('menu-ouvert');
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      var ouvert = !nav.classList.contains('ouvert');
      nav.classList.toggle('ouvert', ouvert);
      if (navListe) navListe.classList.toggle('ouvert', ouvert);
      if (navTel) navTel.classList.toggle('ouvert', ouvert);
      burger.classList.toggle('actif', ouvert);
      burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
      burger.setAttribute('aria-label', ouvert ? 'Fermer le menu' : 'Ouvrir le menu');
      document.body.classList.toggle('menu-ouvert', ouvert);
    });
    nav.querySelectorAll('a').forEach(function (lien) {
      lien.addEventListener('click', fermerMenu);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fermerMenu(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 860) fermerMenu(); });
  }

  /* ---------- Révélation au scroll ---------- */
  var elementsReveal = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && elementsReveal.length) {
    var observateur = new IntersectionObserver(function (entrees) {
      entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
          entree.target.classList.add('visible');
          observateur.unobserve(entree.target);
        }
      });
    }, { threshold: 0.15 });
    elementsReveal.forEach(function (el) { observateur.observe(el); });
  } else {
    elementsReveal.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Lightbox galerie (effet zoom) ---------- */
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    var lightboxLegende = lightbox.querySelector('.lightbox-legende');
    var fermer = lightbox.querySelector('.lightbox-fermer');

    document.querySelectorAll('[data-zoom]').forEach(function (item) {
      item.addEventListener('click', function () {
        var img = item.querySelector('img');
        var legende = item.getAttribute('data-legende') || '';
        if (img && lightboxImg) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
        }
        if (lightboxLegende) lightboxLegende.textContent = legende;
        lightbox.classList.add('actif');
        document.body.style.overflow = 'hidden';
      });
    });

    function fermerLightbox() {
      lightbox.classList.remove('actif');
      document.body.style.overflow = '';
    }
    if (fermer) fermer.addEventListener('click', fermerLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) fermerLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') fermerLightbox();
    });
  }

  /* ---------- Formulaire de contact ---------- */
  var formulaire = document.querySelector('#formulaire-contact');
  if (formulaire) {
    formulaire.addEventListener('submit', function (e) {
      e.preventDefault();
      var nom = formulaire.querySelector('#nom').value.trim();
      var telephone = formulaire.querySelector('#telephone').value.trim();
      var message = formulaire.querySelector('#message').value.trim();

      var texte = 'Bonjour DRAME FAMILIALE LOCATION,%0A%0A' +
        'Nom : ' + nom + '%0A' +
        'Téléphone : ' + telephone + '%0A' +
        'Message : ' + message;

      var msg = formulaire.querySelector('.msg-envoi');
      if (msg) {
        msg.textContent = 'Merci ! Votre message est prêt — nous l\'ouvrons sur WhatsApp pour vous répondre au plus vite.';
        msg.classList.add('ok');
      }

      window.open('https://wa.me/221787574117?text=' + texte, '_blank');
      formulaire.reset();
    });
  }

  /* ---------- Année automatique dans le pied de page ---------- */
  document.querySelectorAll('.annee-auto').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

});
