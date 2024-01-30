window.ListStudentController = function($scope, $http){
    $scope.title = "Danh sách sinh viên";

    //Thực hiện call API
    const apiStudents = "http://localhost:3000/student";

    function getData(){
        $http.get(apiStudents).then(function (response){
            console.log(response);
            console.log(response.data);

            if (response.status == 200){
                $scope.liststudent = response.data;
            }
        })
    }
    getData();

    // delete
    $scope.deleteStudent = function(deleteID){
        if(deleteID){
        
        let confirm = window.confirm("Bạn có chắc chắn muốn hay không?");
        if(confirm){
            $http.delete(
                `${apiStudents}/${deleteID}`
            ).then(function(response){
                if(response.status == 200){
                    alert ("Xóa thành công");
                }
            })
        }
            }
    }
}