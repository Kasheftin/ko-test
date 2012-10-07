require.config({
    paths: {
        "jquery": "/lib/jquery/dist/jquery.min",
        "bootstrap": "/lib/bootstrap/docs/assets/js/bootstrap.min",
        "knockout": "/lib/knockout/build/output/knockout-latest",
        "text": "/lib/text/text"
    },
    shim: {
        "bootstrap": ["jquery"]
    }
});


require(["knockout","state","stringTemplateEngine"], function(ko,State) {
	var sm = new State("app",function(state) {
		ko.applyBindings(state);
	});
});