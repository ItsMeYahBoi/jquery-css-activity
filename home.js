
$('#btn').on('click', () =>{
  
})

// $('body').css({
//   backgroundColor: "black"
// })

$('#spiderman').animate({
  top: "-340px"

}, 1000, 'swing', () => {
  
})

$('#origins').animate({ left: "10%"}, 1000, 'swing',() => {
  $('#abilities').animate({
    left: "10%"
  }, 900, 'swing',() => {
    $('#weakness').animate({
      left: "10%"
    }, 800, 'swing',() => {
      $('#notable-allies').animate({
        left: "10%"
      }, 700, 'swing',() => {
        $('#notable-enemies').animate({
          left: "10%"
        }, 600, 'swing',() => {
        
        })
      })
    })
  })
})


$('#origins').on('click', () => {
  // $(".test").css({ display: 'grid' })
  // $(".test").show()
})


// $('#div1').animate({
//   marginRight: "100px"
// }, 500, 'swing', () => {

//   $('#div1').css({
//     backgroundColor: "black"
//   })
// })