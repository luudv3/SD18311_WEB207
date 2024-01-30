window.AddStudentController = function($scope, $http, $location){
    $scope.title = "Thêm thông tin sinh viên";
    $scope.addStudent = function (){

        // Call API
        const apiStudents = 'http://localhost:3000/student';

        // tạo 1 biến để kiểm tra
        let flag = true;
        // kiểm tra từng dữ liệu
        $scope.kiemTra = {
            name: false,
            year: false,
            course: false
        }

        // kiểm tra dữ liệu
        if(!$scope.student || !$scope.student.name){
            $flag = false;
            $scope.kiemTra.name = true;
        }

        if(!$scope.student || !$scope.student.year){
            $flag = false;
            $scope.kiemTra.year = true;
        }

        if(!$scope.student || !$scope.student.course){
            $flag = false;
            $scope.kiemTra.course = true;
        }

        if(flag){
        //Dữ liệu nhập từ input
        let newStuden = {
            ten: $scope.student.name,
            namsinh: $scope.student.year,
            chuyennganh: $scope.student.course
        }
        //console.log(newStuden)
        $http.post(
            apiStudents,
            newStuden
        ).then(function(response){
            if (response.status == 201){
                $location.path("trang-chu");
            }
        })
        } else {
            alert("Bạn cần nhập đầy đủ thông tin")
        }

    }
}