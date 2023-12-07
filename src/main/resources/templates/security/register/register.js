function showFormRegister() {
    let html = `
  <div class="nav_bar">
    <div class="row">
        <div class="col-12">
            <ul class="breadcrumb">
                <li>
                    <a href="/"><span>Trang chủ</span></a>
                    <span>&nbsp;/&nbsp;</span>
                </li>
                <li><strong><span><b>Đăng ký tài khoản</b></span></strong></li>
            </ul>
        </div>
    </div>
</div>
<section class="section">
    <div class="container margin-bottom-20 card py-20">
        <div class="wrap_background_aside margin-bottom-40 page_login">
            <div class="heading-bar">
                <h5 class="title_page mb-0">ĐĂNG KÝ TÀI KHOẢN</h5>
                <p class="mb-0">Bạn đã có tài khoản ?
                    <a onclick="showFormLogin()" class="btn-link-style btn-register"
                       style="text-decoration: underline; "> Đăng nhập tại đây
                    </a>
                </p>
            </div>
        </div>
    <div class="row">
        <div class="col-12 col-md-6 offset-md-3 ">
            <div class="page-login py-3 ">
                <div id="login">
                    <h2 class="text-center">
                        Thông tin cá nhân
                    </h2>
                    <div id="customer_register">
                        <div class="form-signup clearfix">
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <fieldset class="form-group">
                                        <label>Tên đăng nhập<span class="required">*</span></label>
                                        <input type="text" class="form-control form-control-xs" id="username_register" placeholder="Tên đăng nhập" required="">
                                    </fieldset>
                                </div>
                                <div class="col-md-12">
                                    <fieldset class="form-group">
                                        <label>Họ và tên<span class="required">*</span></label>
                                        <input type="text" class="form-control form-control-xs"
                                               id="name" placeholder="Họ và tên" required="">
                                    </fieldset>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <fieldset class="form-group">
                                        <label>Số điện thoại <span class="required">*</span></label>
                                        <input onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                                               placeholder="Số điện thoại" type="text" pattern="\\d+" id="phone_number"
                                               class="form-control form-control-comment form-control-xs" name="Phone"
                                               required="">
                                    </fieldset>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <fieldset class="form-group">
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$"
                                               class="form-control form-control-xs" name="email" id="email"
                                               placeholder="Email" required="">                             
                                    </fieldset>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <fieldset class="form-group">
                                        <label>Địa chỉ <span class="required">*</span> </label>
                                        <input type="text" class="form-control form-control-xs" name="password"
                                               id="address" placeholder="Địa chỉ" required="">
                                    </fieldset>
                                </div>
                                <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                                    <fieldset class="form-group">
                                        <label>Mật khẩu <span class="required">*</span> </label>
                                        <input type="password" class="form-control form-control-xs" name="password"
                                               id="password_register" placeholder="Mật khẩu" required="">
                                    </fieldset>
                                </div>
                            </div>
                            <div class="section margin-top-10 button_bottom mt-3">
                                <button onclick="register()" type="submit" value="Đăng ký" class="btn-style btn_register btn-block">Đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
    `
    document.getElementById("main").innerHTML = html;
}

function register() {
    let username = document.getElementById("username_register").value;
    let name = document.getElementById("name").value;
    let phone_number = document.getElementById("phone_number").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let password = document.getElementById("password_register").value;
    let userRegister = {
        username: username,
        name: name,
        phone_number: phone_number,
        email: email,
        address: address,
        password: password,
        confirmPassword : password
    }
    axios.post('http://localhost:8080/register', userRegister)
        .then(function (response) {
            axios.get('http://localhost:8080/users')
                .then(function (rep) {
                    let users = rep.data
                    for (let i = 0; i < users.length; i++) {
                        if(users[i].username === username){
                            alert('Tên đăng nhập của bạn đã tồn tại')
                        }else {
                            console.log("Đăng ký thành công")
                            showFormLogin();
                        }
                    }
                })
        })
}