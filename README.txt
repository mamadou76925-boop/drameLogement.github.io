==================================================================
 DRAME FAMILIALE LOCATION — Site internet officiel
 Entreprise immobilière — HLM Grand Yoff, côté Cité Bignona, Dakar, Sénégal
 Téléphone : +221 78 757 41 17
==================================================================

CONTENU DU PROJET
------------------
DRAME-FAMILIALE-LOCATION/
├── index.html            Page d'accueil (héros, présentation, aperçu appartements, avis)
├── apropos.html           Présentation de l'entreprise
├── appartements.html      Liste des appartements avec prix, disponibilité et description
├── galerie.html            Galerie photo professionnelle avec effet zoom (lightbox)
├── contact.html            Formulaire de contact + carte Google Maps + coordonnées
├── confidentialite.html   Politique de confidentialité (loi sénégalaise 2008-12)
├── mentions-legales.html  Mentions légales (champs [À COMPLÉTER])
├── conditions.html        Conditions de location
├── css/
│   └── style.css           Feuille de style complète (design, couleurs, responsive)
├── js/
│   └── script.js            Menu mobile, animations au scroll, galerie zoom, formulaire
├── images/                  Bannière de l'immeuble (JPG + WebP) et vos futures photos
├── logo/
│   ├── favicon.svg          Favicon du site (icône d'onglet)
│   ├── logo-icone.svg       Icône du logo (en-tête et pied de page)
│   ├── logo.svg              Logo complet horizontal
│   └── propositions/        Autres idées de logo (B et C)
├── icones/                  Dossier réservé pour icônes additionnelles
└── README.txt               Ce fichier

COMMENT PUBLIER LE SITE
------------------------
Ce site est 100% statique (HTML / CSS / JS) : il ne nécessite aucune base de
données ni serveur spécial. Vous pouvez le mettre en ligne de plusieurs façons :

1) HÉBERGEMENT GRATUIT ET RAPIDE
   - Netlify (netlify.com) : glissez-déposez le dossier DRAME-FAMILIALE-LOCATION
   - Vercel (vercel.com)
   - GitHub Pages (pages.github.com)

2) HÉBERGEMENT CLASSIQUE (OVH, Hostinger, etc.)
   - Connectez-vous en FTP à votre hébergement
   - Copiez tout le contenu du dossier DRAME-FAMILIALE-LOCATION à la racine
     (généralement le dossier "www" ou "public_html")
   - Le site sera accessible via votre nom de domaine (ex: www.dramefamiliale.sn)

3) NOM DE DOMAINE
   Pensez à réserver un nom de domaine correspondant à votre marque, par
   exemple : dramefamilialelocation.sn ou dramefamiliale.com

PERSONNALISATION
------------------
• COULEURS : modifiables en haut du fichier css/style.css, dans la section
  ":root" (--vert-900, --or, --creme, etc.)

• TÉLÉPHONE / WHATSAPP : le numéro +221 78 757 41 17 est utilisé dans tout
  le site (bouton WhatsApp flottant, formulaire de contact, pied de page,
  en-tête). Pour le changer, faites une recherche globale de
  "221787574117" dans tous les fichiers .html et js/script.js et
  remplacez par votre numéro (format international, sans le "+" ni espaces
  pour les liens wa.me / tel:).

• PHOTOS : les images utilisées proviennent de banques de photos libres de
  droits (Unsplash — licence Unsplash ; Wikimedia Commons — Creative
  Commons). Pour un résultat encore plus personnalisé, nous vous
  recommandons de remplacer ces images par de vraies photos de votre
  immeuble et de vos appartements à HLM Grand Yoff : placez-les dans le
  dossier "images/" puis mettez à jour les balises <img src="..."> dans
  les fichiers HTML.

• CARTE GOOGLE MAPS : dans contact.html, la carte utilise une recherche
  générique "HLM Grand Yoff, Dakar". Pour une précision exacte, remplacez
  le lien de l'iframe par l'URL d'intégration générée depuis Google Maps
  (Partager > Intégrer une carte) une fois votre immeuble localisé
  précisément sur la carte.

• RÉSEAUX SOCIAUX : les liens Facebook, Instagram et TikTok dans le pied
  de page pointent par défaut vers les pages d'accueil de ces plateformes.
  Remplacez-les par les liens réels de vos comptes dès qu'ils seront créés.


À FAIRE AVANT LA PUBLICATION
-----------------------------
1) Pages légales : remplacez tous les textes marqués [À COMPLÉTER]
   (NINEA, RCCM, responsable, hébergeur, email, durée de conservation,
   préavis) dans mentions-legales.html, confidentialite.html et
   conditions.html. Faites relire ces pages par un juriste.
2) Conditions de location : caution (2 mois), avance (1 mois), pièces
   demandées et modes de paiement (espèces, Wave, Orange Money) sont des
   EXEMPLES. Adaptez-les dans appartements.html (section #conditions) et
   conditions.html.
3) Prix : les loyers en FCFA dans appartements.html et index.html sont des
   exemples à remplacer par vos vrais tarifs.
4) Image de partage (Open Graph) : dans le <head> de chaque page, remplacez
   la valeur de og:image par l'adresse complète d'une de vos photos une fois
   le site en ligne (ex : https://votre-domaine.sn/images/immeuble-banniere.jpg).
5) Données structurées (SEO local) : dans index.html, ajoutez "url" et,
   si possible, les coordonnées GPS ("geo") de l'immeuble.

BANNIÈRE DE COOKIES
--------------------
Aucun outil de suivi (Google Analytics, Facebook Pixel, etc.) n'est utilisé :
une bannière de consentement n'est donc pas nécessaire. Si vous en ajoutez
un plus tard, ajoutez aussi une bannière et mettez à jour la politique de
confidentialité.

FONCTIONNALITÉS INCLUSES
--------------------------
✓ Design moderne : vert foncé / blanc / doré, inspiré des grands sites
  immobiliers internationaux
✓ 100% responsive : ordinateur, tablette, téléphone
✓ Menu de navigation avec menu mobile (burger)
✓ Animations douces à l'arrivée au scroll
✓ Galerie photo avec effet zoom (lightbox plein écran)
✓ Formulaire de contact relié automatiquement à WhatsApp
✓ Bouton WhatsApp flottant sur toutes les pages
✓ Carte Google Maps intégrée
✓ Balises SEO (titres, meta description, mots-clés, Open Graph)
✓ Favicon et logo
✓ Icônes professionnelles en SVG (rapides, nettes sur tous les écrans)
✓ Toutes les pages reliées entre elles via un menu commun
✓ Barre supérieure (téléphone, horaires, WhatsApp) et bouton « Réserver une visite »
✓ Menu mobile plein écran avec boutons Appeler / WhatsApp
✓ Pied de page avec liens légaux, Google Maps et bouton « Retour en haut »
✓ Boutons WhatsApp avec message pré-rempli pour chaque appartement
✓ Chargement différé des images (lazy loading) et bannière en WebP
✓ SEO local (titres, descriptions, Open Graph, données structurées LocalBusiness)
✓ Accessibilité : lien d'évitement, focus visible, boutons tactiles larges

SUPPORT
--------
Pour toute question technique sur la structure du site, conservez ce
dossier complet lors de tout transfert vers un développeur ou un
hébergeur : toutes les pages font référence aux dossiers css/, js/,
images/, logo/ et icones/ à l'aide de chemins relatifs, donc la structure
doit rester identique.

© DRAME FAMILIALE LOCATION — HLM Grand Yoff, côté Cité Bignona, Dakar, Sénégal
