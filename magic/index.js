$(document).ready(function(){
    $('.container').hide();
    
    $('#project').click(function(){
        $('#intro').hide();
        $('#projects').removeClass('animated bounceOutUp');
        $('#projects').addClass('animated bounceInDown');
        $('.container').show();
        $('#p1').siblings().removeClass('selected');
        $('#p1').addClass('selected');
        $('.details .P1').show();
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
        $('#intro').show();
        //$('.container').hide();
        $('.container').removeClass('animated bounceInDown');
        $('.container').addClass('animated bounceOutUp');
        setTimeout(function(){
            $('.container').hide();
        }, 1000);
    });
});