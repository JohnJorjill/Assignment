var request;


$(document).ready(() => {
    $("#lookup").click(function () {
        request = $.ajax({
            url: "http://localhost:8080/Dictionary/",
            type: "post",
            data: { word: $('#search1').val() }
        });

        request.done(function (response, textStatus, jqXHR) {
            $("#result").text(response);
        });
    });
});
