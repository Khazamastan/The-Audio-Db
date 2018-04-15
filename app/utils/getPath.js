module.exports = {
    getCurrentPath : () => {
        const path = window.location.pathname.split('/')[1].toLowerCase();
        return path;
    }
}