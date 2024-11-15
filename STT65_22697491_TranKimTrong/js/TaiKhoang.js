// Chuyển động footer
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    
    document.querySelector('.parallaximage4').style.transform = `translate3d(0px, ${scrollPosition * 0.10}px, 0px)`;
    document.querySelector('.parallaximage3').style.transform = `translate3d(0px, ${scrollPosition * 0.13}px, 0px)`;
    document.querySelector('.parallaximage2').style.transform = `translate3d(0px, ${scrollPosition * 0.16}px, 0px)`;
    document.querySelector('.parallaximage1').style.transform = `translate3d(0px, ${scrollPosition * 0.19}px, 0px)`;
});



$(document).ready(function() {

// ĐĂNG KÝ
// Kiểm tra Họ và Tên
    function kiemTraHoTen() {
        var kt = /^[A-ZÀ-Ý][a-zà-ỹ]*(\s[A-ZÀ-Ý][a-zà-ỹ]*)*$/;

        if ($("#hovaten").val() === "") {
            event.preventDefault();
            $("#tbTen").html("Vui lòng nhập họ và tên");
            $("#tbTen").addClass("ThongBao");
            return false;
        }
        if (!kt.test($("#hovaten").val())) {
            event.preventDefault();
            $("#tbTen").html("*Chữ cái đầu của mỗi từ phải viết hoa !!");
            $("#tbTen").addClass("ThongBao");
            return false;
        }
        $("#tbTen").html(""); // Xóa thông báo nếu đúng
        $("#tbTen").removeClass("ThongBao"); // Xóa màu đỏ
        return true;
    }
    // Gắn sự kiện 'blur' để kiểm tra khi rời khỏi ô nhập liệu
    $("#hovaten").blur(kiemTraHoTen);

// Kiểm tra email
    function kiemTraDEmail() {
        var mauKT = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if ($("#email").val() == "") {
            $("#tbEmail").html("Vui lòng nhập email");
            $("#tbEmail").addClass("ThongBao");
            return false;
        }
        if (!mauKT.test($("#email").val())) {
            $("#tbEmail").html("Nhập sai cú pháp");
            $("#tbEmail").addClass("ThongBao");
            return false;
        }
        $("#tbEmail").html("");
        $("#tbEmail").removeClass("ThongBao");
        return true;
    }
    $("#email").blur(kiemTraDEmail);
    

// Kiểm tra mật khẩu có khớp hay không
    $('#DangKy').click(function() {
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        if (password === confirmPassword) {
            $('#tbCf_Pass').text("Mật khẩu khớp.").css("color", "green");
        } else {
            event.preventDefault();
            $('#tbCf_Pass').text("Mật khẩu không khớp. Vui lòng kiểm tra lại.").css("color", "red");
        }
    });

    // Kiểm tra ngay sinh có được nhập hay chưa
    function KiemTraNgaySinh() {
        if ($('#ngaySinh').val() == "") {
            $('#tbNS').html("Bắt buộc nhập!")
            $('#tbNS').addClass("ThongBao")
            return false;
        }

        $("#tbNS").html("");
        $("#tbNS").removeClass("ThongBao");
        return true;
    }
    $('#ngaySinh').blur(KiemTraNgaySinh);

    // Kiểm tra nhập lại mật khẩu có được nhập hay chưa
    function KiemTraPass2() {
        if ($('#confirmPassword').val() == "") {
            $('#tbCf_Pass').html("Bắt buộc nhập!")
            $('#tbCf_Pass').addClass("ThongBao")
            return false;
        }

        $("#tbCf_Pass").html("");
        $("#tbCf_Pass").removeClass("ThongBao");
        return true;
    }
    $('#confirmPassword').blur(KiemTraPass2);
    
    // ĐĂNG NHẬP
    // Kiểm tra use name có được nhập hay chưa
    function KiemTraUSE() {
        if ($('#username').val() == "") {
            $('#tbUse').html("Bắt buộc nhập!")
            $('#tbUse').addClass("ThongBao")
            return false;
        }

        $("#tbUse").html("");
        $("#tbUse").removeClass("ThongBao");
        return true;
    }
    $('#username').blur(KiemTraUSE);

    // Kiểm tra password có được nhập hay chưa
    function KiemTraPass() {
        if ($('#password').val() == "") {
            $('#tbPass').html("Bắt buộc nhập!")
            $('#tbPass').addClass("ThongBao")
            return false;
        }

        $("#tbPass").html("");
        $("#tbPass").removeClass("ThongBao");
        return true;
    }
    $('#password').blur(KiemTraPass);
    
});