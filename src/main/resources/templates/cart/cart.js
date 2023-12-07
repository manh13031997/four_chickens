function showCart() {
    axios.get('http://localhost:8080/cart/')
        .then(function (response) {
            let cart = response.data;
            console.log(product)
            let html =`
    <div class="cart">
    <div class="row cart_title">
        <h3>Giỏ hàng</h3>
    </div>
    <div class="row row_into">
        <div class="col-9 col1">
        `;
                for(let i=0;i<cart.length;i++)
            {

                    html+= `
<div class="col-1 col_delete">
                <div class="delete">
                    <button onclick="deleteForm(${cart[i].id})">xoa</button>
                </div>
            </div>
            <div class="col-8">
                <div class="img_product">
                    <img style="height: 200px; width: 200px"
                         src="https://i.pinimg.com/236x/77/b5/be/77b5be6a080ccc382f14dbf2ec792df6.jpg" alt="">
                    <b>Tên sản phẩm</b>
                </div>

            </div>
            <div class="col-3 col_priceAndQuantity">
                <div class="priceAndQuantity">
                    <b>Giá tương ứng với số lượng</b>
                </div>
            </div>`;

}
        html+= `</div>
                <div class="col-3 col2">
                    <div class="row total">
                        <b>Tổng tiền là ở đây</b>
                    </div>
                    <div class="btn-pay">
                        <button>Tiến hành thanh toán</button>
                    </div>
                    <div class="back">
                        <b> <-- Tiếp tục mua hàng</b>
                    </div>
                </div>
            </div>
            </div>`
            
    
    document.getElementById("main3").innerHTML = html;

})
        .catch(function (error) {
            console.error("Error fetching product data:", error);
        })
}
showCart();



function deleteForm(id) {
    axios.delete(`http://localhost:8080/cart/` +id )
        .then((res) => {
            console.log('Sản phẩm đã được xóa:', res.data);
            showCart();
        })
        .catch((error) => {
            console.error('Lỗi khi xóa:', error);
        });
}