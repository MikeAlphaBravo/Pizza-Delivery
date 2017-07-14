//business logic (Back-end)

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

    var inputtedPizzaCombo = $("input#pizzaCombo").val();
    var inputtedPizzaSize = $("input#pizzaSize").val();
    var newOrder = new Order(inputtedPizzaCombo, inputtedPizzaSize);

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

  });
});
