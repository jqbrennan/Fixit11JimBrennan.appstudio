btnLogin.onclick=function(){
    req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);
    if (req1.status == 200) { //everything worked.
        lblResult.style.display = "block"  // none to hide
        //1 good 0 bad
        if (req1.responseText == 1) {
          ChangeForm(favFoods)
        } else {
          inptPassword.value = ""
          inptNetID.value = ""
          //lblResult.value = "The authentication code is " + req1.responseText
          lblResult.value = `Login failed, try again`
        }
    } else {
        //Handle that. 
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}
btnForm.onclick=function(){
  ChangeForm(favFoods)
}
