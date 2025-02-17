﻿function CreateEmployee(id) {
    var data = {};
    data.name = $('#name-input').val();
    data.DepartmentId = $('select[name="department"] option').filter(':selected').val();
    $.ajax({
        url: "https://localhost:44387/EmployeeDashboard/PostCreate",
        type: "post",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (e) {
            Swal.fire({
                icon: 'success',
                title: 'Created Success',
                timerProgressBar: true,
                timer: 3000,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = Swal.getTimerLeft()
                            }
                        }
                    }, 100)
                },
                willClose: () => {
                    window.location.href = "/EmployeeDashboard/Index";
                    clearInterval(timerInterval)
                }
            })
        }
    })
}