// Combined.js

$(document).ready(function () {
    // Global Settings
    let edit = false;

    // Testing Jquery
    console.log('jquery is working!');
    fetchCertificates()
    $('#certificate-result').hide();

    var url = window.location.href;
    var searchValue = new URL(url).searchParams.get("search");

    $(function () {
        if (searchValue) {
            $('#search').val(searchValue).trigger("keyup");
        }
    });

    // search key type event
    $('#search').keyup(function () {
        if ($('#search').val()) {
            let search = $('#search').val();
            $.ajax({
                url: hostNameServerUrl + 'certificate-search.php',
                data: { search },
                type: 'POST',
                success: function (response) {
                    if (!response.error) {
                        let tasks = JSON.parse(response);
                        let template = '';
                        tasks.forEach(certificate_list => {
                            template += `
                            <li certificate_Id="${certificate_list.id}"><a href="#" class="certificate-item">${certificate_list.certificate}</a></li>
                            `
                        });
                        $('#certificate-result').show();
                        $('#container').html(template);
                    }
                }
            })
        }
    });

    $('#certificate-form').submit(e => {
        e.preventDefault();
        const postData = {
            certificate: $('#certificate').val(),
            description: $('#description').val(),
            date: $('#date').val(),
            id: $('#taskId').val()
        };
        const url = edit === false ? 'certificate-add.php' : 'certificate-edit.php';
        console.log(postData, url);
        $.post(hostNameServerUrl + url, postData, (response) => {
            console.log(response);
            $('#certificate-form').trigger('reset');
            fetchCertificates();
        });
    });

    function fetchCertificates() {
        $.ajax({
            url: hostNameServerUrl + 'certificate-list.php',
            type: 'GET',
            success: function (response) {
                const tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(certificate_list => {
                    template += `
                        <tr taskId="${certificate_list.id}">
                            <td>${certificate_list.id}</td>
                            <td><a href="#" class="certificate-item"> ${certificate_list.certificate} </a></td>
                            <td>${certificate_list.date}</td>
                            <td>${certificate_list.description}</td>
                            <td>
                                <button class="certificate-delete btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    `;
                });
                $('#tasks').html(template);
            }
        });
    }

    function initForm() {
        edit = false;
        $('#certificate').val("");
        $('#description').val("");
        $('#date').val("");
        $('#taskId').val("");
        $('#task-result').hide();
    }

    $(document).on('click', '.certificate-item', (e) => {
        var element = $(this)[0].activeElement.parentElement.parentElement;
        var id = $(element).attr('taskId');
        if (!id) {
            element = $(this)[0].activeElement.parentElement;
            id = $(element).attr('taskId');
        }

        if (id) {
            $.post(hostNameServerUrl + 'certificate-single.php', { id }, (response) => {
                const task = JSON.parse(response);
                $('#certificate').val(task.certificate);
                $('#description').val(task.description);
                $('#date').val(task.date);
                $('#taskId').val(task.id);
                edit = true;
            });
            e.preventDefault();
        }
    });

    $(document).on('click', '.certificate-delete', (e) => {
        if (confirm('Are you sure you want to delete it?')) {
            const element = $(this)[0].activeElement.parentElement.parentElement;
            const id = $(element).attr('taskId');
            $.post(hostNameServerUrl + 'certificate-delete.php', { id }, (response) => {
                if (response == 'certificate Deleted Successfully') {
                    initForm();
                    fetchCertificates();
                    $("#search").trigger("keyup");
                }
                alert(response);
            });
        }
    });
});
// certificate.js 내용 끝

// schedules.js 내용 시작
const hostName = window.location.hostname;
const hostNameServerUrl = '/task/';

$(document).ready(function () {
    // Global Settings
    let edit = false;

    // Testing Jquery
    console.log('jquery is working!');
    fetchSchedules();
    $('#schedules-result').hide();

    var url = window.location.href;
    var searchValue = new URL(url).searchParams.get("search");

    $(function () {
        if (searchValue) {
            $('#search').val(searchValue).trigger("keyup");
        }
    });

    $('#schedules-form').submit(e => {
        e.preventDefault();
        const postData = {
            work: $('#work').val(),
            explanation: $('#explanation').val(),
            timework: $('#timework').val(),
            id: $('#workId').val()
        };
        const url = edit === false ? 'schedules-add.php' : 'schedules-edit.php';
        console.log(postData, url);
        $.post(hostNameServerUrl + url, postData, (response) => {
            console.log(response);
            $('#schedules-form').trigger('reset');
            fetchSchedules();
        });
    });

    function fetchSchedules() {
        $.ajax({
            url: hostNameServerUrl + 'schedules-list.php',
            type: 'GET',
            success: function (response) {
                const tasks = JSON.parse(response);
                let template = '';
                tasks.forEach(schedule_list => {
                    template += `
                        <tr workId="${schedule_list.id}">
                            <td>${schedule_list.id}</td>
                            <td><a href="#" class="schedules-item"> ${schedule_list.work} </a></td>
                            <td>${schedule_list.timework}</td>
                            <td>${schedule_list.explanation}</td>
                            <td>
                                <button class="schedules-delete btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    `;
                });
                $('#schedule').html(template);
            }
        });
    }

    function initForm() {
        edit = false;
        $('#work').val("");
        $('#explanation').val("");
        $('#timework').val("");
        $('#workId').val("");
        $('#schedules-result').hide();
    }

    $(document).on('click', '.schedules-item', (e) => {
        var element = $(this)[0].activeElement.parentElement.parentElement;
        var id = $(element).attr('workId');
        if (!id) {
            element = $(this)[0].activeElement.parentElement;
            id = $(element).attr('workId');
        }

        if (id) {
            $.post(hostNameServerUrl + 'schedules-single.php', { id }, (response) => {
                const task = JSON.parse(response);
                $('#work').val(task.work);
                $('#explanation').val(task.explanation);
                $('#timework').val(task.timework);
                $('#workId').val(task.id);
                edit = true;
            });
            e.preventDefault();
        }
    });

    $(document).on('click', '.schedules-delete', (e) => {
        if (confirm('Are you sure you want to delete it?')) {
            const element = $(this)[0].activeElement.parentElement.parentElement;
            const id = $(element).attr('workId');
            $.post(hostNameServerUrl + 'schedules-delete.php', { id }, (response) => {
                if (response == 'schedules Deleted Successfully') {
                    initForm();
                    fetchSchedules();
                    $("#search").trigger("keyup");
                }
                alert(response);
            });
        }
    });
});
// schedules.js 내용 끝
