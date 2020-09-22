

var Player = Backbone.Model.extend(); //model is defined

var player1 = new Player({
    name: 'Dan',
    team: 'Florida B' ,
    no: '1'
})
var player2 = new Player({
    name: 'Sarah',
    team: 'Florida A',
    no: '2'
})
var player3 = new Player({
    name: 'Stone',
    team: 'Florida G',
    no: '3'
})

var PlayerCollection = Backbone.Collection.extend({
    model: Player//assinging a model
})

var objCollection= new PlayerCollection([player3,player2,player1])

var ProjectView = Backbone.View.extend({
    el: "#content",
    template: _.template($('#tmpl-first').html()),
    collection: objCollection,
    initialize: function(){
        this.render()
    },
    render: function(){
        this.$el.html(this.template({
            collection:this.collection.toJSON()
        }))






        // console.log(this.collection)
        // _.each(this.collection.toJSON(),function(model){
        //     console.log(model.name)
        // })
    }
})

var mview = new ProjectView()