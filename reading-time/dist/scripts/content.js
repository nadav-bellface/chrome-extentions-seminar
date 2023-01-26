var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var article = document.querySelector('article');
if (article !== null) {
    var text = article.textContent;
    var wordMatchRegExp = /[^\s]+/g; // Regular expression
    var words = text.matchAll(wordMatchRegExp); // matchAll returns an iterator, convert to array to get word count
    var wordCount = __spreadArray([], __read(words), false).length;
    var readingTime = Math.round(wordCount / 200);
    var badge = document.createElement('p');
    badge.classList.add('color-secondary-text', 'type--caption'); // Use the same styling as the publish information in an article's header
    badge.textContent = "\u23F1\uFE0F ".concat(readingTime, " min read");
    // Support for API reference docs
    var heading = article.querySelector('h1');
    if (heading !== null) {
        heading.insertAdjacentElement('afterend', badge);
    }
}
//# sourceMappingURL=content.js.map