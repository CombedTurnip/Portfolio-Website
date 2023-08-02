
/*dark mode toggle button*/
let darkMode = () => {
    document.getElementById("body").classList.toggle('dark-mode');
    document.getElementById('sun-moon').classList.toggle('fa-moon');
    document.getElementById('sun-moon').classList.toggle('fa-sun');
    
};

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

//Links for project cards
let project1Link = () => {
    window.location = ('./project1.html');
};

let project2Link = () => {
    window.location = ('./project2.html');
};

let project3Link = () => {
    window.location = ('./project3.html');
};