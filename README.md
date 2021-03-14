# Proyecto Bedu: Book Crossing

## Tabla de contenidos
1. [Postwork Sesion 03](#postwork-3)

3. [Postwork Sesion 06](#postwork-6)

## Postwork Sesion 03 <a name="postwork-3"></a>

**¿Qué espero que haga el proyecto?**

Una aplicación web en donde se pueda comprar e intercambiar libros.  
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

- Administrador  
    - Registrar y eliminar los libros.  
    - Gestionar el Stock.  
    - Gestionar usuarios.  
    - Gestionar ventas.  
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

## Postwork Sesion 06 <a name="postwork-6"></a>

**¿Cuáles son las ventajas de usar el modelo relacional en nuestro proyecto?**
    La velocidad con la que se ejecutan las queries y la consistencia de los datos.  

**¿Cuáles son las limitantes de usar el modelo relacional en nuestro proyecto?**
    La distribución de los datos en las tablas y la modificación en las mismas. 

**¿Qué ventajas ofrece el modelo no relacional a nuestro proyecto?**
    Las modificaciones de los documentos son más sencillos de ralizar, limpios y no es necesario modificar otros documentos. La velocidad también es un elemento clave y la curva de aprendizaje es menor que la de SQL. 

**¿Qué desventajas tiene el uso del modelo no relacional en nuestro proyecto?**
    Los documentos pueden tener muchas anidaciones, haciéndo difícil el análisis u obtencón de ciertos datos que se encuentren en una anidación profunda.

**¿Qué implementación de base de datos de las que hicimos representa mejor las especificaciones de las entidades del proyecto y por qué?**
    La implementación en NoSQL, pues tendrá un mejor performance al implementar la base de datos en la aplicación. También no se tiene planeado hacer consultas transaccionales y representa de manera más clara a los objetos que se requieren.


