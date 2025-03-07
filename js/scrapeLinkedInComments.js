const puppeteer = require('puppeteer');

async function scrapeLinkedInComments() {
  // Lancer le navigateur
  const browser = await puppeteer.launch({ headless: false }); // headless: false pour voir le navigateur
  const page = await browser.newPage();

  // URL de ta page LinkedIn
  const linkedInURL = 'https://www.linkedin.com/feed/'; // C'est la page d'accueil du fil d'actualités de LinkedIn

  // Remplir les identifiants de connexion (remplace par ton email et ton mot de passe)
  const email = 'thomaspenabermond@gmail.com@exemple.com'; // Remplace avec ton adresse LinkedIn
  const password = 'Thom@$140206.'; // Remplace avec ton mot de passe LinkedIn

  // Se connecter à LinkedIn
  await page.goto('https://www.linkedin.com/login');
  await page.type('input[name="session_key"]', email); // Rentrer l'email
  await page.type('input[name="session_password"]', password); // Rentrer le mot de passe
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Aller à ta page d'accueil (le feed des posts)
  await page.goto(linkedInURL, { waitUntil: 'domcontentloaded' });

  // Attendre que la page des posts soit chargée
  await page.waitForSelector('.feed-shared-update-v2'); // C'est le sélecteur des posts LinkedIn, à vérifier

  // Extraire les commentaires d'un post
  const comments = await page.evaluate(() => {
    let commentsArray = [];
    // Chercher les commentaires dans la section des posts
    const postElements = document.querySelectorAll('.feed-shared-update-v2'); // Sélecteur de post

    postElements.forEach(post => {
      // Trouver les commentaires sous chaque post
      const commentElements = post.querySelectorAll('.comments-comments-list .comments-comment-item'); // Sélecteur de commentaires

      commentElements.forEach(comment => {
        // Ajouter le texte du commentaire dans le tableau
        commentsArray.push(comment.innerText);
      });
    });

    return commentsArray;
  });

  // Afficher les commentaires extraits
  console.log(comments);

  // Fermer le navigateur
  await browser.close();
}

scrapeLinkedInComments();
