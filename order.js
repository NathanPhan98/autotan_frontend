function tinhThanhTien()
{
    var gialoai,giamau,giaphiduong,tinh;
    
    loaix=loaixe.value;
    if(loaix==1)
        gialoai=1000000000;
    else if(loaix==2)
        gialoai=2000000000;
    else if(loaix==3)
        gialoai=3000000000;
    else if(loaix==4)
        gialoai=4000000000;
    else 
        gialoai=0;

    maux=mausac.value;
    if(maux==1||maux==2)
        giamau=0.05;
    else
        giamau=0;
    
    phixe=phiduongbo.value;
    if(phixe==1)
        giaphiduong=130000;
    else if (phixe==2) 
        giaphiduong=780000;
    else if (phixe==3) 
        giaphiduong=1560000;
    else if (phixe==4)
        giaphiduong=2280000;
    else
        giaphiduong=0;

    tinh=gialoai+(gialoai*giamau)+giaphiduong;

    tt.innerText=tinh;
}
