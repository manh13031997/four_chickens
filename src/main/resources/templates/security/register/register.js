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
<!--                    <input-->
<!--                            name="FormType" type="hidden" value="customer_register"><input name="utf8" type="hidden"-->
<!--                                                                                           value="true"><input type="hidden"-->
<!--                                                                                                               id="Token-5885f491ca754b1f8e12d2ede71698fd"-->
<!--                                                                                                               name="Token"-->
<!--                                                                                                               value="03AFcWeA7hUkSdnM_fNslAU-DEZ4KKggx8CJNXhS47E4L8fqIpXB_4MTqjDj27In6MmrrkpRUpapEKAeWBz5g4otWZxLOZeh5FN7szeBEoT9N-VF_92pDQs1oU0iUrqGs-DbjQRdqSSfW6NIDwzpeXkIiF2qhQHD3pwGgxwLQTIk_ik74jWe_H8QYNBQ3ByohqIBojR7LXWw5Z67xpdSJYrH-dfcgAYNsYKvBa6OQuzknBUWtJHwLvCaaOAd_EF-zAEvBLc9UQZ-f7mJp02ypIvtKfR3LxYj1pEc9cicfplZXpkiBoI0gpvMi1lfI4vrEo_0imdzbgz67gIhpH4GLFKKSY5KuBYZngRLsAcQO4lhFBLDaDDtu07zkT-c7yny2KLNYVBgctY7gqZqa3fA9r13sBHmmwgKYZbG0n7eG1AcerctfL9Z_L7PNDLBw2CU3EWDrO8faZJP3Vs6VoMZDO_G5dB1DQQoLhuH_cOgMJQGgxepN3E_y6pFch-avLeoGe_7BDrAJ-jV9lL9iyUq8IGww2BD0xa4N0C9J_jhfTuR_vuJzWWmd-ioY">-->
<!--                        <script src="https://www.google.com/recaptcha/api.js?render=6Ldtu4IUAAAAAMQzG1gCw3wFlx_GytlZyLrXcsuK"></script>-->
<!--                        <script>grecaptcha.ready(function () {-->
<!--                            grecaptcha.execute("6Ldtu4IUAAAAAMQzG1gCw3wFlx_GytlZyLrXcsuK", {action: "customer_register"}).then(function (token) {-->
<!--                                document.getElementById("Token-5885f491ca754b1f8e12d2ede71698fd").value = token-->
<!--                            });-->
<!--                        });</script>-->
<!--                        <div class="form-signup " style="color:red;">-->

<!--                        </div>-->
                        
                        
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
            console.log("Đăng ký thành công")

            showFormLogin();

            showFormLogin();
        })
}