function SessionStorage() {

}

SessionStorage.prototype.load = function(key) {
    return window.sessionStorage.getItem(key);
};

SessionStorage.prototype.save = function(key, value) {
    window.sessionStorage.setItem(key, value);
};

SessionStorage.prototype.clear = function() {
    window.sessionStorage.clear();
};
