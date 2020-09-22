
            var MyModel = Backbone.Model.extend();

            var mymodel = new MyModel({
                name: 'Dan',
                team: 'Gators',
                age: 44
            });

            var mymodelObj2 = mymodel.clone()

            var MyView = Backbone.View.extend({
                model: mymodelObj2,
                initialize: function(){
                    this.render()
                },
                render: function() {
                    mymodelObj2.set({
                        team: 'Florida',
                        age:11
                    })
                    if(mymodelObj2.hasChanged()){
                        console.log(mymodelObj2.previous('team'))
                        console.log(mymodelObj2.previousAttributes())
                        console.log(mymodelObj2.changedAttributes())
                    } else{
                        console.log("value not changed")
                    }
                    // console.log(this.model.toJSON())
                    // console.log('One line is working')
                }
            })

            var myViewObj = new MyView()
