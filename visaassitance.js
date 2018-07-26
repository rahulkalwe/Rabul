var VisaAssistanceCountry = function () {
    var visaId = $('#visaId').val();
    $('#tblEmployee').DataTable({

        "ajax": {

            "url": "/CMSForStudents/getVisaAssistanceCountry/" + visaId,
            "type": "POST",
            "datatype": "json",

        },
        "columnDefs":
        [{
            "targets": [0],
            "visible": false,
            "searchable": false
        }],

        "columns": [
            { "data": "visaCountryId", "name": "visaCountryId"},
            { "data": "countryName", "name": "countryName" },
            { "data": "contentOne", "name": "contentOne" },
            { "data": "contentTwo", "name": "contentTwo" },
            {
                "data": "imageUrlOne", "width": "20%", "render": function (data, type, row) {
                    return '<img src="' + data + '" class="img-responsive" style="width: 100%;"/>';
                }
            },
            {
                "data": "imageUrlTwo", "width": "20%", "render": function (data, type, row) {
                    return '<img src="' + data + '" class="img-responsive" style="width: 100%;"/>';
                }
            },
            {
                "data": "imageUrlThree", "width": "20%", "render": function (data, type, row) {
                    return '<img src="' + data + '" class="img-responsive" style="width: 100%;"/>';
                }
            },
            {
                "data": "imageUrlFour", "width": "20%", "render": function (data, type, row) {
                    return '<img src="' + data + '" class="img-responsive" style="width: 100%;"/>';
                }
            },
          
            {
                "render": function (data, type, full, meta) { return '<a href="/CMSForStudents/EditVisaAssistanceCountry/' + full.visaCountryId + '"><span class="glyphicon glyphicon-edit"></span></a>'; }
            },
            {
                data: null, render: function (data, type, row) {
                    return (data.isActive == true) ? '<span class="glyphicon glyphicon-ok correct"></span>' : '<span class="glyphicon glyphicon-remove correct"></span>';

                }
            },
            {
                data: null, render: function (data, type, row) {

                    return "<a href='#' id='delete' onclick=Deletedata('" + row.visaCountryId + "'); ><span class='glyphicon glyphicon-trash correct color-red'></span></a>";
                }
            },


        ]
    });


    return {
        Init: init,

    }
}();

function Deletedata(visaCountryId) {


    if (confirm("Are you sure you want to delete ...?")) {
        Delete(visaCountryId);
    }
    else {
        return false;
    }
}
function Delete(visaCountryId) {
    $.ajax({
        url: "/CMSForStudents/DeleteCountryOption?id=" + visaCountryId,
        method: "POST",
        datatype: "json",
        success: function (data) {
            //

            // $.post(url, { ID: universityDetailId }, function (data)
            {
                if (data != null) {
                    var url = "/CMSForStudents/VisaAssistanceCountry/";
                    window.location.href = url;
                }
                else {
                    alert("Something Went Wrong!");
                }
            }
        },
        error: function (data) {
            location.reload();
        },
    });
}




