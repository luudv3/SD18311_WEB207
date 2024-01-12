// Khai báo mảng dữ liệu nhân viên
// Tên, năm sinh, mức lương, giới tính (0 là nam, 1 là nữ)
// sử dụng angularjs để hiển thị ra table

let myApp = angular.module("myApp", []);

// Khởi tạo controller
myApp.controller("demoController", function($scope){
$scope.nhanVien = [
    {
        ten: "Đặng Vũ Lưu",
        ngaySinh: new Date("2005-12-20"),
        mucLuong: 10000000,
        gioiTinh: 1
    },
    {
        ten: "Đặng Vũ Lưu 2",
        ngaySinh: new Date("1996-11-20"),
        mucLuong: 10000000,
        gioiTinh: 0
    },
    {
        ten: "Đặng Vũ Lưu 3",
        ngaySinh: new Date("1987-10-20"),
        mucLuong: 10000000,
        gioiTinh: 1
    }
]
$scope.number = 2;
// sự kiện click
// khi click vào nhân viên vào
// hiển thị thông báo
// xin chào + tên nhân viên

$scope.sayHello = function (name){
    alert("Xin chào " + name);
}
});