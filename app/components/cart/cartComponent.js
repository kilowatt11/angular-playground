 ;(function () {
  angular.module('angularPlayground')

    .component('cartComponent', {
      controller: CartController,
      templateUrl: '/app/components/cart/cart.html'
    })

  function CartController() {
    var cc = this;
    cc.cartStatus = 'Working'
    // The cart is an array of items that we are adding to from our view
    cc.cart = []
    // The StoreData.js is the information we are using to populate our page
    cc.store = {
      items: StoreData
    }
    // *** No Need to edit anything above this line ****

    cc.name = 'My BɼokƏn Cart!'

    cc.getCartCount = function () {
     
      return cc.cart.length

      // return the length of our cart

    }

    cc.calculateCartTotal = function () {

      var out = 0
      for (var i = 0; i < cc.cart.length; i++) {
        var currentItem = cc.cart[i];
         out += currentItem.price * currentItem.quantity;

      }
      return out;
    }

    /*
    * Write a calculateCartTotal function
    * make it assesible to our view
    * this function should return the total cost
    * of each item that is in our cart
    */


    cc.removeItemFromCart = function (item) {
debugger;
      console.log(item.$$hashKey)
      // Item gets passed in from our view when the user clicks the x button
      for (var i = 0; i < cc.cart.length; i++) {
        var currentItem = cc.cart[i];
        if (currentItem.$$hashKey == item.$$hashKey) {
          cc.cart.splice(i, 1)
        }

      }

      /*
      * This function should be able to remove the passed in item
      * from our cart. You will have to first identify where the passed
      * in item is in the array. Then you will need to use the correct
      * Array.method to remove 1 item ... hint: method(i, 1)
      */
    }

    cc.addItemToCart = function (item) {
      console.log(item)
      
      //  var newItem = new Item(item.name, item.selectedColor, item.selectedSize, item.quantity, item.price)
      // item gets passed in to this function from the view
      var newItem = {
        name: item.name,
        color: item.selectedColor,
        size: item.selectedSize,
        quantity: 1,
        price: item.price
      }
      cc.cart.push(newItem)
      /*
      *Our cart demands that items being added to it must have the following properties
      *var newItem = {
      *  name:'',
      *  color:'',
      *  size: '',
      *  quantity: 1,
      *  price:'',
      *}
      *console.log the item being passed in from the view 
      *to figure out which properties from the item need to be 
      *re-maped to the newItem object. 
      *After building the newItem, add it to the cart. 
      */

    }

  }
} ())
