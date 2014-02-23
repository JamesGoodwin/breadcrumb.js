function Breadcrumb() {

}

Breadcrumb.prototype.add = function(page) {

    //load from session storage

    if(!this.pages) this.pages = [];

    this.pages.push(page);

    if(this.currentPage) {
        this.previousPage = this.currentPage;
    }

    this.currentPage = page;

    //save to session storage
};

Breadcrumb.prototype.getCurrentPage = function() {
    return this.currentPage;
};

Breadcrumb.prototype.getPreviousPage = function() {
    return this.previousPage;
};

Breadcrumb.prototype.getPages = function() {
    return this.pages;
};
