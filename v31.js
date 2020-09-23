var View1 = Backbone.View.extend({
    el:"#content",
    initialize:function(){
     this.render();
    },
    render:function(){
    this.$el.html("This is view 1 running...");
    }
   });
   // view 2
    var View2 = Backbone.View.extend({
    el:"#content",
    initialize:function(){
     this.render();
    },
    render:function(){
    this.$el.html("This is view 2 running...");
    }
   });
   
    // view 3
    var View3 = Backbone.View.extend({
    el:"#content",
    initialize:function(){
     this.render();
    },
    render:function(){
    this.$el.html("This is view 3 running...");
    }
   });

var ProjectRouter = Backbone.Router.extend({
    routes:{
     "":"ShowView1",
     "view2/:id":"ShowView2",
     "view3/:id/:msg":"ShowView3"
    },
    ShowView1:function(){
     var viewObj = new View1();
    },
    ShowView2:function(id){
       console.log(id)
     var view2Obj = new View2();
    },
    ShowView3:function(id,msg){
       console.log("Passed Param: " + id+" and message "+msg)
       var var3Obj = new View3();
    }
    });
    
    var projRouterObj = new ProjectRouter();
    
    Backbone.history.start();