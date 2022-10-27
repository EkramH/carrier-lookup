// Sidebar
let sidebarOpen = false;
let sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-open");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-open");
    sidebarOpen = false;
  }
}

// header dropdown
function newClick() {
  var box1 = document.getElementById("headerDropdown");
  if (box1.style.display == "block") {
    box1.style.display = "none";
  } else {
    box1.style.display = "block";
  }
}
