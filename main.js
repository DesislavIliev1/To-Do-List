$(function(){
    // $('.imp').change(function(){
    //     let imput = $('.imp').val();
    //     if(imput!=''){
    // $('.to-do-list').append('<li class="mt-2">' + '<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"> '+
    // ' <label class="form-check-label" for="flexCheckDefault">'+imput+ '<i class="bi bi-pencil-square m-2"></i>'+'<i class="bi bi-trash  lg m-2"></i> ');
    //     };
    // });
    
    $('.add-btn').click(function(){
        let input = $('.imp').val();
      //  let todosArray = [];
      //  localStorage.setItem("todos", JSON.stringify(input));
       
      //  todosArray.push(input);
       // todosArray = JSON.parse(localStorage.getItem("todos"))
        
       
        
       
    if(input!=''){
    $('.to-do-list').append('<li  list-name class="mt-2 position-relative ">'+ '<input type="text" class="edit" style="display:none"/>'+ input + '<i class="bi bi-check-lg fa-2x check-btn position-absolute top-0 end-0 me-5"></i>' +'<i class="bi bi-pencil-square edit-btn position-absolute top-0 end-0 me-4 "></i>'+'<i class="bi bi-trash remove-btn position-absolute top-0 end-0 me-1"></i></li>');
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
     
     $(this).parent('li').show().html('<input class="edit-input" type="text" value="'+ $(this).text() +'">'+ '<button class="btn btn-success m-2 save-btn" type="button">Save</button>')
         
    });

    $('ol').on('click', '.save-btn',function(){
        let editInput = $('.edit-input').val();
        if(editInput!=''){
       
        $(this).parent('li').html('<input type="text" class="edit" style="display:none"/>'+ editInput + '<i class="bi bi-check-lg fa-2x check-btn position-absolute top-0 end-0 me-5"></i>' +'<i class="bi bi-pencil-square edit-btn position-absolute top-0 end-0 me-4 "></i>'+'<i class="bi bi-trash remove-btn position-absolute top-0 end-0 me-1 "></i></li>');
        
    };
    
        
     });

     $('#sortable').sortable();({

     });

       function saveLocalStorage(input){
        let inputTask = localStorage.getItem("localTask");
        if(inputTask == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(inputTask);

        }
        taskObj.push(input);
        localStorage.setItem("localTask", JSON.stringify(taskObj));

        


     }




    
});

function submit(input) {
    var names = document.getElementById("names").value;
    var allNames = JSON.parse(localStorage.getItem("allNames")) || [];
    allNames.push(input);
    localStorage.setItem("allNames", JSON.stringify(allNames));
    document.getElementById("names").value = '';
    document.getElementById("namesList").innerHTML = localStorage.getItem("allNames");
  }
  
  document.getElementById("namesList").innerHTML = localStorage.getItem("allNames");






