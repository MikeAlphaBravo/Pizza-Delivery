//business logic (Back-end)

var sauce = { name: "Sauce", price: 1.00 };
var cheese = { name: "Cheese", price: 1.00 };
var veggies = { name: "Veggies", price: 1.00 };
var meats = { name: "Meats", price: 2.00 };
var totalToppings = { name: "Your Pie Specs", products: [sauce, cheese, veggies, meats] };

var smallSize = { name: "Small", price: 5.00 };
var mediumSize = { name: "Medium", price: 8.00 };
var largeSize = { name: "Large", price: 11.00 };
var xlargeSize = { name: "XLarge", price: 15.00 };
var totals = { name: "Your total cost", products: [totalToppings, smallSize, mediumSize, largeSize, xlargeSize]}

// totals.forEach(function(total) {
//   console.log(total.name + " sells:");
//   total.products.forEach(function(product) {
//     console.log(product.name);
// });

function Order(sauce, cheese, veggies, meats, size) {
  this.choiceSauce = sauce;
  this.choiceCheese = cheese;
  this.choiceVeggies = veggies;
  this.choiceMeats = meats;
  this.choiceSize = size;
}

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
// Order.prototype.totalOrder = function() {
//   return this.choiceSauce + " " + this.choiceCheese + " " + this.choiceVeggies + " " + this.choiceMeats + " " + this.choiceSize;
// };
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

  $("form#orderForm").submit(function(event) {
    event.preventDefault();
      $("#orderSummary").show();
      $("input:checkbox[name=orderToppings]:checked").each(function(){
        var listOrderToppings = $(this).val();
        $('#orderSummary').append(listOrderToppings + "<br>");
      });
      var inputtedPizzaCombo = $("input#pizzaCombo").val();

      // $("#deliverySummary").show();
      // $("input:checkbox[name=orderSize]:checked").each(function(){
      //   var listOrderSize = $(this).val();
      //   $('#pizzaSize').append(listOrderSize + "<br>");
      // });
    $('#orderForm').hide();
  });

});

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
