$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function() {
    $('[data-toggle="popover"]').popover()
})

$('.carousel').carousel({
    interval: 3000,
})

$("#reserva").on('show.bs.modal', function(e) {
    console.log("Mostrando modal");
    $("#reservaBtn").removeClass("btn-info");
    $("#reservaBtn").addClass("btn-primary");
    $("#reservaBtn").prop("disabled", true);
})

$("#reserva").on('shown.bs.modal', function(e) {
    console.log("Cerrando modal");
})

$("#reserva").on('hide.bs.modal', function(e) {
    console.log("se oculta modal");
})

$("#reserva").on('hidden.bs.modal', function(e) {
    console.log("Se oculto modal");
    $("#reservaBtn").removeClass("btn-primary");
    $("#reservaBtn").addClass("btn-info");
    $("#reservaBtn").prop("disabled", false);
})