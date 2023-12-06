export function toPascalCase(str) {
  // Replace spaces, hyphens, or underscores with an empty string

  // Capitalize the first letter of each word
  return str.replace(/(\w)(\w*)/g, (match, firstLetter, restOfWord) => {
    return firstLetter.toUpperCase() + restOfWord.toLowerCase();
  });
}
