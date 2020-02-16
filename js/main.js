function makeBold() {
  var ban = document.getElementById("mytext");
  if (ban.style.fontWeight != 'bold') {
    ban.style.fontWeight = 'bold';
  } else {
    ban.style.fontWeight = 'normal';
  }
}


function makeItalic() {
  var ban = document.getElementById("mytext");
  if (ban.style.fontStyle != 'italic') {
    ban.style.fontStyle = 'italic';
  } else {
    ban.style.fontStyle = 'normal';
  }
}




function makeUnderline() {
  var ban = document.getElementById("mytext");
  if (ban.style.textDecoration != 'underline') {
    ban.style.textDecoration = 'underline';
  } else {
    ban.style.textDecoration = 'none';
  }
}


function ChangeSize() {
  var userfontsize = document.getElementById("size").value;
  var ban = document.getElementById("mytext");
  ban.style.fontSize = userfontsize
}


function ChangePolice() {
  var UserPolice = document.getElementById("police").value;
  var ban = document.getElementById("mytext");
  ban.style.fontFamily = UserPolice;


}

$(".element").click(function () {
  $("#fade").modal({
    fadeDuration: 100
  });
})


// $("#imagewrap").click(function () {
//   $("#element1").slideUp("slow");
// });

