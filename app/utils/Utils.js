function getQueryParameters(str) {
    str = str || window.location.search;
    if (str.charAt(0) == '?') {
        str = str.substr(1);
    }
    return (str).replace(/(^\?)/, '').split("&").map(function (n) {
        return n = n.split("="), this[n[0]] = n[1], this
    }.bind({}))[0];
}
export default {
    getQueryParameters
};