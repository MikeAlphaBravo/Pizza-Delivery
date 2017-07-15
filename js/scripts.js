//business logic (Back-end)
function Pizza(name, ingredients, size, price) {
  this.name = name;
  this.ingredients = ingredients;
  this.size = size;
  this.price = price;
}

Pizza.prototype.orderName = function() {
  this.name = $("input#inputName").val();
}

Pizza.prototype.buildOrder = function() {
  this.size = $("input:radio[name=size]:checked").val();
  var ingredientsList = [];
  $("input:checkbox[name=toppings]:checked").each(function() {
    var eachTopping = $(this).val();
    ingredientsList.push(eachTopping);
  })
  this.ingredients = ingredientsList;
  var ingredientTotal = this.ingredients.length;
  if (this.size === "small") {
    this.price = 5 + ingredientTotal;
  } else if (this.size === "medium") {
    this.price = 10 + ingredientTotal;
  } else if (this.size === "large") {
    this.price = 15 + ingredientTotal;
  }
  $("#orderTotal").text(this.price);
  $("#outputName").text("Thank you " + this.name + "!");
}

//global scope variable
// var newPizza;
//
// function pizzaParts(sauces, cheeses, veggies, meats, size, toppingsList) {
//   this.choiceSauces = sauces;
//   this.choiceCheeses = cheeses;
//   this.choiceVeggies = veggies;
//   this.choiceMeats = meats;
//   this.choiceSize = size;
//   this.toppingsList = toppingsList;
// }
//
// function pizzaBuild() {
//   var inputtedSauces = [];
//   var inputtedCheeses = [];
//   var inputtedVeggies = [];
//   var inputtedMeats = [];
//   var inputtedSize = $("select#pizzaSize").val();
//   var calculatedToppingsList;
// }
//
// newPizza = new Pizza(inputtedSauces, inputtedCheeses, inputtedVeggies, inputtedMeats, inputtedSize, 0);
// newPizza.toppingsList = newPizza.sauces.length + newPizza.cheeses.length + newPizza.veggies.length + newPizza.meats.length;
//
// $("#selectedSize").text(newPizza.size)
//
// newPizza.sauces.forEach(function(sauce) {
//   $("ul#selectedSauces").append("<li>" + sauces + "</li>");
// })
// newPizza.cheeses.forEach(function(cheese) {
//   $("ul#selectedCheese").append("<li>" + cheeses + "</li>");
// })
// newPizza.veggies.forEach(function(veggie) {
//   $("ul#selectedVeggies").append("<li>" + veggies + "</li>");
// })
// newPizza.meats.forEach(function(meat) {
//   $("ul#selectedMeats").append("<li>" + meats + "</li>");
// })
//
// $(".orderForm").show();
//
// Order.prototype.costing = function() {
//   var startPrice = 8;
//   var toppingTotal;
//   var orderTotal;
//
//   if (this.toppingsList <= 3) {
//     toppingsTotal = 0;
//   } else if (this.toppingsList > 3) {
//     toppingsTotal = (this.toppingsList -3) * 1;
//   }
//   orderTotal = startPrice + toppingsTotal
//   if (this.size = "10in. Personal Pie") {
//     pizzaTotal = orderTotal;
//   } else if (this.size = "15in. Medium") {
//     pizzaTotal = orderTotal + 2;
//   } else if (this.size = "20in. Large") {
//     pizzaTotal = orderTotal + 4;
//   } else if (this.size = "25in. Family Size Pie") {
//     pizzaTotal = orderTotal + 6;
//   }
//   $("#totalCost").text(pizzaTotal);
// }

// function Contact(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.addresses = [];
// }
//
// function Address(phone, street, city, state, zipCode) {
//   this.phone = phone;
//   this.street = street;
//   this.city = city;
//   this.state = state;
//   this.zipCode = zipCode;
// }
//
//
// Address.prototype.fullAddress = function() {
//   return this.phone + " " + this.street + ", " + this.city + " " + this.state + " " + this.zipCode;
// };
//
// function resetFields() {
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
//     $("input.new-zipCode").val("");
// }




//user logic (Front-end)
$(document).ready(function() {
  var thisPizza = new Pizza();
  $("#inputName").click(function(event) {
    event.preventDefault();
    thisPizza.orderName();
  })

  $("#submitOrder").click(function(event) {
    event.preventDefault();
    thisPizza.buildOrder();
    $(".results").show();
  })
});


// $(document).ready(function() {
//
//   $("form.orderForm").submit(function(event) {
//     event.preventDefault();
//       $("#orderSummary").show();
//       $("input:checkbox[name=sauces]:checked").each(function(){
//         var sauces = $(this).val();
//       })
//       $("input:checkbox[name=cheeses]:checked").each(function(){
//         var cheeses = $(this).val();
//       })
//       $("input:checkbox[name=veggies]:checked").each(function(){
//         var veggies = $(this).val();
//       })
//       $("input:checkbox[name=meats]:checked").each(function(){
//         var meats = $(this).val();
//       })
//       pizzaBuild();
//       newPizza.costing();
//     });

      // $("#deliverySummary").show();
      // $("input:checkbox[name=orderSize]:checked").each(function(){
      //   var listOrderSize = $(this).val();
      //   $('#pizzaSize').append(listOrderSize + "<br>");

    // var inputtedFirstName = $("input#new-first-name").val();
    // var inputtedLastName = $("input#new-last-name").val();
    // var newContact = new Contact(inputtedFirstName, inputtedLastName);
    //
    // $(".new-address").each(function() {
    //   var inputtedPhone = $(this).find("input.new-phone").val();
    //   var inputtedStreet = $(this).find("input.new-street").val();
    //   var inputtedCity = $(this).find("input.new-city").val();
    //   var inputtedState = $(this).find("input.new-state").val();
    //   var inputtedZipCode = $(this).find("input.new-zipCode").val();
    //   var newAddress = new Address(inputtedPhone, inputtedStreet, inputtedCity, inputtedState, inputtedZipCode);
    //   newContact.addresses.push(newAddress);
    // });
    //
    // $(".contact").last().click(function() {
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(newContact.fullName());
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    //   $("ul#addresses").text("");
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    //   });
    // });

    // resetFields();
