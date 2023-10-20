const article = document.querySelector("article");
// `document.querySelector` may return null if the selector doesn't match anything.

if (article) {
    const text = article.textContent;
    console.log('heelooo')
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    
    const currentUrl = window.location.href;
    console.log('Here is the URL2: ', currentUrl);

    const websiteHeader = document.getElementById('#websiteHeader');
    const h1 = document.querySelector('h1');
    console.log('this is your h1: ', h1)
    console.log('websiteheader: ', websiteHeader);
    console.log('websiteheader2: ', websiteHeader);
    websiteHeader.innerHTML = currentUrl;






    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;
  
    // Support for API reference docs
    const heading = article.querySelector("h1");
    // Support for article docs with date
    const date = article.querySelector("time")?.parentNode;
  
    (date ?? heading).insertAdjacentElement("afterend", badge);
  }


// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }