document.addEventListener('DOMContentLoaded', function() {
    const responsiveButton = document.querySelector('.responsive');
    const navList = document.querySelector('.nav-list');
  
    // Función para ocultar la barra de navegación y mostrar el botón .responsive
    function hideNav() {
      navList.style.display = 'none';
      responsiveButton.style.display = 'block';
    }
  
    function handleWindowResize(mq) {
      if (mq.matches) {
        // La pantalla es de 600px o menos, activar el código
        document.addEventListener('click', function(event) {
          const targetElement = event.target;
  
          // Ocultar la barra de navegación si está visible y se hizo clic fuera de ella
          if (navList.style.display === 'block' && !targetElement.closest('.nav')) {
            hideNav();
          }
  
          // Mostrar/ocultar el botón .responsive en función de la visibilidad de la barra de navegación
          responsiveButton.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
  
          // Si el clic se realizó en un enlace de .nav-list, ocultar la barra de navegación
          if (targetElement.closest('.nav-list a')) {
            hideNav();
          }
        });
  
        // Evento de clic en .responsive para mostrar/ocultar la barra de navegación
        responsiveButton.addEventListener('click', function(event) {
          event.stopPropagation(); // Detener la propagación para evitar que el clic llegue al documento
          navList.style.display = (navList.style.display === 'none' || navList.style.display === '') ? 'block' : 'none';
          responsiveButton.style.display = 'none'; // Ocultar el botón .responsive cuando la barra de navegación está desplegada
        });
      } else {
        // La pantalla es más grande de 600px, desactivar el código
        document.removeEventListener('click', function(event) {
          // Remover el evento de clic en la pantalla
        });
  
        responsiveButton.removeEventListener('click', function(event) {
          // Remover el evento de clic en .responsive
        });
      }
    }
  
    // Verificar el estado de la pantalla inicialmente
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    handleWindowResize(mediaQuery);
  
    // Agregar un listener para manejar cambios en el tamaño de la pantalla
    mediaQuery.addEventListener('change', handleWindowResize);
  });
  