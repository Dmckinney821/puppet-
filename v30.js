
var FModel = Backbone.Model.extend();

var FCollection = Backbone.Collection.extend({
    model: FModel
});

var player1 = new FModel({
    name: 'Dan',
    team: 'Gators',
    no: 1
})
var player2 = new FModel({
    name: 'Sarah',
    team: 'Florida',
    no: 4
})
var player3 = new FModel({
    name: 'Stone',
    team: 'Univ',
    no: 3
})

var fcollection = new FCollection();

fcollection.add([player3,player2,player1]);

var FView = Backbone.View.extend({
    collection: fcollection,
    initialize: function(){
        this.render();
    },
    render: function(){
        _.each(this.collection.toJSON(), function(model) {
            // console.log(model.name+" , "+model.team)
        })
        //_.where
        var playerdata = _.where(this.collection.toJSON(), ({no:1}))
        // console.log(playerdata)

        var playerdata1 = _.findWhere(this.collection.toJSON(), ({no:1}))
        // console.log(playerdata1)

        // var playerData = _.find(this.collection.toJSON(), function(model){
        //     if(model.no > 1){
        //         return model.name
        //     }
        // })

        // var playerData = _.filter(this.collection.toJSON(), function(model){
        //     if(model.no > 1){
        //         return model.name
        //     }
        // })
        // console.log(playerData)

        var playerdata = _.pluck(this.collection.toJSON(), 'team')

        console.log(playerdata)
    }
    
})

new FView();


