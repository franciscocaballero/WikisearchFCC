$(document).ready(function() {

$('#search').click(function(){

  var searchTerm = $('#searchTerm').val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

$.ajax({
  type: "GET",
  url:url,
  async:false,
  dataType: 'json',
  success: function(data){
// console.log(data[1][0])
// console.log(data[2][0])
// console.log(data[3][0])
// event.preventDefault();

$('#output').html('');
for(var i = 0;i<data[1].length;i++){
$('#output').append("<li><a href = "+data[3][i] + "</a><p>"+ data[2][i]+"</p></li>");
}
$("#searchTerm").val('');
  },
  error: function(errorMessage){
    alert("Error")
  }


});

});
$("#searchTerm").keypress(function(e){
  if(e.which==13){
    $("#search").click();
  }
});










});
