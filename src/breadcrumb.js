function Breadcrumb(persister) {
    this.persister = persister;
}

Breadcrumb.prototype.add = function (page) {
    var pages = this.getHistory();
    pages.push(page);
    this.saveHistory(pages);
};

Breadcrumb.prototype.getCurrentPage = function () {
    var pages = this.getHistory();
    return pages.length > 0 ? pages[pages.length - 1] : null;
};

Breadcrumb.prototype.getPreviousPage = function () {
    var pages = this.getHistory();
    return pages.length > 1 ? pages[pages.length - 2] : null;
};

Breadcrumb.prototype.getHistory = function () {
    var history = this.persister.load('BREADCRUMB_HISTORY');
    return history != null ? JSON.parse(history) : [];
};

Breadcrumb.prototype.saveHistory = function (pages) {
    this.persister.save('BREADCRUMB_HISTORY', JSON.stringify(pages));
};

Breadcrumb.prototype.toString = function () {
    var toString = "";
    var history = this.getHistory();
    for (var i = 0; i < history.length; i++) {
        toString += history[i];
        if (i < history.length - 1) {
            toString += ' -> ';
        }
    }
    return toString;
};
