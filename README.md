# Proyecto Bedu: Book Crossing

## Tabla de contenidos
1. [Especifiaciones del Proyecto](#about)

3. [Links](#links)

## Especificaciones del Proyecto <a name="#about"></a>

**¿Qué espero que haga el proyecto?**

Una API web en donde se pueda resgistrar usuarios, registrar libros y registrar intercambio delibros.  
- Registro de usuarios  
- Visualizar los libros tanto nuevos como de intercambio  
- Seleccionar un libro  
- Poner libro en intercambio  
- Opción de entrega personal para libros de intercambio  
- Evaluar la propuesta de intercambio  
- Registro de libros nuevos por parte de la librería  
- Stock de los libros  
- Evaluación de libros y usuario  

**¿Qué tipos de usuario tendrá nuestro sistema?**
- Administrador (librería)  
- Usuario (cliente)  

**¿Qué acciones puede realizar cada usuario?**

- Usuario
    - Registrase.  
    - Registrar y eliminar libros de intercambio.  
    - Visualizar los libros.  
    - Evaluar libros y usuarios.  
    - Evaluar la propuesta de intercambio . 
    - Mensaje entre usuarios.
    - Comprar o intercambiar libros.  
    - Seleccionar método de envio.  

**¿Qué información se necesita?**

- Libros  
    - Id 
    - Nombre del libro  
    - Edición  
    - Editorial  
    - Autor  
    - Genero  
    - Número de Paginas  
    - Idioma  
    - Tipo de Pasta  
    - ISBN  
    - Sinopsis  
    - Estado del libro  
    - Descripción  
    - Calificación con comentario  
    - Precio  
    - Foto  
    - Stock  
- Usuario  
    - Id  
    - Nombre  
    - Apellido  
    - Dirección  
    - Foto de usuario  
    - Contraseña  
    - Email  
    - Califacion de usuario con comentario
    - Libros en intercambio (actuales y pasados)  
    - Historial de Intercambios  
    - Telefono  
    - Tipo
- Intercambio
    - usuario 1
    - Usuario 2
    - Libro 1
    - Libro 2
    - Status 1
    - Status 2
    - PuntoMedio
    - status General

**¿Cuáles son las principales entidades?** 
- Libro  
- Usuario 
- Intercambio

**¿Qué funcionalidades tiene cada entidad?**
- Libro  
    - Ser registrado  
    - Ser intercambiado  
    - Ser vendido  
    - Estar en el stock  
    - Visualizar la información del libro  
- Usuario  
    - Intercambiar libros  
    - Evaluar la propuesta  
    - Evaluar los libros  
    - Evaluar a otros usuarios  
    - Comprar un libro  
    - Registrarse  
    - Registrar sus libros  
- Intercambio
    - Registra dos usuarios que van a intercambiar
    - Registra dos libros que serán intercambiados

## Links de la API <a name="links"></a>

**Link a la API**
    https://bedubook.herokuapp.com/v1 

**Link a la docuemntacion**
    https://bedubook.herokuapp.com/api-docs/


