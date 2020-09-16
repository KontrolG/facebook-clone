# Facebook Clone

Clon de Facebook creado con ReactJS y Firebase aplicando todos los conceptos principales de la librería más usada en la creación de interfaces de usuario.

[Demostración en vivo
](https://facebook-clone-reactjs.herokuapp.com/)

## Funcionalidades

Así como otras aplicaciónes de redes sociales, este clon de Facebook te permite:

- Registrarte e iniciar sesión con tu correo electronico y una contraseña.
- Ingresar con tu cuenta de Google.
- Crear publicaciones con texto y/o archivos multimedia (imagenes y videos).
- Subir archivos multimedia arrastrandolos.
- Ver las publicaciones de los demás usuarios.

Ademas, pronto tendrás la capacidad de:

- Reaccionar a las publicaciones y comentarlas.
- Usar emojis.

## Tecnológias

- ReactJS
- Firebase
- Heroku
- Webpack
- Babel
- Express
- Drag & Drop API

## Instalación

Clona este repositorio:

```bash
$ git clone https://github.com/KontrolG/facebook-clone.git
$ cd facebook-clone
```

Instala las dependencias:

```bash
$ npm install
```

## Configuración

Luego de crear el proyecto en Firebase, añade un archivo con el nombre “.env” en el directorio raíz de la aplicación y añade las llaves de tu proyecto de [Firebase](https://firebase.google.com) (disponibles en la sección de configuracion en la Consola de Firebase) de la siguiente manera:

```env
REACT_APP_FIREBASE_PROJECT_ID=<TU  ID DE PROYECTO>
REACT_APP_FIREBASE_API_KEY=<TU  LLAVE DE LA API>
REACT_APP_FIREBASE_APP_ID=<TU  ID DE LA APP>
```

Ahora puedes correr la aplicación ejecutando:

```bash
npm start
```

## Tareas de desarrollo

### Completadas

| Tarea                                                                                                                                  | Resultado                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Utilizar **useState** para componentes de funciones con estado.                                                                        | Se utilizó componentes de funciones con estado proporcionado por el **Hook** useState.                                                                                                          |
| Crear un componente con **Render Prop**.                                                                                               | DateFormatter que renderiza un elemento con una fecha formateada.                                                                                                                               |
| Implementar un **High-Order Component**.                                                                                               | Función withErrorBoundary para extender un componente con un limite de error y un elemento de respaldo.                                                                                         |
| Usar **StrictMode**.                                                                                                                   | Añadido al componente de la Aplicación.                                                                                                                                                         |
| Procesar la entrada de texto en la creación de la publicación.                                                                         | Un elemento con el atributo content-editable para registrar saltos de linea y que cambia el alto del elemento de forma dinamica.                                                                |
| Limpiar la entrada de texto anterior.                                                                                                  | Uso de **ref** para limpiar su contenido al enviar el formulario.                                                                                                                               |
| Manejar el estado de los componentes de forma optima.                                                                                  | Uso de **Context API**.                                                                                                                                                                         |
| Implementar **Arrastra y Suelta** para subir imagenes y videos y permitir el uso de su lógica en multiples componentes (reusabilidad). | Uso de **Custom Hook** con la lógica que puede ser reutilizada.                                                                                                                                 |
| Implementar **Firebase Realtime Database**.                                                                                            | Se registró el proyecto y se añadió el SDK de Firebase para almacenar las publicaciones en la base de datos.                                                                                    |
| Implementar **Firebase Storage**.                                                                                                      | Metódos para interactuar con el SDK de Firebase para subir los archivos multimedia de las publicaciones.                                                                                        |
| Utilizar **loader** en webpack para manejar archivos de _CSS_.                                                                         | Se añadió style-loader y css-loader para cargar los estilos en modo de desarrollo, para producción, se añadira MiniCSSExtractPlugin.                                                            |
| Implementar **Firebase Authentication**.                                                                                               | Primero, se añadió un router y rutas para dividir la aplicación en home, login y register. Luego se implementó autenticación a traves de Google, con email y contraseña y registro de usuarios. |
| Diseñar e implementar componente Form con validaciónes usando el patrón de diseño **compound components**".                            | Utilizando **Context API + Hooks** se implementaron los componentes Fomr y Input para crear formularios con su propio estado, eliminando redundancias.                                          |
| Añadir input de foto de perfil con previsualizador.                                                                                    | Se utilizó los patrones **compound component** y **render props** para crear un componente que renderiza la previsualización del input.                                                         |
| Añadir **validaciónes** a los formularios.                                                                                             | Se añdió la libreria **validator.js** y la logica necesaria para validar los formularios a traves de esquemas.                                                                                  |
| Crear componente **ErrorMessage** para mostrar error en un campo de formulario.                                                        | Se creó el componente el cual recibe el nombre del campo al cual esta asociado y muestra sus errores.                                                                                           |
| Realizar modificaciónes necesarias para desplegar la aplicación en **Heroku**.                                                         | Se instalaron los paquetes necesarios y se configuró **Webpack** adecuadamente, ademas se creo un servidor con **Express** para servir los estaticos.                                           |
| Hacer **Code Splitting** para mejorar el tamaño de los estaticos.                                                                      | La aplicación fue optimizada para lograr tiempos de descarga optimos **(peso total 244kb)**.                                                                                                    |

### No Completadas

- Dividir el formulario de registro en 2 partes.
- Añadir emojis.
- Permitir al desarrollador añadir las validaciones que desee para reducir el tamaño del paquete y mejorarla usabilidad:

```js
const formValidations = {
  fieldName: {
    myCustomName: {
      validator: value => value === myCustomValue,
      message: "Message to be display when validator returns false"
    }
  }
};
```

- Completar **CRUD** de publicaciones.
- Implementar Firebase Function para procesar imagenes de perfil al ser subidas (Recortar a 1:1, reducir tamaño, calidad).

## Notas

- Usar **uuid/v4** para generar keys aleatorios en los componentes que son mapeados a partir de un Array provoca que cada vez que se recalcula el arbol del DOM, estos tengan keys diferentes, por lo tanto, se remueven del DOM y se colocan nuevamente (algo para nada deseado). Al usar el metódo de esta librería, se estaría ejecutando una función impura, lo cual no es recomendable en los High-Order Methods de Arrays.
