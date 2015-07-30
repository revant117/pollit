//================homeIndex==================

Template.homeIndex.helpers({

  product : function(){
    return Polls.find().fetch() ;

  }

})

//==============================================
