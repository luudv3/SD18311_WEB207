window.DetailStudentController = function($scope,$http,$routeParams){
    $scope.title = "Thông tin chi tiết sinh viên";

    // Lấy thông tin sinh viên
    let studentID = $routeParams.id;

    // link api
    const apiStudents = 'http://localhost:3000/student';

    $http.get(
        `${apiStudents}/${studentID}`
    ).then(function (response){
        if(response.status == 200){
            console.log(response.data);
            $scope.student = {
                editID: response.data.id,
                name: response.data.ten,
                year: response.data.namsinh,
                course: response.data.chuyennganh

            }
        }
    })
}