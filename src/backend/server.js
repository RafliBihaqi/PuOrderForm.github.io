function calculateTotal() {
  var selectedFood = document.getElementById("foods");
  var quantity = document.getElementById("quantity").value;
  var totalPriceElement = document.getElementById("totalPrice");

  var selectedOption = selectedFood.options[selectedFood.selectedIndex];
  var foodPrice = selectedOption.getAttribute("data-price");

  var totalPrice = foodPrice * quantity;
  totalPriceElement.value = totalPrice;
}

function submitOrder(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var place = document.getElementById("place").value;
  var selectedFood = document.getElementById("foods").options[document.getElementById("foods").selectedIndex].text;
  var quantity = document.getElementById("quantity").value;
  var paymentMethod = document.getElementById("paymentMethod").value;

  var selectedOption = document.getElementById("foods").options[document.getElementById("foods").selectedIndex];
  var foodPrice = selectedOption.getAttribute("data-price");

  var totalPrice = foodPrice * quantity;

  var whatsappMessage = "FoodExpress Order\n";
  whatsappMessage += "Name: " + name + "\n";
  whatsappMessage += "Place and Building: " + place + "\n";
  whatsappMessage += "Food: " + selectedFood + "\n";
  whatsappMessage += "Quantity: " + quantity + "\n";
  whatsappMessage += "Payment Method: " + paymentMethod + "\n";
  whatsappMessage += "Total Price: " + totalPrice;

  var encodedMessage = encodeURIComponent(whatsappMessage);
  var whatsappURL = "https://api.whatsapp.com/send?phone=6281281809533&text=" + encodedMessage;

  window.open(whatsappURL, "_blank");
}

document.getElementById("quantity").addEventListener("input", calculateTotal);
function showProof() {
  document.getElementById("showProof").style.display = "block";
  setTimeout(function() {
    document.getElementById("showProof").style.display = "none";
  }, 5000); // Sembunyikan pesan setelah 5 detik (sesuaikan dengan kebutuhanmu)
}