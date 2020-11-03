(function() {
    'use strict';
    angular
        .module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];


    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuyShopping = this;
        toBuyShopping.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
        toBuyShopping.items = ShoppingListCheckOffService.getAvailableItems();
    }

    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var toBuyShopping = this;
        toBuyShopping.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [{
            name: "Choco cookies",
            quantity: 10
        }, {
            name: "Apples",
            quantity: 16
        }, {
            name: "Pizza",
            quantity: 25
        }, {
            name: "Banana",
            quantity: 45
        }, {
            name: "candies",
            quantity: 35
        }];

        var boughtItems = [];

        service.buyItem = function(itemIndex) {
            boughtItems.push(toBuyItems[itemIndex]);
            toBuyItems.splice(itemIndex, 1); // removes item from toBuyItems
        };

        service.getAvailableItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };
    }
})();