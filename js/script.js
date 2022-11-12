$(document).ready(()=>{
  $("#shareBtn").on("click", ()=>{
    $("#tooltip").toggleClass('active-state');
    $("#shareBtn").toggleClass('tooltip-btn');
    $("#shareBtnIcon").toggleClass('tooltip-btn');

  });
  $("#shareBtnIcon").on("click", ()=>{
    $("#tooltip").toggleClass('active-state');
    $("#shareBtn").toggleClass('tooltip-btn');
    $("#shareBtnIcon").toggleClass('tooltip-btn');
  })
});

