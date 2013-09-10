module.exports = function urlify (string) {
    if (!string) return '';
    return string.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
};
