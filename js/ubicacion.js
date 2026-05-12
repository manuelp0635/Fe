    function solicitarPermisoNotificaciones() {
      if ("Notification" in window && Notification.permission !== "granted") {
        Notification.requestPermission();
      }
    }

    function mostrarNotificacion() {
      if (Notification.permission === "granted") {
        new Notification("⏰ Servicio próximo", {
          body: "Faltan 10 minutos para el servicio. ¡Te esperamos!",
          icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
        });
      }
    }

    function actualizarHorario() {
      const ahora = new Date();
      const dia = ahora.getDay(); // 0 domingo
      const estado = document.getElementById("estado-horario");
      const contador = document.getElementById("contador");

      // CONFIG: domingo 9:00 AM
      const inicio = new Date();
      inicio.setDate(ahora.getDate() + ((7 - dia) % 7));
      inicio.setHours(9, 0, 0, 0);

      const fin = new Date(inicio);
      fin.setHours(11);

      // ESTADO
      if (dia === 0 && ahora >= inicio && ahora < fin) {
        estado.textContent = "🟢 Estamos en servicio ahora";
        estado.style.color = "#00ff88";
        contador.textContent = "Finaliza en curso";
      } else {
        estado.textContent = "🔴 Cerrado en este momento";
        estado.style.color = "#ff4d4d";

        const diff = inicio - ahora;
        const horas = Math.floor(diff / (1000 * 60 * 60));
        const minutos = Math.floor((diff / (1000 * 60)) % 60);

        contador.textContent = `⏳ Faltan ${horas}h ${minutos}min para el próximo servicio`;
      }

      // 🔔 NOTIFICACIÓN 10 MIN ANTES
      const diezMinAntes = new Date(inicio.getTime() - 10 * 60 * 1000);

      if (
        ahora.getHours() === diezMinAntes.getHours() &&
        ahora.getMinutes() === diezMinAntes.getMinutes()
      ) {
        mostrarNotificacion();
      }

      // GOOGLE CALENDAR
      const fechaInicio =
        inicio.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
      const fechaFin =
        fin.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

      const calendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=Servicio+Iglesia&dates=${fechaInicio}/${fechaFin}&details=Servicio+en+Casa+Apostolica+y+Profetica&location=Cartagena,Colombia`;

      document.getElementById("calendar-link").href = calendarURL;
    }

    // ACTIVAR PERMISO AL CARGAR
    solicitarPermisoNotificaciones();

    actualizarHorario();
    setInterval(actualizarHorario, 60000);