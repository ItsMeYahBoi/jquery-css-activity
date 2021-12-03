
$('#spiderman').animate({
  top: "-390px"

}, 1000, 'swing', () => {
  
})

$('#origins').animate({ left: "10%"}, 300, 'swing',() => {
  $('#abilities').animate({
    left: "10%"
  }, 300, 'swing',() => {
    $('#weakness').animate({
      left: "10%"
    }, 300, 'swing',() => {
      $('#notable-allies').animate({
        left: "10%"
      }, 300, 'swing',() => {
        $('#notable-enemies').animate({
          left: "10%"
        }, 300, 'swing',() => {
        
        })
      })
    })
  })
})


$('#origins').on('click', () => {
  if ( $('#origins-content').is(":hidden") ) {
    $("#origins-content").css({ display: 'flex' })
    $("#origins-content").animate({ top: '30px', opacity: 1 }, 400, 'swing')
  } else {
    $("#origins-content").animate({ top: '0px', opacity: 0 }, 400, 'swing',
      () => {
        $("#origins-content").css({ display: 'none' })
      }
    )
  }
})

$('#abilities').on('click', () => {
  if ( $('#abilities-content').is(":hidden") ) {
    $("#abilities-content").css({ display: 'flex' })
    $("#abilities-content").animate({ top: '30px', opacity: 1 }, 400, 'swing')
  } else {
    $("#abilities-content").animate({ top: '0px', opacity: 0 }, 400, 'swing',
      () => {
        $("#abilities-content").css({ display: 'none' })
      }
    )
  }
})

$('#weakness').on('click', () => {
  if ( $('#weakness-content').is(":hidden") ) {
    $("#weakness-content").css({ display: 'flex' })
    $("#weakness-content").animate({ top: '30px', opacity: 1 }, 400, 'swing')
  } else {
    $("#weakness-content").animate({ top: '0px', opacity: 0 }, 400, 'swing',
      () => {
        $("#weakness-content").css({ display: 'none' })
      }
    )
  }
})

$('#notable-allies').on('click', () => {
  if ( $('#notable-allies-content').is(":hidden") ) {
    $("#notable-allies-content").css({ display: 'flex' })
    $("#notable-allies-content").animate({ top: '30px', opacity: 1 }, 400, 'swing')
  } else {
    $("#notable-allies-content").animate({ top: '0px', opacity: 0 }, 400, 'swing',
      () => {
        $("#notable-allies-content").css({ display: 'none' })
      }
    )
  }
})

$('#notable-enemies').on('click', () => {
  if ( $('#notable-enemies-content').is(":hidden") ) {
    $("#notable-enemies-content").css({ display: 'flex' })
    $("#notable-enemies-content").animate({ top: '30px', opacity: 1 }, 400, 'swing')
  } else {
    $("#notable-enemies-content").animate({ top: '0px', opacity: 0 }, 400, 'swing',
      () => {
        $("#notable-enemies-content").css({ display: 'none' })
      }
    )
  }
})
x 