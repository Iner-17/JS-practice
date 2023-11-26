const toggleDropdown = (element) => {
    const dropdown = document.querySelector(".dropdown-links");
    dropdown.style.display =
        dropdown.style.display === "grid" ? "none" : "grid";
    element.classList.toggle("dropdown-active");
};
