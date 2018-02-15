function importText(textFile, onloadfn){
    var xhr=new XMLHttpRequest;
    xhr.open('GET',textFile);
    xhr.onload=onloadfn;
    xhr.send()
}

function submitAnswer(answer) {
  document.getElementById('solution').innerHTML = answer;
}