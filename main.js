window.addEventListener('load', (event) => {
  let template = localStorage.getItem('template');
  if (template == null){
    console.log("Template is not configured");
    let configure = document.getElementById("configure");
    if(configure!=null) {
      configure.style.display = "block";
    }
  }
});
