function formatNameList(response) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var total_sum = 0;

  var text_array = JSON.parse("[" + response.target.response + "]");
  text_array.sort();
  for(var i = 0; i < text_array.length; i++) {
    var name_sum = 0;
    for (var j = 0; j < text_array[i].length; j++) {
      var score = alphabet.indexOf(text_array[i][j]) + 1; // add one to account for arrays starting at 0
      name_sum += score;
    }
    total_sum += name_sum * (i+1); // again arrays start at 0
  }
  submitAnswer(total_sum);
}

importText('/Problem22/p022_names.txt', formatNameList);