// HANDLER
$('.handler').on('click', function(){
    $('.detailOrder').toggleClass('oculto').siblings().removeClass('oculto');
    $('.stateOrder').toggleClass('oculto').siblings().removeClass('oculto');
});

// HANDLER Pedido
$('.handlerPedido').on('click', function(){
    $('.detailOrder').toggleClass('resume');
    $('.sidebar').toggleClass('resume');
    $('.stateOrder').toggleClass('resume');
});

// HANDLER

$('.handler2').on('click', function(){
    $('#chat').toggleClass('oculto');
});

// HANDLER
$('.handlerSide').on('click', function(){
    $('.sidebar').toggleClass('oculto').siblings().removeClass('oculto');
});

// HANDLER MOBILE
$('.handlerSide2').on('click', function(){
    $('.sidebar').toggleClass('ocultomov').siblings().removeClass('ocultomov');
});

$('.pinmap').on('click', function(){
    $(this).parent().toggleClass('active').siblings().removeClass('active');
});

function despejarMapa() {
    if( $('.detailOrder').hasClass('oculto') ){
        $('.detailOrder').removeClass('oculto');
        $('.stateOrder').removeClass('oculto');
    }else{
        event.preventDefault();
        $('.detailOrder').fadeOut( 100 );
        $('.detailOrder').fadeIn( 100 );
        $('.stateOrder').fadeOut( 200 );
        $('.stateOrder').fadeIn( 200 );
        // $(".detailOrder .cont").effect( "shake", { direction: "up", times: 4, distance: 10}, 1000 );
    }
}


// DD
// $('.sidebar .order').on('click', function(){
//     despejarMapa();
//     $(this).toggleClass('active').siblings().removeClass('active');
//     $('.opOne').addClass('active');
//     $('.opTwo').removeClass('active');
//     event.preventDefault();
// });

$('.detailOrder .order').on('click', function(){
    if( $(this).hasClass('active') ){
        event.preventDefault();
    }else{
        $(this).toggleClass('active').siblings().removeClass('active');
    }
});

// CLOSE ORDER
$('.asignar').on('click', function(){
    despejarMapa();
    $('.opTwo').addClass('active');
    $('.opOne').removeClass('active');
   
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
});

function newMessage() {
    message = $(".cajaTexto input").val();
    if($.trim(message) == '') {
      return false;
    }
    $('<li class="enviado"><p>' + message + '</p></li>').appendTo($('.mensajes ul'));
    $('.cajaTexto input').val(null);
    $('.cardOrder.active .detalle').html( message);
    $(".scrolledarea").animate({ scrollTop: $(document).height() }, "fast");
  };
  
  $('.submit22').click(function() {
    newMessage();
  });
  
  $(window).on('keydown', function(e) {
    if (e.which == 13) {
      newMessage();
      return false;
    }
});


$('.btn-ped').on('click', function(){
    $("body").animate({ scrollTop: 1200 }, "fast");
});
var band = 0; 
$('.checkboxView').on('click', function(){
   
    if (band == 0) {
        band = 1
        $("#searchqy").text("Télefono");
    }else{
        band = 0
        $("#searchqy").text("Cliente");
    }
});

$('#basic2').selectpicker({
    liveSearch: true,
    maxOptions: 1
  });
  

// 
$('.paymode').on('click', function(){
    $(this).toggleClass('active').siblings().removeClass('active');
});


