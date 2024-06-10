CREATE SEQUENCE usuarios_sequence START 1;

CREATE TABLE USUARIOS (
    id_usuario INT default nextval('usuarios_sequence') PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    telefono VARCHAR(15),
    contrasena VARCHAR(255) NOT NULL
);

CREATE SEQUENCE reservas_sequence START 1;
 
CREATE TABLE RESERVAS (
    id_reserva INT default nextval('reservas_sequence') PRIMARY KEY,
    codigo_reserva INT NOT NULL,
    dni VARCHAR(10) NOT NULL,
    matricula_vehiculo VARCHAR(10),
    numero_personas INT NOT NULL,
    fecha_entrada DATE NOT NULL,
    fecha_salida DATE NOT NULL,
    id_usuario INT not NULL,
    alojamiento VARCHAR(50) NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
);

