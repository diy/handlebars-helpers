/**
 * Replaces line breaks with paragraphs
 *
 * @param {string} str
 */
module.exports = function paragraphify (str) {
    return '<p>' + str
        .replace(/^\s\s/, '')
        .replace(/\s*\s$/, '')
        .replace(/(\r?\n)+/, '</p><p>') + '</p>';
};
