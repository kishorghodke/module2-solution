(function() {
  'use strict';

 angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController',ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)

ToBuyShoppingController.$inject = ['$scope','ShoppingListCheckOffService'];

function ToBuyShoppingController($scope,ShoppingListCheckOffService)
{

var toBuy=this;
toBuy.itemtoBuy=ShoppingListCheckOffService.getItems();

  toBuy.removeItem = function (itemName, quantity,itemIndex) {
    ShoppingListCheckOffService.removeItem(itemName, quantity,itemIndex);
  };

}
AlreadyBoughtShoppingController.$inject = ['$scope','ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController($scope,ShoppingListCheckOffService)
{
var bought=this;


bought.BoughtItems=ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
  var service = this;
  var itemtoBuy = [{
     name: "Football",
     quantity: "5"
   },{
      name: "volleyball",
      quantity: "6"
    },
    {
       name: "caps",
       quantity: "10"
     },
     {
        name: "shoes",
        quantity: "2"
      },
      {
         name: "Cricketbat",
         quantity: "3"
       }];
  service.getItems = function () {
  return itemtoBuy;
};

service.getBoughtItems = function () {
return bought;
};

var bought = [];
service.removeItem = function (itemName, quantity,itemIndex) {
  var item = {
    name: itemName,
    quantity: quantity
  };

  bought.push(item);
  itemtoBuy.splice(itemIndex, 1);
};
}


})();
