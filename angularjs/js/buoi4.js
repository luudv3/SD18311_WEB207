// Khởi tạo module
// Set angular cho vùng

let myApp = angular.module("demo", []);
// 2 tham số tên vùng và thành phần phụ thuộc

// khởi tạo controller
myApp.controller("demoController", myFunction);
//2 tham số : Tên controller và hàm
function myFunction($scope){
    // Tham số scope luôn luôn phải có để render dữ liệu ra view
    // khai báo biến
    $scope.xinchao = "Hello Cưng";
}

myApp.controller("infoController", function($scope){
    $scope.ten = "Đặng Vũ Lưu";
    $scope.namsinh = 2005;
    $scope.chuyennganh = "CNTT";

    // Khai báo mảng
    $scope.students = [
        {
            ten: "Đặng Vũ Lưu",
            namsinh: 2005,
            chuyennganh: "CNTT"
        },
        {
            ten: "Luudv3",
            namsinh: 2005,
            chuyennganh: "CNTT"
        },
        {
            ten: "Tạ Xuân An",
            namsinh: 2005,
            chuyennganh: "CNTT"
        },
        {
            ten: "Ngô Quang Cường",
            namsinh: 2005,
            chuyennganh: "CNTT"
        }
    ]

});
