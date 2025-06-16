const usuarios = {
  "u001": {
    nombre: "Ariel",
    apellido: "Díaz",
    edad: 30,
    dni: "12345678",
    email: "ariel.diaz@email.com",
    telefono: "+54 351 1234567",
    direccion: {
      calle: "Av. Siempre Viva",
      numero: 742,
      ciudad: "Córdoba",
      codigoPostal: "5000",
      pais: "Argentina",
      ubicacion: {
        lat: -31.4201,
        lng: -64.1888
      },
      referencias: ["Frente a la plaza", "Puerta negra", "Casa de dos pisos"]
    },
    habilidades: ["JavaScript", "HTML", "CSS", "Google Sheets"],
    mascotas: [
      { nombre: "Toby", tipo: "Perro", edad: 5 },
      { nombre: "Michi", tipo: "Gato", edad: 3 }
    ]
  },
  "u002": {
    nombre: "Lucía",
    apellido: "Martínez",
    edad: 28,
    dni: "23456789",
    email: "lucia.martinez@email.com",
    telefono: "+54 11 9876543",
    direccion: {
      calle: "Calle Falsa",
      numero: 123,
      ciudad: "Buenos Aires",
      codigoPostal: "1000",
      pais: "Argentina",
      ubicacion: {
        lat: -34.6037,
        lng: -58.3816
      },
      referencias: ["Al lado del kiosco", "Puerta blanca"]
    },
    habilidades: ["Python", "SQL", "Excel"],
    mascotas: [{ nombre: "Lola", tipo: "Perra", edad: 4 }]
  },
  "u003": {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 35,
    dni: "34567890",
    email: "juan.perez@email.com",
    telefono: "+54 261 1111111",
    direccion: {
      calle: "San Martín",
      numero: 450,
      ciudad: "Mendoza",
      codigoPostal: "5500",
      pais: "Argentina",
      ubicacion: {
        lat: -32.8908,
        lng: -68.8272
      },
      referencias: ["Frente al hospital"]
    },
    habilidades: ["Node.js", "React"],
    mascotas: []
  },
  "u004": {
    nombre: "Sofía",
    apellido: "Gómez",
    edad: 26,
    dni: "45678901",
    email: "sofia.gomez@email.com",
    telefono: "+54 381 2222222",
    direccion: {
      calle: "Belgrano",
      numero: 98,
      ciudad: "Tucumán",
      codigoPostal: "4000",
      pais: "Argentina",
      ubicacion: {
        lat: -26.8083,
        lng: -65.2176
      },
      referencias: ["Casa azul", "Al lado de la verdulería"]
    },
    habilidades: ["Figma", "Diseño UX"],
    mascotas: [{ nombre: "Max", tipo: "Perro", edad: 6 }]
  },
  "u005": {
    nombre: "Carlos",
    apellido: "Ramírez",
    edad: 40,
    dni: "56789012",
    email: "carlos.ramirez@email.com",
    telefono: "+54 383 3333333",
    direccion: {
      calle: "Mitre",
      numero: 201,
      ciudad: "Catamarca",
      codigoPostal: "4700",
      pais: "Argentina",
      ubicacion: {
        lat: -28.4696,
        lng: -65.7852
      },
      referencias: []
    },
    habilidades: ["PHP", "Laravel"],
    mascotas: []
  },
  "u006": {
    nombre: "Laura",
    apellido: "Fernández",
    edad: 32,
    dni: "67890123",
    email: "laura.fernandez@email.com",
    telefono: "+54 221 4444444",
    direccion: {
      calle: "9 de Julio",
      numero: 999,
      ciudad: "La Plata",
      codigoPostal: "1900",
      pais: "Argentina",
      ubicacion: {
        lat: -34.9214,
        lng: -57.9544
      },
      referencias: ["Edificio rojo"]
    },
    habilidades: ["Vue", "JavaScript"],
    mascotas: [{ nombre: "Pipo", tipo: "Hamster", edad: 1 }]
  },
  "u007": {
    nombre: "Marcos",
    apellido: "Lopez",
    edad: 45,
    dni: "78901234",
    email: "marcos.lopez@email.com",
    telefono: "+54 261 5555555",
    direccion: {
      calle: "Italia",
      numero: 456,
      ciudad: "San Juan",
      codigoPostal: "5400",
      pais: "Argentina",
      ubicacion: {
        lat: -31.5375,
        lng: -68.5364
      },
      referencias: []
    },
    habilidades: ["Java", "Spring"],
    mascotas: []
  },
  "u008": {
    nombre: "Valentina",
    apellido: "Suárez",
    edad: 22,
    dni: "89012345",
    email: "valentina.suarez@email.com",
    telefono: "+54 341 6666666",
    direccion: {
      calle: "España",
      numero: 300,
      ciudad: "Rosario",
      codigoPostal: "2000",
      pais: "Argentina",
      ubicacion: {
        lat: -32.9442,
        lng: -60.6505
      },
      referencias: ["Tercer piso", "Depto B"]
    },
    habilidades: ["Diseño gráfico", "Photoshop"],
    mascotas: [{ nombre: "Nina", tipo: "Gata", edad: 2 }]
  },
  "u009": {
    nombre: "Diego",
    apellido: "Moreno",
    edad: 38,
    dni: "90123456",
    email: "diego.moreno@email.com",
    telefono: "+54 264 7777777",
    direccion: {
      calle: "Colón",
      numero: 876,
      ciudad: "San Luis",
      codigoPostal: "5700",
      pais: "Argentina",
      ubicacion: {
        lat: -33.295,
        lng: -66.3356
      },
      referencias: ["Casa blanca"]
    },
    habilidades: ["Excel", "Power BI"],
    mascotas: []
  },
  "u010": {
    nombre: "Camila",
    apellido: "Alvarez",
    edad: 29,
    dni: "01234567",
    email: "camila.alvarez@email.com",
    telefono: "+54 387 8888888",
    direccion: {
      calle: "Sarmiento",
      numero: 321,
      ciudad: "Salta",
      codigoPostal: "4400",
      pais: "Argentina",
      ubicacion: {
        lat: -24.7829,
        lng: -65.4232
      },
      referencias: ["Pasillo al fondo"]
    },
    habilidades: ["HTML", "CSS", "Bootstrap"],
    mascotas: [{ nombre: "Rocky", tipo: "Perro", edad: 7 }]
  }
};