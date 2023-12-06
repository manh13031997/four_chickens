function showFormLogin() {
    let html = `
<div class="nav_bar">
    <div class="row">
        <div class="col-12">
            <ul class="breadcrumb">
                <li>
                    <a href="/static"><span>Trang chủ</span></a>
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
                                            <small class="d-block my-2">
                                            Quên mật khẩu? Nhấn vào
                                            <a href="#"
                                            class="btn-link-style text-primary"
                                            onclick="showRecoverPasswordForm();return false;">
                                            đây </a>
                                            </small>
                                        </fieldset>

                                        <div class="pull-xs-left button_bottom a-center  mb-3">
                                            <button class="btn-block btn-login" type="submit" value="Đăng nhập" onclick="login()">Đăng
                                                nhập
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="recover-password" style="display:none;" class="form-signup page-login text-center">
                                <h2>
                                    Đặt lại mật khẩu
                                </h2>
                                <p>
                                    Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu.
                                </p>
                                <form method="post" action="/account/recover" id="recover_customer_password"
                                      accept-charset="UTF-8"><input name="FormType" type="hidden"
                                                                    value="recover_customer_password"><input name="utf8"
                                                                                                             type="hidden"
                                                                                                             value="true">
                                    <div class="form-signup" style="color: red;">

                                    </div>
                                    <div class="form-signup clearfix">
                                        <fieldset class="form-group">
                                            <input type="text"
                                                   class="form-control form-control-lg" value="" name="username"
                                                   id="recover-username" placeholder="Tên đăng nhập" required="">
                                        </fieldset>
                                    </div>
                                    <div class="action_bottom my-3">
                                        <input class="btn btn-style btn-recover btn-block" type="submit"
                                               value="Lấy lại mật khẩu">
                                        <a href="#" class="btn btn-style link btn-style-active "
                                           onclick="hideRecoverPasswordForm();return false;">Quay lại</a>
                                    </div>
                                </form>
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
            console.log("Đăng nhập thành công")
            showAll()
        }).catch(function (err) {
        console.log(err)
        alert("Đăng nhập sai rồi bé ơi !")
    })
}
