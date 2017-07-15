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

//address info to integrate before more css

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
  $("#submitName").click(function(event) {
    event.preventDefault();
    thisPizza.orderName();
  })

  $("#submitOrder").click(function(event) {
    event.preventDefault();
    thisPizza.buildOrder();
    $(".results").show();
  })
});

//address info to integrate before more css
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
