const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
    console.log(button, index)
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
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i =0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML==productName){
            alert("Sản phẩm đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="cursor: pointer"><span class="main-cart-delete">Xoá</span></td><td style="display: flex; align-items: center"><img src="'+productImg+'" height="80" width="80"/></td><td>'+productName+'</td><td><input style="width: 50px; outline:none; text-align: center" type="number" value="1" min="0"></td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    deleteCart()
}
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".main-cart-delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
        })
    }
}
