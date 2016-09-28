$(document).ready(function() {
    $(document).on("click", ".description", function() {
        $(this).html($(this).attr("alt-text"));
    });


    $("form").submit(function() {
        var firstName = $("#firstName").val(),
            lastName = $("#lastName").val(),
            description = $("#description").val();
        var card ="<div class='card'><h2>" + firstName + " " + lastName + "</h2><p class='description' alt-text=" + description + ">Click for description!</p></div>";
        $("#cards").append(card);
        $(".card").css({
            "border": "1px solid black",
            "width": "250px",
            "height": "auto"
        });
        $("#firstName").val("");
        $("#lastName").val("");
        $("#description").val("");
        return false;
    });
});
