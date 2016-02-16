
$(function() {
    /* Make the input border as red*/
    $("input").css("border-color", "red"); 
    
    $(".submit-button").click(function() { 
	   // TODO: Form validation
       var i = 1; 
       $( "li" ).each(function() {
            if(eh_vlid(".word-"+i)) {
                $(".word-"+i).css("border-color", "initial"); 
                //alert ("hihi"); 
                $("span.word-"+i).html($("input.word-"+i).val()); 
                i++; 
            }else{
                $(".word-"+i).css("border-color", "red");
            }
            
        });

       // TODO: Fill in the Madlibs game with the user's input
        // We have 8 input elements each with the class "word-*" where *
        // denotes the number 1-8
        // We also have 8 <span> elements that also have the classes "word-*"
        // where an input.word-n corresponds to a span.word-n
        // You should take the value from each input and use that to set the
        // inner html of each of the corresponsing <span> tags
        // Once you've set all those inner htmls, you can display the whole
        // mad-lib to the user by calling $(".response").show();
        //move span and only need to show// change to the flag. 
       if(i===9){
        $(".response").css("display", "block"); 
       }else{
        $(".response").hide(); 
       }
	
    });

    function eh_vlid(selector){
        if(($(selector).val() === "") || ($.isNumeric($(selector).val())===true)){  
            return 0; 
        }
        return 1; 
    }
  

});



     