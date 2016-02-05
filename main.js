function buttonClick() {
  var inp = document.getElementById('maindisplayform').value;
  console.log(inp);
  $("#first").removeClass('active');
  $("#after").addClass('active');
  $("#first").hide();
  $(".after").show();
};
 
function handle(e) {
  if (e.keyCode === 13) {
    console.log('cool I wokr');
   if ($("#first").hasClass("active")){
    var inp = document.getElementById('maindisplayform').value;
    console.log(inp);
    $("#first").removeClass('active');
    $("#after").addClass('active');
    $("#first").hide();
    $(".after").show();
    var tar = document.getElementById("hm").children[0];
    console.log(tar);
    tar.className += "fa-spinner fa-spin";
    getData(inp);
    } else {
    var inp = document.getElementById('secondform').value;
    getData(inp);
   }   
  }
}

function getData(inp) {
  if (inp[0].toUpperCase() !== inp[0]) {
    var first = inp[0].toUpperCase();
    inp = first + inp.slice(1,inp.length);
  }
  var toSend = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+inp+"&format=json&callback=?";
  $.getJSON(toSend,function(data) {
    console.log(data);
    displayResults(data);
  });
}

function displayResults(data) {
 var html = "";
 for (var i = 0; i < 1;i++) {
   for(var j = 0; j < data[i+1].length ; j++) {
     html += "<div class='row'>";
     html += "<div class='col-lg-12'>";
     html += "<a href='"+data[i+3][j]+"'>";
     html += "<h1 class ='title'>"+data[i+1][j]+"</h1>";
     html += "<p class='description'>"+data[i+2][j]+"</p>";
     html += "</a>";
     html += "</div></div>";
   }   
  }
  $(".fa").removeClass("fa-spinner fa-spin");
  $("#second").append(html); 
}  

$("document").ready(function() {
  document.getElementById("maindisplayform").value = "";
  document.getElementById("maindisplayform").placeholder = "Search for...";
  $("#button").click(buttonClick);
  handle(e);
});
