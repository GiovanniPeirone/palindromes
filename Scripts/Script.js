
function getName() {
  let name = document.getElementById("input-name");
}


function polindromDetecter(n) {
  let Array_name = [];
  Array_name = n.split("").reverse().join("");


  if (Array_name == n) {
    document.write("The name is a polindrom");
  }else {
    document.writes("Tne name is not a polindrom");
  }
}

polindromDetecter(name);





