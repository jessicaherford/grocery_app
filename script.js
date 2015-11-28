//alert("HI!");

//Want to create functionality that will take input of grocery item and price and subtract it from the total grocery budget + tax;

//Add item to list
//Once item is put in cart ask for price
//Take price out of grocery budget update current budget
//After item is put in cart and budget has been updated cross out




function cart(item){
  var item = document.getElementById('groceryItem').value;
  document.getElementById('list').innerHTML += "<li> " + item + "<input type = 'checkbox' id = 'checkbox' onclick='getChecked()'</li>";

};


function getChecked(){
  var input = document.getElementById('checkbox');
  var isChecked = input.checked;
  var price = 0;
  isChecked = (isChecked)? "checked" : "not checked"
  var price = Number(prompt("How much was the item?"));

  return price;

  console.log(price);
}
