describe("Breadcrumb", function () {

    var breadcrumb, sessionStorage = new SessionStorage();
    var google = "http://www.google.com";
    var rightmove = "http://www.rightmove.co.uk";

    beforeEach(function () {
        sessionStorage.clear();
        breadcrumb = new Breadcrumb(sessionStorage);
    });

    it("should be able get the current Page", function () {
        breadcrumb.add(google);
        expect(breadcrumb.getCurrentPage()).toEqual(google);
    });

    it("should be able to get the previous Page", function () {
        breadcrumb.add(google);
        breadcrumb.add(rightmove);
        expect(breadcrumb.getPreviousPage()).toEqual(google)
    });

    it("should be able to get all Pages visited", function () {
        breadcrumb.add(google);
        breadcrumb.add(rightmove);
        var pages = breadcrumb.getHistory();
        expect(pages.length).toEqual(2);
        expect(pages[0]).toEqual(google);
        expect(pages[1]).toEqual(rightmove);
    });

});