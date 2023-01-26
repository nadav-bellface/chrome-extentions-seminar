const article: HTMLElement | null = document.querySelector('article');
if (article !== null) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp); // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement('p');
  badge.classList.add('color-secondary-text', 'type--caption'); // Use the same styling as the publish information in an article's header
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector('h1');
  if (heading !== null) {
    heading.insertAdjacentElement('afterend', badge);
  }
}
