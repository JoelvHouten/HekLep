function dropdownNav() {
    const dropdown = document.getElementById("dropdown-nav");
        if (dropdown.style.display === "flex") {
            dropdown.style.display = "none";
        } else {
        	dropdown.style.display = "flex";
        }
}