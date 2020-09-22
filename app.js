

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

var collectionobj = new PlayerCollection();// collection object is created

// collectionobj.add([player1, player2])
// collectionobj.add(player2)
// collectionobj.unshift([player1,player2])
// collectionobj.unshift(player2)

// collectionobj.push([player2,player1])
// collectionobj.push(player1)

collectionobj.add([player1,player2])
collectionobj.add(player3,{at:1})
console.log(collectionobj.toJSON())
var ProjectView = Backbone.View.extend({
    initialize: function(){
        this.render()
    },
    render: function(){
        console.log('Testing')
    }
})