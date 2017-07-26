$(document).ready(function(){
    $('.container').hide();
    $('#project').click(function(){
        $('#projects').addClass('animated zoomIn');
        $('.container').show();
        setTimeout(function(){$('#projects').removeClass('animated fadeIn');}, 1000);
        $('#p1').addClass('selected');
        $('.details .P1').siblings().hide();
        $('.list').bind('click', function(event) {
        var proid = '#' + event.target.id;
        var proclass = '.' + event.target.id.toUpperCase();
        $(proid).addClass('selected');
        $(proid).siblings().removeClass('selected');
        $('.details ' + proclass).show();
        $('.details ' + proclass).siblings().hide();
        
    });
    });
    $('.back').click(function(){
        $('.container').hide();
    });
});