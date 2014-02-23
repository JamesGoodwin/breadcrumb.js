describe("Breadcrumb", function () {

    var breadcrumb;

    beforeEach(function () {
        breadcrumb = new Breadcrumb();
    });

    it("should be able list the current Page", function() {
        breadcrumb.add("http://www.google.com");
        expect(breadcrumb.getCurrentPage()).toEqual("http://www.google.com");
    });

    it("should be able to list the previous Page", function() {
        breadcrumb.add("http://www.google.com");
        breadcrumb.add("http://www.rightmove.co.uk");
        expect(breadcrumb.getPreviousPage()).toEqual("http://www.google.com")
    });

    it("should be able to list the last Page of a given type", function() {

    });

    it("should be able to list all Pages visited", function(){
        breadcrumb.add("http://www.google.com");
        breadcrumb.add("http://www.rightmove.co.uk");
        expect(breadcrumb.getPages().length).toEqual(2);
    });

});