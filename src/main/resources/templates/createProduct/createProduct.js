function showFormCreateProduct() {
    axios.get('http://localhost:8080/category')
        .then(function (response) {
            let categories = response.data
            let html = `
    <div class="container" id="container">
     <div class="row row1">
        <div class="col-8">
            <h5>Chọn file ảnh</h5>
            <input type="file" id="fileButton" onchange="uploadImage(event)">
            <input type="hidden" id="image" value="">
            <div id="imgDiv" class="image">
        </div>
        </div>
        <div class="col-4">
            <label for="">Nhập tên sản phẩm:</label>
            <div class="input-group flex-nowrap">
            <input type="text" id="name" class="form-control" placeholder="Tên sản phẩm" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <label for="">Nhập số lượng sản phẩm:</label>
            <div class="input-group flex-nowrap">
            <input type="text" id="quantity" class="form-control" placeholder="Số lượng sản phẩm" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <label for="">Nhập giá sản phẩm/1kg:</label>
            <div class="input-group flex-nowrap">
            <input type="text" id="price" class="form-control" placeholder="Giá sản phẩm/1kg" aria-label="Username" aria-describedby="addon-wrapping">
            </div>
            <br>
            <label for="">Mô tả sản phẩm đi em :</label>
            <textarea cols="34" rows="3" id="description">
            </textarea>
            
            <select class="custom-select" id="idCategory">`
            for (let i = 0; i < categories.length; i++) {
                html +=
                    `<option value="${categories[i].id}">${categories[i].name}</option>`
            }
            html += `</select>

<!--            <div class="input-group mb-3">-->
<!--            <option selected>Chọn loại đi em</option>-->
<!--            <option value="1">Rau</option>-->
<!--            <option value="2">Củ</option>-->
<!--            <option value="3">Quả</option>-->
<!--            </select>-->
<!--            <div class="input-group-append">-->
<!--                 <label class="input-group-text" for="inputGroupSelect02">Options</label>-->
<!--            </div>-->
<!--            </div>-->
            
            <div style="width: 100%; display: flex; justify-content: center">
            <button type="button" class="btn btn-primary" onclick="create()" >Thêm thì ấn vào</button>
            </div>  
        </div>
    </div>
    <div class="row2">
    </div>
    </div>
    `
            document.getElementById("main2").innerHTML = html;
        })
}

function create() {
    let name = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let idCategory = document.getElementById("idCategory").value;
    let image = document.getElementById("image").value;

    let newProduct = {
        name : name,
        quantity : quantity,
        price : price,
        description : description,
        image : image,
        category_id : {
            id : idCategory
        }
    }
    axios.post('http://localhost:8080/admin/product/create', newProduct)
        .then(function (response) {
            showAll();
            alert('Thêm thành công')
        })
}

showFormCreateProduct();


function uploadImage(e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" alt="">`
            localStorage.setItem('image', downloadURL);
            document.getElementById("image").value = downloadURL;
        });
}