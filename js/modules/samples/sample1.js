define(["knockout"],function(ko) {
	// Here's my data model
	var ViewModel = function(first, last) {
		var vm = this;
	    this.firstName = ko.observable(first);
	    this.lastName = ko.observable(last);
	    this.fullName = ko.computed(function() {
	        // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
	        return this.firstName() + " " + this.lastName();
	    }, this);
	};

	var PredefinedViewModel = function() {
		return new ViewModel("Planet","Earth");
	}
	return PredefinedViewModel;
});