
var Player = Backbone.Model.extend({
    defaults:{
    name:"Sanjay Kumar",
 team:"India",
 no:10
 }
 }); 

var player1 = new Player({
        name: 'Sarah',
        team: 'Florida',
        no: 2
})

var player2 = new Player({
    name: 'Stone',
    team: 'Florida',
    no: 3
})

var player3 = new Player({
    name: 'Emmitt',
    team: 'Florida',
    no: 4
})

var View = Backbone.View.extend({
    el: "#content",
    model:player2,
    template: Handlebars.compiler($("#tmpl-handlerbar").html()),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template({
     data: PlayerObject.toJSON()
  }));
    }
});

new View()