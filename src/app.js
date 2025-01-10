class TicketManager {
    #precioBaseDeGanancia = 0.15; 
  
    constructor() {
      this.eventos = [];  
      this.idCount = 1;   
    }
  
    // Método para obtener todos los eventos
    getEventos() {
      return this.eventos;
    }
  
    // Método para agregar un evento
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
      // Calcular el precio con la ganancia adicional
      const precioConGanancia = precio + (precio * this.#precioBaseDeGanancia);
  
      // Crear el evento con los parámetros recibidos y valores predeterminados
      const evento = {
        id: this.idCount++,       
        nombre,
        lugar,
        precio: precioConGanancia,
        capacidad,
        fecha,
        participantes: [],       
      };
  
      // Agregar el evento al arreglo
      this.eventos.push(evento);
      return evento;
    }
  
    // Método para agregar un usuario a un evento
    agregarUsuario(idEvento, idUsuario) {
      // Validar que el evento exista
      const evento = this.eventos.find(e => e.id === idEvento);
      if (!evento) {
        console.error(`Error: El evento con ID ${idEvento} no existe`);
        return;
      }
  
      // Validar que el usuario no esté registrado en los participantes
      if (evento.participantes.includes(idUsuario)) {
        console.error(`Error: El usuario con ID ${idUsuario} ya está registrado en este evento`);
        return;
      }
  
      // Agregar el usuario al arreglo de participantes
      evento.participantes.push(idUsuario);
      console.log(`Usuario con ID ${idUsuario} agregado al evento ${evento.nombre}`);
    }
  
    // Método para poner un evento en gira
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
      // Buscar el evento original por id
      const eventoOriginal = this.eventos.find(e => e.id === idEvento);
      if (!eventoOriginal) {
        console.error(`Error: El evento con ID ${idEvento} no existe`);
        return;
      }
  
      // Crear el nuevo evento con la nueva localidad, nueva fecha, nuevo id y participantes vacíos
      const eventoEnGira = {
        ...eventoOriginal,  
        id: this.idCount++,  
        lugar: nuevaLocalidad,  
        fecha: nuevaFecha,  
        participantes: []  
      };
  
      // Agregar el nuevo evento en gira al arreglo de eventos
      this.eventos.push(eventoEnGira);
      console.log(`Evento ${eventoOriginal.nombre} puesto en gira en ${nuevaLocalidad} para la fecha ${nuevaFecha}`);
      return eventoEnGira;
    }
  }
  
  // Crear una instancia de TicketManager
  const ticketManager = new TicketManager();
  
  // Agregar un evento
  const evento1 = ticketManager.agregarEvento(
    "Concierto de Rock",
    "Estadio Nacional",
    1000
  );
  console.log(ticketManager.getEventos());  // Ver eventos antes de poner en gira
  
  // Agregar usuarios a los eventos
  ticketManager.agregarUsuario(1, 101); // Usuario 101 al evento 1
  ticketManager.agregarUsuario(1, 102);  // Usuario 102 al evento 1
  
  // Intentar agregar el mismo usuario al evento
  ticketManager.agregarUsuario(1, 101);  // Error: El usuario ya está registrado
  
  // Poner el evento en gira
  const eventoEnGira = ticketManager.ponerEventoEnGira(1, "Estadio Ciudad de la Plata", new Date("2025-02-20"));
  console.log(eventoEnGira);  // Ver el evento en gira
  
  // Ver todos los eventos después de poner el evento en gira
  console.log(ticketManager.getEventos());