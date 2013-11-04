App.Router.map(function () {
    this.resource('animals', function () {
        this.route('new')
    }),

    this.resource("animalsList", { path: "animals/list"}),
    this.resource("animal", { path: "animals/:animal_id"})
});
