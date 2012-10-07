define(["knockout"],function(ko) {
    // Define a "Person" class that tracks its own name and children, and has a method to add a new child
    var Person = function(name, children) {
        this.name = name;
        this.children = ko.observableArray(children);
     
        this.addChild = function() {
            this.children.push("New child");
        }.bind(this);
    }
     
    // The view model is an abstract description of the state of the UI, but without any knowledge of the UI technology (HTML)
    var viewModel = {
        people: [
            new Person("Annabelle", ["Arnie", "Anders", "Apple"]),
            new Person("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
            new Person("Charles", ["Cayenne", "Cleopatra"])
            ],
        showRenderTimes: ko.observable(false)
    };
    return viewModel;
});