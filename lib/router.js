Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate : '404'
});


Router.route("/",{
  name: "homeIndex",
  data: function(){
    return {
      message: "hello"
    }
  }

});
//
// Router.route("/about",{
//   name : "homeAbout"
// });
//
// Router.route("/contact",{
//   name : "homeContact"
// })
//
// Router.route("/products/:name",{
//   name : "productsShow", //name of the template to pass
//   data : function(){
//     var nameE = this.params.name ;
//     return Products.findOne({name : nameE});
//
//   }
// })
