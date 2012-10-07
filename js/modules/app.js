define(["jquery","knockout","state"],function($,ko,State) {
	return function() {
		var app = this;
		this.menu = new State("menu",function(state) {
			state.setVar("app",app);
		});
		this.currentState = ko.observable(null);
	}
});
