$(document).ready(function() {

$('#search').click(function(){

  var searchTerm = $('#searchTerm').val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
console.log(url);
$.ajax({
  type: "GET",
  url: url,
  contentType: "application/json; charset=utf-8",
  async:false,
  dataType: 'json',
  success: function(data, textStatus, jqXHR){
// console.log(data[1][0])
// console.log(data[2][0])
// console.log(data[3][0])
// event.preventDefault();
$('#header').hide();
$('#output').html('');
for(var i = 0;i<data[1].length;i++){
$('#output').append("<div><div class='output'><a href = "+data[3][i]+"><h2>"+ data[1][i]+"</h2>" +  "<p>" + data[2][i]+ "</p></a></div></div>");
}
$('#searchTerm').val('');
  },
  error: function(errorMessage){
    alert("Error")
  }


});

});
$('#searchTerm').keypress(function(e){
  if(e.which==13){
    $('#search').click();
  }
});










});
