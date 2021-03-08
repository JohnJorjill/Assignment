function calculateTip(){
    let subtotal = document.getElementById("subtotal");
    let tip = document.getElementById("tip");
    let total = document.getElementById("total");
    let totalprice = ((parseInt(subtotal.value)/100)*parseInt(tip.value))+parseInt(subtotal.value);
    total.innerHTML = totalprice;
}