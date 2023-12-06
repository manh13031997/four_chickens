function showCart() {
    let html =`
    <div class="cart">
    <div class="row cart_title">
        <h3>Giỏ hàng</h3>
    </div>
    <div class="row row_into">
        <div class="col-9 col1">
            <div class="col-1 col_delete">
                <div class="delete">
                    <b>Xóa</b>
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
            </div>
        </div>
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
</div>
    `
    document.getElementById("main3").innerHTML = html;
}
showCart();