$(function(){
    $('#azul').click(function(){
        $('p').css("background-color", "blue")
        $('p').fadeOut()
    })
    $('#vermelho').click(function(){   
        $('p').css("background-color", "red").css('text-decoration', 'underline')
        $('#message')
        .text("cor alterado para Vermelho!")
        .css({color: 'white', border: '1px solid #fff'})
        .fadeOut(4000)
        .addClass('green')
    })
    $('#toUp')
    .click(function(){
        $('p')
        .css('font-size', '50px')
    })
})

$(function(){
    $('#l1').click(function(){
        $('#1').show()
        $('#2, #3').hide()
    })
    $('#l2').click(function(){
        $('#2').show()
        $('#1, #3').hide()
    })
    $('#l3').click(function(){
        $('#3').show()
        $('#1, #2').hide()
    })
})