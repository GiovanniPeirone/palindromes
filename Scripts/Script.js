
function polindromDetecter() {
  const Result = document.getElementById("RES");
  Result.innerText = "";
  let name = document.getElementById("input-name").value;
  let Array_name = [];
  Array_name = name.split("").reverse().join("");

  if (Array_name == name) {
    Result.innerText = "The name is a polindrom";
    //alert("The name is a polindrom");
    
  }else {
    Result.innerText = "The name is not a polindrom";
    //alert("The name is a polindrom");
  }
}






