$(document).ready(function() {
    $("#width").on("input", function() {
        var width = $("#width").val();
        $("#variableDiv").css("width", width);
    });

    $("#height").on("input", function() {
        var height = $("#height").val();
        $("#variableDiv").css("height", height);
    });

    $("#divColor").on("input", function() {
        var color = $("#divColor").val();
        $("#variableDiv").css("background-color", color);
    });

    $("#radiusRange").on("input", function() {
        var radius = `${$("#radiusRange").val()}%`;
        $("#variableDiv").css("border-radius", radius);
    });
});