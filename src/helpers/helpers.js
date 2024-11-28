/**
 * Truncate a string to a specified length and append an ellipsis ("...") if the string exceeds that length.
 *
 * @param {string} text - The string to truncate.
 * @param {number} length - The maximum length of the truncated string.
 * @returns {string} - The truncated string.
 */
export function truncate(text, length) {
    if (!text || typeof text !== "string") return "";
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  }
