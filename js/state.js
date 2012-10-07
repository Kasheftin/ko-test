define(["knockout","text"],function(ko) {
	return function(file,callback) {
		var s = this;
		s.callback = callback;
		s.data = ko.observable(null);
		s.html = ko.observable(null);
		require(["/js/modules/" + file + ".js","text!/js/templates/" + file + ".html"],function(Module,html) {
			s.data(typeof Module === "function" ? new Module(s) : Module);
			s.html(html);
			if (s.callback && typeof s.callback === "function")
				s.callback(s);
			if (s.data().callback && typeof s.data().callback == "function")
				s.data().callback(s);
		});
		s.setVar = function(i,v) {
			var data = s.data();
			data[i] = v;
			s.data(data);
		}


/*
		s.loaded = false;
		s.activate = function() {
			if (!s.loaded) {
				require(["/js/modules/" + s.file + ".js","text!/js/templates/" + s.file + ".html"],function(Module, html) {
					s.data(typeof Module === "function" ? new Module() : Module);
					s.html(html);
					s.loaded = true;
					if (s.callback && $.isFunction(s.callback))
						s.callback(s);
				});
			}
		}
		s.activate();
*/
	}
});