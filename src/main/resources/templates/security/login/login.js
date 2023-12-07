function showFormLogin() {
    let html = `
<div class="nav_bar">
    <div class="row">
        <div class="col-12">
            <ul class="breadcrumb">
                <li>
                    <a onclick="showAllProduct()" ><span>Trang chủ</span></a>
                    <span>&nbsp;/&nbsp;</span>
                </li>
                <li><strong><span><b>Đăng nhập tài khoản</b></span></strong></li>
            </ul>
        </div>
    </div>
</div>
<div class="content">
    <section class="section">
        <div class="container margin-bottom-20 card py-20">
            <div class="wrap_background_aside margin-bottom-40 page_login">
                <div class="heading-bar">
                    <h5 class="title_page mb-0">ĐĂNG NHẬP TÀI KHOẢN</h5>
                    <p class="mb-0">Bạn chưa có tài khoản ?
                        <a onclick="showFormRegister()"  class="btn-link-style btn-register"
                           style="text-decoration: underline; "> Đăng ký tại đây</a></p>
                </div>
                <div class="row row-content">
                    <div class="col-12 col-md-6 offset-md-3 py-3">
                        <div class="page-login ">
                            <div id="login">
                                <div id="customer_login">
                                    <div class="form-signup clearfix">
                                        <fieldset class="form-group">
                                            <label>Tên đăng nhập <span class="required">:</span></label>
                                            <input type="text"
                                                   class="form-control " id="username"
                                                   placeholder="Tên đăng nhập">
                                        </fieldset>
                                        <fieldset class="form-group">
                                            <label>Mật khẩu <span class="required">:</span> </label>
                                            <input type="password" class="form-control "
                                                   id="password" placeholder="Mật khẩu">
                                           
                                        </fieldset>

                                        <div class="pull-xs-left button_bottom a-center  mb-3">
                                            <button class="btn-block btn-login" type="submit" value="Đăng nhập" onclick="login()">Đăng
                                                nhập
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</body>
</html>
    `
    document.getElementById("main").innerHTML = html;
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userLogin = {
        username : username,
        password : password
    }

    axios.post('http://localhost:8080/login', userLogin)
        .then(function (response) {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            console.log("Đăng nhập thành công")
            let html1=`
            ${getCurrentUser().username}
            `
            let html2 = `
            <button class="logout" onclick="logout()">Logout</button>
            `
            document.getElementById("logout").innerHTML = html2;
            document.getElementById("loginSuccess").innerHTML = html1;
            getTotal()
            showAll();
        }).catch(function (err) {
        console.log(err)
        alert("Đăng nhập sai rồi bé ơi !")
    })
}

function auHeader(data) {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user && user.acessToken) {
        return {Authorization: 'Bearer' + user.acessToken, data: data}
    } else {
        return ''
    }
}
function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"))
}
// function showUsers() {
//     axios.get("http://localhost:8080/admin/users", {headers: {"Authorization": `Bearer ${getCurrentUser().accessToken}`}})
//         .then(function (res) {
//             document.getElementById("loginSuccess").innerHTML = `<h1>Hello ${getCurrentUser().username}</h1>
//             <button onclick="logout()">Logout</button>`;
//
//         })
// }

function logout() {
    localStorage.clear();
    let html1 = `
    <div id="not_logged_in_yet">
        <a class="btn" title="Tài khoản" class="li-block">Tài khoản
        </a>
        <small>
            <a onclick="showFormLogin()" class="btn" title="Đăng nhập" class="font-weight">
           Đăng nhập
             </a>
       </small>
      </div>
    `
    let html2 = null;

    document.getElementById("logout").innerHTML = html2;
    document.getElementById("loginSuccess").innerHTML = html1;
    var total = 0
    document.getElementById("total").innerHTML = total;
    showAllProduct();
}
function showSubHeader() {
    if(getCurrentUser()) {
        showAll();
    }else {
        showAllProduct();
    }
}

showSubHeader()

function checkLogin() {
    if(getCurrentUser()){
        showAll();
    } else {
        showAllProduct();
    }
}
checkLogin();


if(getCurrentUser()) {
    let html1=`
            ${getCurrentUser().username}
            `
    let html2 = `
            <button class="logout" onclick="logout()">Logout</button>
            `
    document.getElementById("logout").innerHTML = html2;
    document.getElementById("loginSuccess").innerHTML = html1;
}else {
    showAllProduct();
}
