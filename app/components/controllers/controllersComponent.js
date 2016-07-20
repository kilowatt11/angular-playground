;(function () {
  angular.module('angularPlayground')
    .component('controllersComponent', {
      controller: ControllersController,
      templateUrl: '/app/components/controllers/controllers.html'
    })

  function ControllersController () {
    var person = this;
    
   person.controllersStatus = 'Working'
    person.friends =  ['Joey', 'Chandler', 'Monica', 'Phebes', 'Ross & Rachel'];
    person.addFriend =  function(friend){
      person.friends.push(friend);
      person.friend = '';
    
    }
  }
}())
