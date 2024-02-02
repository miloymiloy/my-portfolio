
// var storedBlog = JSON.parse(localStorage.getItem('link'));

// const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

$(document).ready(function(){
    const myBlog = [];

    //PROTOTYPE FOR SEND MESSAGE    
    var sendmesstriggerclick = 'no';
    $('.sendmessageTrigger').click(function(){
        if(sendmesstriggerclick == 'no'){
            $('.message-box').css('display','block');
            $('.sendmessageTrigger').val('Close');
            $('.sendmessageTrigger').removeClass('btn-primary');
            $('.sendmessageTrigger').addClass('btn-danger');
            sendmesstriggerclick = 'yes';
        }
        else{
            $('.message-box').css('display','none');
            $('.sendmessageTrigger').val('Send A Message');
            $('.sendmessageTrigger').removeClass('btn-danger');
            $('.sendmessageTrigger').addClass('btn-primary');
            sendmesstriggerclick = 'no';
        }

    })

    // let date = new Date();

    // let month = months[date.getMonth()];
    // let day = date.getDate();
    // let year = date.getFullYear();

    // let time = 0;
	// let hrs = date.getHours();
	// let min = date.getMinutes();

    // if (min < 10){
    //     min = "0" + min;
    // }

    // if (hrs >= 13){
    //     hrs = hrs - 12;
    //     time = hrs + ":" + min + " PM";
    // }
    // else{
    //     time = hrs + ":" + min + " AM";
    // }


    // //DISPLAY MESAGES SENT
    // $('.sendmsg').click(function(){
    //     storedBlog.push($('.nameinput').val());
    //     localStorage.setItem('link', JSON.stringify(storedBlog));
    //     console.log($('.nameinput').val())
    // })
    // console.log(storedBlog)
    // $.each(storedBlog, function(index, value){
    //     $(".result").append(index + ": " + value + '<br>');
    // });


    // $('.result').click(function(e){
    //         e.preventDefault();  
    //         $(this).closest('.result-container').find('.result').css('display','none');
    // })

    // var contact = $('.contactinput').val();
    // var message = $('.messageinput').val();

    // $('.sendmsg').click(function(){
    //     console.log(contact)
    //     if(contact.length > 4 && message.length > 1){
    //         console.log('hi')   
            
    //     }
    //     $('#sentmessPopup').modal('show'); 
    // })
})