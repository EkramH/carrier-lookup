const sidebarOpen = false;
const sidebar = document.getElementsByClassName("sidebar");

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

console.log(sidebar);
