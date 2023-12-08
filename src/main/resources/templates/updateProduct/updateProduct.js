function showFormUpdateProduct(id) {
    axios.get('http://localhost:8080/product/' + id)
        .then(function (response) {
            let products = response.data
            axios.get('http://localhost:8080/category')
                .then(function (response) {
                    let categories = response.data
                    let html = `

<br>
    <div class="container" id="container">
     <div class="row row-create">
        <div class="col-8">
            <h5>Chọn file ảnh</h5>
            <input type="file" id="fileButton" onchange="uploadImage(event)">
            <input type="hidden" id="image">
            <div id="imgDiv" class="image">
        </div>
        </div>
        <div class="col-4">
            <label for="">Nhập tên sản phẩm:</label>
            <div class="input-group flex-nowrap">
            <input type="text" id="name" class="form-control" value="${products.name}" placeholder="Tên sản phẩm" aria-label="Username" aria-describedby="addon-wrapping"">
            </div>
            <br>
            <label for="">Nhập số lượng sản phẩm:</label>
            <div class="input-group flex-nowrap">
            <input type="text" id="quantity" class="form-control" value="${products.quantity}" placeholder="Số lượng sản phẩm" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <label for="">Nhập giá sản phẩm/1kg:</label>
            <div class="input-group flex-nowrap">
            <input type="text" id="price" class="form-control" value="${products.price}" placeholder="Giá sản phẩm/1kg" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <label for="">Mô tả sản phẩm đi em :</label>
            <textarea cols="31" rows="3" id="description" value="${products.description}">
            </textarea>
            
            <select class="custom-select" id="idCategory">`
                    for (let i = 0; i < categories.length; i++) {
                        html +=
                            `<option value="${categories[i].id}">${categories[i].name}</option>`
                    }
                    html += `</select>

            <div style="width: 100%; display: flex; justify-content: center; margin-top: 18px">
            <button type="button" class="btn btn-primary" onclick="update(${products.id})" >Sửa thì ấn vào</button>
            <button type="button" class="btn btn-primary" onclick="showAll()" >Quay lại</button>
            </div>  
        </div>
    </div>
    <div class="row2">
    </div>
    </div>
    `
                    document.getElementById("main").innerHTML = html;
                })
        })
}

function update(id) {
    let name = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let idCategory = document.getElementById("idCategory").value;
    let image = document.getElementById("image").value;

    let updateProduct = {
        name : name,
        quantity : quantity,
        price : price,
        description : description,
        photo : image,
        category : {
            id : idCategory
        }
    }
    console.log(updateProduct);
    axios.put('http://localhost:8080/admin/product/edit/' + id,updateProduct)
        .then(function (rep) {
            showAll()
        })
}
