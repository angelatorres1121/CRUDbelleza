
/*
// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar"); // Seleccionando la barra lateral
const sidebarOpenBtn = document.querySelector("#sidebar-open"); // Seleccionando el botón de abrir la barra lateral
const sidebarCloseBtn = document.querySelector("#sidebar-close"); // Seleccionando el botón de cerrar la barra lateral
const sidebarLockBtn = document.querySelector("#lock-icon"); // Seleccionando el botón de bloqueo de la barra lateral

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked"); // Alternando la clase "locked" en la barra lateral
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable"); // Añadiendo la clase "hoverable" a la barra lateral
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt"); // Reemplazando el ícono de bloqueo por el ícono de desbloqueo
  } else {
    sidebar.classList.remove("hoverable"); // Removiendo la clase "hoverable" de la barra lateral
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt"); // Reemplazando el ícono de desbloqueo por el ícono de bloqueo
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close"); // Añadiendo la clase "close" a la barra lateral
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close"); // Removiendo la clase "close" de la barra lateral
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close"); // Alternando la clase "close" en la barra lateral
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close"); // Añadiendo la clase "close" a la barra lateral
  sidebar.classList.remove("locked"); // Removiendo la clase "locked" de la barra lateral
  sidebar.classList.remove("hoverable"); // Removiendo la clase "hoverable" de la barra lateral
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock); // Añadiendo un event listener al botón de bloqueo para alternar el estado de bloqueo de la barra lateral
sidebar.addEventListener("mouseleave", hideSidebar); // Añadiendo un event listener a la barra lateral para ocultarla cuando el mouse sale de ella
sidebar.addEventListener("mouseenter", showSidebar); // Añadiendo un event listener a la barra lateral para mostrarla cuando el mouse entra en ella
sidebarOpenBtn.addEventListener("click", toggleSidebar); // Añadiendo un event listener al botón de abrir la barra lateral para alternar su visibilidad
sidebarCloseBtn.addEventListener("click", toggleSidebar); // Añadiendo un event listener al botón de cerrar la barra lateral para alternar su visibilidad
*/

const menuButton = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
  document.querySelector('.menu_item').classList.toggle('show');
});

const searchButton = document.querySelector('.search');

searchButton.addEventListener('click', () => {
  const searchInput = document.querySelector('.search_box');
  searchInput.classList.toggle('show');
  searchInput.focus();
});

const accountButton = document.querySelector('.user-icon');

accountButton.addEventListener('click', () => {
  document.querySelector('.change-account').style.display = 'block';
});

const accountClicked = document.querySelector('.account');

accountClicked.addEventListener('click', () => {
  document.querySelector('.change-account').style.display = 'none';
});

