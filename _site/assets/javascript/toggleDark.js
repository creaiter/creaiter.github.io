var checkbox = document.querySelector('input[name=mode]')
checkbox.addEventListener('change', function() {
    if(this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['sun'].toSvg({'fill': 'var(--fg-color-dark)'})
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        var moon = document.getElementById('moon')
        moon.innerHTML = feather.icons['moon'].toSvg({'fill': 'var(--fg-color-dark)'})
    }
})

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