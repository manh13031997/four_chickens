function showReset() {
    axios.get('http://localhost:8080/product/')
        .then(function (response) {
            let pro = response.data;
            console.log(pro)
            let html =`
    <div class="pro">
    <div class="row cart_title">
        <h3>Giỏ hàng</h3>
    </div>
    <div class="row row_into">
        <div class="col-9 col1">
        `;
            for(let i=0;i<pro.length;i++)
            {
                html+= `</div>
                <div class="col-3 col2">
                    <div class="row total">
                        <b>Tổng tiền là ở đây</b>
                    </div>
                    <div class="btn-pay">
                        <button  onclick="deleteReset(${pro[i].id})">Tiến hành thanh toán</button>
                    </div>
                    <div class="back">
                        <b> <-- Tiếp tục mua hàng</b>
                    </div>
                </div>
            </div>
            </div>`
            }

            document.getElementById("main3").innerHTML = html;

        })
        .catch(function (error) {
            console.error("Error fetching product data:", error);
        })
}
showReset();



function deleteReset(id) {
    axios.delete(`http://localhost:8080/product/delete` +id )
        .then((res) => {
            console.log('Sản phẩm đã được xóa:', res.data);
            showCart();
        })
        .catch((error) => {
            console.error('Lỗi khi xóa:', error);
        });
}