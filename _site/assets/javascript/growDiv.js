function growDiv(div_id, bttn_id) {
    var growDiv = document.getElementById(div_id);
    if (growDiv.clientHeight) {
      growDiv.style.height = 0;
    } else {
      var wrapper = growDiv.querySelector('.measuringWrapper');
      //var wrapper = document.querySelector('.measuringWrapper');
      growDiv.style.height = wrapper.clientHeight + "px";
    }
    document.getElementById(bttn_id).value=document.getElementById(bttn_id).value=='details'?'hide':'details';
}