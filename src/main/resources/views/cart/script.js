const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click", function (event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H1").innerText
        var productPrice = product.querySelector("span").innerText
        addcart(productImg, productName, productPrice)
    })
})
function addcart(productImg, productName, productPrice){
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td style="display: flex; align-items: center"'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
}