define(["knockout"],function(ko) {
	var viewModel = {
	    stringValue : ko.observable("Hello"),
	    passwordValue : ko.observable("mypass"),
	    booleanValue : ko.observable(true),
	    optionValues : ["Alpha", "Beta", "Gamma"],
	    selectedOptionValue : ko.observable("Gamma"),
	    multipleSelectedOptionValues : ko.observable(["Alpha"]),
	    radioSelectedOptionValue : ko.observable("Beta")
	};
	return viewModel;
});