//hamburger icon

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });


// opacity tick

$(document).ready(function(){
  $("#ticky").hover( function(){
    $(".tick").toggleClass ("tickHover");
  });
  
})

$(document).ready(function(){
  $("#tickyy").hover( function(){
    $(".ticck").toggleClass ("tickHover");
  });
  
})


// animation button  
  // $(document).ready(function(){
  //     $(".btn").mouseenter(function(){
  //       $(this).css({
  //     backgroundColor:'white',
  //     color:'#c5bc58'
  //   })    
  //       })
        
  //       $(".btn").mouseleave(function(){
  //           $(this).css({
  //         backgroundColor:'#c5bc58',
  //         color:'white'
  //       })    
  //           })    
  // })



// carousel 
//  $(document).ready(function(){
//     $("carousel-track").slick({
//       speed:300,
//       autoplay:true,
//    })
   
//  });

 //DateBox


     // date
 $(document).ready(function(){
   $("[type='text']").click(function (){
     $(this).attr('type', 'date')
   });
 })

    //button request

//  $(document).ready(function(){
//    $(".btnRequest").mouseenter(function(){
//      $(this).animate({
//        color:'white'
//       } 'slow')
//    })
//  })

// hidden title of cards

$(document).ready(function (){
  $(".card1").hover(function(){
    $(".card1 a h1").slideToggle();
  });
})

$(document).ready(function (){
  $(".card2").hover(function(){
    $(".card2 a h1").slideToggle();
  });
})
 
$(document).ready(function (){
  $(".card3").hover(function(){
    $(".card3 a h1").slideToggle();
  });
})

$(document).ready (function () {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
      $(".scaling").show();
    } else {
      $(".scaling").hide();
    }
  });
})

$(document).ready(function(){
  
  $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
  });
 
  $('.three').click(function(){
      if($('.three').hasClass("active")){
        closeMenu()
      }else{
        openMenu()
      }
});


function openMenu(){
    $('.three').addClass("active");
    $('.drawer-menu').animate(
      {
        width: "20vw",
        height:"100vh"
      },'slow')

   $(".three").animate(
    {
        marginRight : '10vw'
    },'slow')

  $(".first-logo").css({
    display : "none"
  
  })
}
})
function closeMenu() {
  $('.three').removeClass("active")
  $('.drawer-menu').animate(
    {
      width: "0",
      height:"100vh"
    },100)
    $(".first-logo").css({
      display : "flex"
    
    })
    $(".three").animate(
      {
          marginRight : '0vw'
      },'slow')
}

