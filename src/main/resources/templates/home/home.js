

var total = 0
document.getElementById("total").innerHTML = total;
async function getTotal() {
    // Lấy thông tin người dùng hiện tại
    let currentUser = getCurrentUser();

    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (currentUser) {
        // Gửi yêu cầu GET với tham số id
        await axios.get("http://localhost:8080/product/total", {
            params: {
                id: currentUser.id
            }
        }).then(function (response) {
            // Lưu giá trị vào biến totalProduct
            total = response.data;
            document.getElementById("total").innerHTML = total;
            // Gọi hàm để xử lý giá trị totalProduct (nếu cần)
        }).catch(function (error) {
            console.error("Error fetching total product:", error);
        });
    } else {
        console.error("User not logged in");
    }
    return total
}
function addToCart(id) {
    console.log(getCurrentUser())
    let product = {
        idUser: getCurrentUser().id,
        idProduct: id
    }
    axios.post("http://localhost:8080/product/addToCart", product).then(function (res) {
        console.log(res)
    })
    getTotal().then(r => {})
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"))
}
showAll();
getTotal().then(r => {
})
function showAll() {
    let html = `
    <div id="carouselExampleInterval" class="carousel_slide" data-ride="carousel"
     class="col-lg-3 d-lg-block d-none navigation-wrapper pr-0">
     <div class="row">
     <div class="col-3">
     <nav class="h-100">
        <ul class="navigation list-group list-group-flush scroll">
            <li class="menu-item list-group-item">
                <a href="#" class="menu-item__link" title="Sản phẩm sơ chế">
                    Các Loại Rau
                </a>

            </li>


            <li class="menu-item list-group-item">
                <a href="#" class="menu-item__link" title="Rau củ quả ép nước">
                    Các Loại Củ
                </a>

            </li>


            <li class="menu-item list-group-item">
                <a href="#" class="menu-item__link" title="Trái cây tươi">
                    Trái cây tươi
                </a>

            </li>
        </ul>
    </nav>
</div>
<div class="col-9">
<div class="carousel-inner" style="text-align: center;">
        <div>
            <div class="carousel-item active" data-interval="10000">
                <img class="d-block w-100"><img src="img/hoa%20qua.jpg" height="375" width="600"/>
            </div>
            <div class="carousel-item" data-interval="2000">
                <img class="d-block w-100"><img src="img/hoa%20qua2.jpg" height="375" width="600"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100"><img src="img/hoa%20qua3.jpg" height="375" width="600"/>
            </div>

            <button class="carousel-control-prev " type="button" data-target="#carouselExampleInterval"
                    data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next " type="button" data-target="#carouselExampleInterval"
                    data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
        </div>
    </div>
</div>
</div>       
</div>
<div>
            <button onclick="addToCart(1)">Đặt món</button>
        </div>
    `
    document.getElementById("main").innerHTML = html;
}