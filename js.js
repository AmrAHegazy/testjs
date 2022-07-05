var styles = `
.button {
  margin-top: 20px;
  line-height: 60px;
  font-weight: bold;
  padding: 0 40px;
  background: salmon;
  border: none;
  display:block;
}
.button:hover {
  background: lightsalmon;
}

`


//add-styles
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet);


// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Checkout by ExcelPay";
button.classList.add("button");

// 2. Append somewhere
var div = document.getElementsById('excelpay-checkout');
div.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
// 5.create iframe 	
if(!document.getElementById('ifrm')){
	var ifrm = document.createElement('iframe');
    ifrm.setAttribute('id', 'ifrm'); // assign an id
	  ifrm.style.width = "640px";
    ifrm.style.height = "480px";
    div.appendChild(ifrm);
    ifrm.setAttribute('src', 'https://www.youtube.com/embed/ro_Vwk_LTHc');
  }
});

