
(function () {
    'use strict';

  angular.module('ShoppingList', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .controller('AddtoList',AddtoList)
  .service('ShoppingListService',ShoppingListService);

  function ShoppingListService() {
    var service = this ;

    var addItems = [
      {
        name: "Noodles",
        quantity: "20"
      },
      {
        name: "Bounty",
        quantity: "10"
      },
      {
        name: "Eggs",
        quantity: "20"
      },
      {
        name: "Cookies",
        quantity: "10"
      },
      {
        name: "Cheese",
        quantity: "30"
      },
      {
        name: "Onions",
        quantity: "20"
      }
    ];
    var alreadyItems = [];
    service.getaddItems = function functionName() {
      return addItems ;
    }

    service.getAlreadyItems = function functionName() {
      return alreadyItems ;
    }

    service.buyItem = function (itemIndex) {
      
      var item = addItems[itemIndex];
      alreadyItems.push(item);
      addItems.splice(itemIndex,1);
    }
  }

  AddtoList.$inject = ['ShoppingListService'];
  function AddtoList(ShoppingListService) {
  var insert = this ;
}

  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
  var toBuy = this;
  toBuy.items = ShoppingListService.getaddItems();
  toBuy.buyItem = function(itemIndex) {
  ShoppingListService.buyItem(itemIndex);
  }

  toBuy.errorMessage = function () {
    if(toBuy.items.length > 0)
      return false ;
    return true ;
  }

}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
  var already = this ;

  already.items=ShoppingListService.getAlreadyItems();

  already.errorMessage = function () {
    if(already.items.length > 0)
      return false ;

    return true ;
  }
}

    })();