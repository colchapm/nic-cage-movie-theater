function Ticket(name, time, age) {
  this.name = name
  this.time = time
  this.age = age
  this.price = 12
}

Ticket.prototype.ticketTotal = function () {
  if (this.name === "Con Air" || this.name === "Face/Off") {
    this.price += 5;
  } 
  if (this.time === "19") {
    this.price += 3;
  }
  if (this.time === "11") {
    this.price -= 2;
  }
  if (this.age === "Child (ages 15 & Under)" || this.age === "Senior (ages 62 & Over)") {
    this.price -= 5;
  } 
  return this.price;
  }
  

$(document).ready(function() {
  $("form#ticketForm").submit(function(event) {
    event.preventDefault();
    const name = $("#movie-name").val();
    const time = $("#movie-time").val();
    const age = $("#age-group").val();
    let newTicket = new Ticket(name, time, age);
    const price = newTicket.ticketTotal();
    $("#ticketForm").hide();
    $("#output").text("YOUR TOTAL IS $" + price)
    $(".checkout").show();
  })
})
