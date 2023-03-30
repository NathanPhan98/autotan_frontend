function kiemtra() {  
    var ten, sdt;
    ten = document.getElementById("tenkhachhang");
    sdt = document.getElementById("sdtkhachhang");
    if(ten.value == 0)
    {
        thongbaoten.innerText = "Trường này là bắt buộc"
        tenkhachhang.style.border = 'red solid 4px'
    }
    else {
        thongbaoten.innerText = ""
        tenkhachhang.style.border = 'green solid 4px'
    }
     
    if(sdt.value == 0)
    {
        thongbaosdt.innerText = "Trường này là bắt buộc"
        sdtkhachhang.style.border = 'red solid 4px'
    }
    else if((isNaN(sdt.value)))
    {
        thongbaosdt.innerText = "Bạn phải nhập vào số điện thoại"
        sdtkhachhang.style.border = 'red solid 4px'
    }
    else {
        thongbaosdt.innerText = ""
        sdtkhachhang.style.border = 'green solid 4px'
    }
    
    if(thongbaoten.innerText== "" && thongbaosdt.innerText=="")
        ketqua.innerText="Cảm ơn "+ten.value+" đã đăng ký, Nhân viên tư vấn sẽ liên hệ cho bạn !"
}
