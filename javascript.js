
 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  
function feedback() {
    var txt;
    if (confirm("Did you enjoy the experiment?\n Yes   -   No")) {
        txt = "You Choose Yes! 😍";
    }
    else {
     txt = "You Choose No! ☹";
    }

      document.getElementById("demo").innerHTML = txt;
}

$(document).ready(function(){
  $("input[type='button']").click(function(){
      var radioValue = $("input[name='reason']:checked").val();
      if(radioValue){
          alert("Your are a - " + radioValue);
      }
  });
});