window.AddStudentController = function($scope, $http, $location){
    $scope.title = "Thêm thông tin sinh viên";
    $scope.addStudent = function (){

        // Call API
        const apiStudents = 'http://localhost:3000/student';

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
    }
}