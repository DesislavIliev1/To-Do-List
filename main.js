$(function(){
    // $('.imp').change(function(){
    //     let imput = $('.imp').val();
    //     if(imput!=''){
    // $('.to-do-list').append('<li class="mt-2">' + '<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> '+
    // ' <label class="form-check-label" for="flexCheckDefault">'+imput+ '<i class="bi bi-pencil-square m-2"></i>'+'<i class="bi bi-trash  lg m-2"></i> ');
    //     };
    // });
   
    $('.submit-btn').click(function(){
        let imput = $('.imp').val();
        if(imput!=''){
    $('.to-do-list').append('<li class="mt-2">'  + imput + '<i class="bi bi-check-lg fa-2x check-btn m-2"></i>' +'<i class="bi bi-pencil-square edit-btn m-2"></i>'+'<i class="bi bi-trash remove-btn  lg m-2"></i> ');
        };
    });

    $('ol').on('click', '.remove-btn',function(){
        $(this).parent('li').remove();

    });

    $('ol').on('click', '.check-btn',function(){
        $(this).parent('li').toggleClass('checked');

    });


    $('.submit-btn').click(function(){

    });
   

   
    

});