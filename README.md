# Keepworking

Backend para gestionar data y endpoints de keepworking.


## Comenzando 🚀
_Ejecuta los siguientes pasos en orden:_

### Paso 1 Clona el repositorio: 

  ```$ git clone https://github.com/MYBV/keepworking.git``` ⏬

### Paso 2 Entra a la carpeta donde se descargo el repositorio y ejecuta el siguiente comando:
  
  ```$ npm install``` 📂	

Ya con estos dos pasos se tiene el código del proyecto y se instalan las dependencias.
Adicional a esto debe configurarse los valores de conexion a la BD en el archivo `/database/database.module.ts` ⚙️.

### Paso 3 Variables de entorno:

Crea el archivo `develop.env` con las siguiente estructura:

# API
PORT=0000
APP_URL=https://keepworking.com

# JWT
JWT_SECRET=JWT53c37
EXPIRES_IN=12h

#Config DB
DB_HOST=localhost
DB_PORT=3306
DB_USER=nomusu
DB_PASSWORD=passusu
DB_NAME=keepworking

### Paso 4 Crea la base de datos del proyecto:

Ejecuta en el cliente de mysql CREATE DATABASE `keepworking` para crear la base de datos.
Ejecuta el comnado ```npm run m:gen``` para generar la migración de la base de datos.
Ejecuta el comando ```npm run m:run``` para ejecutar la migración de la base de datos.
Ejecuta el comando ```npm run seed:run``` para iniciar la base de datos con valore de prueba.

### Paso 5 Runner del proyecto:

  ```$ npm run start:dev```

Con este comando se inicia el proyecto en modo dev.


## Pre-requisitos 📋

_Necesitas instalar lo siguiente:_ ⚠️

### Pre-requisitos 1
* Instala Nodejs

### Pre-requisitos 2
* Instala el cliente de nestjs ```npm i -g @nestjs/cli```.

### Pre-requisitos 3
* Instala SGBD MySQL.

## Dockerizando
Si se desea utilizar docker para utilizar el server, seguir los siguientes pasos:

  - Instala Docker y Docker compose.
  - Inicia el servicio de docker.
  - Ve a la carpeta del proyecto cd /keepworking.
  - Construye el compose con el siguiente comando: ```docker-compose build```.
  - Ejecuta el compose con el siguiente comando: ```docker-compose up```.
  - Después de iniciar el servicio visita la url en el navegador `http://localhost:4000/api/docs`.
  - Sí se desea hacer seed de la data en la base de datos, debes llevar a cabo los siguientes pasos:
    * Ejecuta en un terminal el siguiente comando ```docker exec -i -t keepworking-api-1 /bin/bash```, 
    esto abrirá un terminal dentro de la imagen docker del api.
    * Ejecuta el siguiente comnado para iniciar la data: ```docker exec -i -t keepworking-api-1 /bin/bash```.
    * Escribe ```exit``` para salir de la terminal del api.
    

## Ruta Swagger
- `http://localhost:3000/api/docs`, si se utiliza docker sería `http://localhost:3000/api/docs`

## Construido con 🛠️

* [MySQL](https://www.mysql.com/) - Gestor base de datos.
* [nestjs](https://docs.nestjs.com/) - Framework de nodejs utilizado.
* [npm](https://www.npmjs.com/) - Permite instalar diversas librerías utilizadas en el proyecto.
* [typeorm](https://typeorm.io/) - ORM para la bse de datos.


## Autores ✒️

* **Mayla Bautista** - *Trabajo Inicial* - [@bautista_mayla](#Des_Mayla) 👤.