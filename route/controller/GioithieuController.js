window.GioithieuController = function($scope, $routeParams){
    $scope.title = "Đây là trang giới thiệu";

    console.log($routeParams);

    // Khai báo mảng students
    $scope.students = [
        {
            ten: "Đặng Vũ Lưu",
            namSinh: 1996,
            chuyenNganh: "CNTT",
        },
        {
            ten: "Đặng Vũ Lưu 2",
            namSinh: 1996,
            chuyenNganh: "CNTT", 
        }
    ]

    $scope.creatStudent = function (){
        let newStudent = {
            ten:$scope.student.name,
            namSinh: $scope.student.year,
            chuyenNganh : $scope.student.course
        }
        $scope.students.push(newStudent);
    }

}