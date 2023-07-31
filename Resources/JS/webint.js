



/* Dropdown nav element button*/
//When user clicks the button show the dropdown content
function showDropdown() {
    document.getElementById("projects-dropdown").classList.toggle("show");
};
//When user clicks elsewhere close the menu
window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i=0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};