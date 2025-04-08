$(function() {
    // Alternar entre los formularios al hacer clic en los botones (MANTENIDO)
    $(".btn").click(function() {
        $(".form-signin").toggleClass("form-signin-left");
        $(".form-signup").toggleClass("form-signup-left");
        $(".frame").toggleClass("frame-long");
        $(".signup-inactive").toggleClass("signup-active");
        $(".signin-active").toggleClass("signin-inactive");
        $(".forgot").toggleClass("forgot-left");
        $(this).removeClass("idle").addClass("active");
  
        // Limpiar mensajes de error al cambiar de formulario
        $("#loginError, #registerError, #registerSuccess").hide();
    });
  
    // Animaciones al hacer clic en el botón de registro (MANTENIDO)
    $(".btn-signup").click(function() {
        $(".nav").toggleClass("nav-up");
        $(".form-signup-left").toggleClass("form-signup-down");
        $(".success").toggleClass("success-left");
        $(".frame").toggleClass("frame-short");
    });
  
    // Animaciones al hacer clic en el botón de inicio de sesión (MANTENIDO)
    $(".btn-signin").click(function() {
        $(".btn-animate").toggleClass("btn-animate-grow");
        $(".welcome").toggleClass("welcome-left");
        $(".cover-photo").toggleClass("cover-photo-down");
        $(".frame").toggleClass("frame-short");
        $(".profile-photo").toggleClass("profile-photo-down");
        $(".btn-goback").toggleClass("btn-goback-up");
        $(".forgot").toggleClass("forgot-fade");
    });
  
    // Mostrar/ocultar contraseña (NUEVO - pero no afecta animaciones)
    $(document).on('click', '.toggle-password', function() {
        const input = $(this).siblings('input');
        const icon = $(this).find('i');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            icon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            input.attr('type', 'password');
            icon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
  
    
    });

      

    document.addEventListener('DOMContentLoaded', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const role = urlParams.get('role');
    
        if (role) {
            console.log('Rol seleccionado:', role);
            // Personalizar la página según el rol (ejemplo: cambiar título o mostrar diferentes mensajes)
        }
    
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    
            // Lógica de validación
            console.log('Email:', email);
            console.log('Contraseña:', password);
    

            if (role === 'alumno') {
                window.location.href = '/dashboard';  // Redirigir a dashboard de alumno
            } else if (role === 'docente') {
                window.location.href = '/dashboard';  // Redirigir a dashboard de docente
            }
        });
    });
    
    
      
      
  
  
  
  