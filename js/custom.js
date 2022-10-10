function openCity(ev, cityName) {

  // Get all elements with class="tabcontent" and hide them
  let tabcontent = document.querySelectorAll(".tabcontent");
  let myArr = Array.from(tabcontent);
  myArr.map((item) => {
    item.style.display = "none";
  });

  // Get all elements with class="tablinks" and remove the class "active"
  let tablinks = document.querySelectorAll(".tablinks");
  let myArr2 = Array.from(tablinks);
  myArr2.map((item) => {
    item.className = item.className.replace(" active", "");  /* eikhane middle e = boslo kano...? */
    // item.classList.remove(" active");
  });



  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  ev.currentTarget.className += " active";
//   ev.currentTarget.className = ev.currentTarget.className + " active";
//   console.log(ev.currentTarget.className);

  //   let naam = document.getElementById(ev);
  //   naam.classList.add = "active";
}
