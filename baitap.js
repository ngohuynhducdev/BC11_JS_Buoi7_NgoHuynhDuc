//Nhập số nguyên cho người dùng vào mảng (Chung)
var listNumber = [];
function getEle(id) {
    return document.getElementById(id);
}
getEle("btnAddNumber").addEventListener("click", function (event) {
    event.preventDefault();


    var number = getEle("txtNumber").value;
    number = parseInt(number);
    listNumber.push(number);
    console.log(listNumber);

    //Hiển thị ListNumber ra UI
    getEle("showListNumber").innerHTML = "Danh sách: " + listNumber;
});
/**
 * Bài tập 1: tổng các số dương
 */
function handleTongSoDuong() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương !");
        return;
    }
    var tong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            tong += listNumber[i];
        }
    }
    getEle("tongSoDuong").innerHTML = "Tổng các số dương là: " + tong;
}

/**
 * Bài tập 2: Đếm có bao nhiêu số dương
 */
function handleDemSoDuong() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương !");
        return;
    }
    var count = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            count++;
        }
    }
    getEle("demSoDuong").innerHTML = "Có tất cả là " + count + " số dương";
}

/**
 * Bài tập 3: Tìm số nhỏ nhất trong mảng
 */
function handleSoNhoNhat() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương hoặc số nguyên âm !");
        return;
    }
    //Lấy lại mảng listNumber ng dùng nhập vào
    var soNhoNhat = Math.min.apply(Math, listNumber);
    getEle("timSoNhoNhat").innerHTML = "Số nhỏ nhất trong mảng là số " + soNhoNhat;
}

/**
 * Bài tập 4: Tìm số Dương nhỏ nhất trong mảng
 * Xử lý :Phải so sánh cùng 1 kiểu số dương
 */
function handleSoDuongNhoNhat() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương !");
        return;
    }
    //Khai báo số nhỏ nhất trong mảng
    var minDuong = Math.min.apply(Math, listNumber);
    //Số Dương Đầu tiên
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            listNumber = minDuong;
        } else {
            alert("Vui Lòng Chỉ Nhập Số Dương !");
            return 0;
        }
    }

    //So Duong Nho Nhat
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0 && listNumber[i] < minDuong) {
            listNumber[i] = minDuong;
            break;
        }
    }
    getEle("timSoDuongNhoNhat").innerHTML = "Số Dương nhỏ nhất là số " + minDuong;
}
/**
 * Bài tập 5: Số chẵn cuối cùng
 */
function handleSoChanCuoiCung() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương hoặc số nguyên âm !");
        return;
    }
    // var thongBao = "";
    // if (listNumber[i] == -1) {
    //     thongBao = "tất cả phần tử đều là số lẻ !";
    // } else {
    //     thongBao = "số chẵn cuối cùng là :" + listNumber[i];
    // }
    //Vị trí chẵn đầu tiên
    var soChanCuoi = -1;
    for (var i = listNumber.length - 1; i < listNumber.length; i--) {
        if (listNumber[i] % 2 == 0) {
            soChanCuoi = listNumber[i];
            break;
        }
        return -1;
    }
    getEle("timSoChanCuoiCung").innerHTML = "Số chẵn cuối cùng trong mảng là " + soChanCuoi;
}

/** 
 * Bài tập 6: Đổi vị trí 2 gtri trong mảng
 */
function handleDoiViTri() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương hoặc số nguyên âm !");
        return;
    }
    var viTri1 = getEle("txtViTri1").value;
    var viTri3 = getEle("txtViTri3").value;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber.length > 3) {
            viTri1 = listNumber[0];
            viTri3 = listNumber[2];
        } else {
            alert("Vui lòng nhập trên 3 số nguyên !");
        }
    }
    var kq = 0;
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber.length > 3) {
            [viTri1, viTri3] = [viTri3, viTri1];
            kq = [viTri3, viTri1];
        }
    }
    getEle("doiViTri").innerHTML = "Vị trí thứ 1 và thứ 3 trong mảng " + listNumber + " đã thay đổi thành " + kq;
}

/**
 * Bài tập 7 : Sắp xếp mảng theo thứ tự tăng dần
 */
function handleSapXep() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương hoặc số nguyên âm !");
        return;
    }
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }
    getEle("SapXepTangDan").innerHTML = "Mảng theo thứ tự tăng dần là: [" + listNumber + "]";
}

/**
 * Bài tập 8:Tìm số nguyên tố đầu tiên trong mảng
 */
function kiemTraSoNguyenTo(x) {
    var check = true;
    //Nếu <2 thì ko phải SNT
    if (x < 2) {
        check = false;
    } else if (x == 2) {
        check = true;
    } else if (x % 2 == 0) {
        check = false;
    } else {
        //lặp từ 3 tới n-1 với bước nhảy là 2
        for (var i = 3; i <= Math.sqrt(x); i += 2) {
            if (x % i == 0) {
                check = false;
                break;
            }
        }
    }
    return check;
};
function handleSoNguyenTo() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương hoặc số nguyên âm !");
        return;
    }


    // }
    //Số nguyên tố đầu tiên

    for (var i = 0; i < listNumber.length; i++) {
        if (kiemTraSoNguyenTo(listNumber[i]) == true) {
            return listNumber[i];
        }
        return -1;
    }
    getEle("SoNguyenTo").innerHTML = listNumber[i];
}
/**
 * 
 * Bài 9: Có bao nhiêu số nguyên trong mảng
 */
var FloatNumber = [];
function handleThemSoThuc() {
    var soThuc = getEle("txtSoThuc").value;
    soThuc = parseFloat(soThuc);
    FloatNumber.push(soThuc);
    console.log(FloatNumber);

    //Hiển thị ListNumber ra UI
    getEle("SoThucTrongMang").innerHTML = "Danh sách: " + FloatNumber;
}
function handleDemSoNguyen() {

    var soNguyen = 0;
    var In = "";
    for (var i = 0; i < FloatNumber.length; i++) {
        if (parseInt(FloatNumber[i]) == FloatNumber[i]) {
            soNguyen++;
        } else {
            In = "Mảng chưa có số nguyên vui lòng nhập lại !"
        }
    }

    getEle("SoNguyenTrongMang").innerHTML = "Có tất cả là " + soNguyen + " số nguyên";
}

/**
 * Bài tập 10:So sánh số âm và số dương
 */
function handleSoSanh() {
    if (listNumber.length === 0) {
        alert("Vui lòng nhập lại số nguyên dương hoặc số nguyên âm !");
        return;
    }
    var SLAm = 0;
    var SlDuong = 0;
    //Đếm số lượng số âm ,số dương
    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            SlDuong++;
        } else {
            SLAm++;
        }
    }
    //Tạo biến max để so sánh
    var max = "";

    if (SlDuong > SLAm) {
        max = "Số lượng số dương nhiều hơn";
    } else {
        max = "Số lượng số âm nhiều hơn";
    }


    getEle("SoSanh").innerHTML = max;
}