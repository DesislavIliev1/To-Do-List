$(function(){
    // $('.imp').change(function(){
    //     let imput = $('.imp').val();
    //     if(imput!=''){
    // $('.to-do-list').append('<li class="mt-2">' + '<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> '+
    // ' <label class="form-check-label" for="flexCheckDefault">'+imput+ '<i class="bi bi-pencil-square m-2"></i>'+'<i class="bi bi-trash  lg m-2"></i> ');
    //     };
    // });
   
    $('.add-btn').click(function(){
        let imput = $('.imp').val();
        if(imput!=''){
    $('.to-do-list').append('<li list-name class="mt-2 editable">'+ '<input type="text" class="edit" style="display:none"/>'+ imput + '<i class="bi bi-check-lg fa-2x check-btn m-2"></i>' +'<i class="bi bi-pencil-square edit-btn m-2"></i>'+'<i class="bi bi-trash remove-btn  lg m-2"></i> ');
    $(".imp").val(null);
    };
   
    });

    $('ol').on('click', '.remove-btn',function(){
        $(this).parent('li').remove();

    });

    $('ol').on('click', '.check-btn',function(){
        $(this).parent('li').toggleClass('checked');

    });
   
    

    $('ol').on('click', '.edit-btn',function(){
     
     $(this).parent('li').show().html('<input class="edit-input" type="text" value="'+ $(this).text() +'">'+ '<button class="btn btn-primary m-2 save-btn" type="button">Save</button>')
         
    });

    $('ol').on('click', '.save-btn',function(){
        let editInput = $('.edit-input').val();
        if(editInput!=''){
       
        $(this).parent('li').html('<input type="text" class="edit" style="display:none"/>'+ editInput + '<i class="bi bi-check-lg fa-2x check-btn m-2"></i>' +'<i class="bi bi-pencil-square edit-btn m-2"></i>'+'<i class="bi bi-trash remove-btn  lg m-2"></i> ');
        
    };
    
        
     });


    $('.submit-btn').click(function(){

    });


   

   
    

});


