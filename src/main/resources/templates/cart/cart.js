function showCart() {
    axios.get('http://localhost:8080/product/cart')
        .then( (response) => {
            let products = response.data;
            console.log(products)
            let html = `
   <div class="cart">
        <div class="row cart_title">
              <h3><i class="fa-solid fa-cart-shopping fa-beat-fade"></i>Giỏ hàng</h3>
        </div>
        <div class="row row_into">`
            for (let i = 0; i < products.length; i++) {
                html += `   
        <div class="col-9 col1">
            <div class="col-1 col_delete">
                <div class="delete">
                    <button onclick="deleteForm()">xoa</button>
                </div>
            </div>
            <div class="col-8">
                <div class="img_product">
                    <img style="height: 150px; width: 150px"
                         src="${products[i].photo}" alt="">
                    <b>${products[i].name}</b>
                </div>
            </div>
            <div class="col-3 col_priceAndQuantity">
                <div class="priceAndQuantity">
                    <b>${products[i].price}</b>
                    <div class="quantity">
                        <button class="minus" onclick="decreaseQuantity()">-</button>
                        <input type="text" id="quantityInput" value="1">
                        <button class="plus" onclick="increaseQuantity()">+</button>
                    </div>
                </div>
            </div>
        </div>
                `
            }
            `</div>
            <div className="col-3 col2">
                <div class="row total">
                    <b>Tổng tiền:  ... </b>
                </div>
                <div class="btn-pay">
                    <button class="pay" >Tiến hành thanh toán</button>
                </div>
                <div className="back">
                    <a className="btn" onClick="checkLoggedIn()"><i class="fa fa-arrow-left "></i> Tiếp tục mua hàng</a>
                </div>
            </div>
           
            <table id="myTable">
     <thead>
         <tr>
             <th>id</th>
             <th>Action</th>
         </tr>
     </thead>
     <tbody id="tableBody">
         <!-- Table body will be populated dynamically -->
         ${generateTableBody(products)}
     </tbody>
 </table>

</div>
    `
            document.getElementById("main").innerHTML = html;
            getCardByIdUser();
            getTotal().then(r => {});
    })


}

// showCart();
function checkLoggedIn() {
    if (getCurrentUser()) {
        showAll()
    } else {
        showAllProduct()
    }
}

function decreaseQuantity() {
    var quantityInput = document.getElementById('quantityInput');
    var currentQuantity = parseInt(quantityInput.value);

    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
}
let arrCart = null;

function increaseQuantity() {
    var quantityInput = document.getElementById('quantityInput');
    var currentQuantity = parseInt(quantityInput.value);

    quantityInput.value = currentQuantity + 1;
}

function getCardByIdUser() {
    axios.get(`http://localhost:8080/product/getById/${getCurrentUser().id}`)
        .then((res) => {
            arrCart = res.data
        })
}

function generateTableBody(products) {
    if (products && products.length > 0) {
        return products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td><button onclick="deleteForm('${product.id}')">Xoá</button></td>
            </tr>
        `).join('');
    } else {
        return `<tr><td colspan="2"><b>Giỏ hàng trống.</b></td></tr>`;
    }
}

function deleteForm(id) {
    let check = confirm("Xoa Nhe")
    if (check) {
        axios.delete(`http://localhost:8080/product/` + id)
            .then((res) => {
                showCart();
            })
            .catch((error) => {
                console.error('Lỗi khi xóa:', error);
            });
    } else {
        alert("Suy nghi ki di!")
    }
}

getCardByIdUser();

