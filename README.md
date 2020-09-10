## Tareas

### Completadas

- Utilizar **useState** para componentes de funciones con estado. -> Se utilizó componentes de funciones con estado proporcionado por el **Hook** useState.
- Crear un componente con **Render Prop**. -> DateFormatter que renderiza un elemento con una fecha formateada.
- Implementar un **High-Order Component**. -> función withErrorBoundary para extender un componente con un limite de error y un elemento de respaldo.
- Usar **StrictMode**. -> Añadido al componente de la Aplicación.
- Procesar la entrada de texto en la creación de la publicación. -> Un elemento con el atributo content-editable para registrar saltos de linea y que cambiar el alto del elemento de forma dinamica.
- Limpiar la entrada de texto anterior. -> Uso de **ref** para limpiar su contenido al enviar el formulario.
- Manejar el estado de los componentes de forma optima. -> Uso de **Context API**.
- Implementar **Arrastra y Suelta** para subir imagenes y videos y permitir el uso de su lógica en multiples componentes (reusabilidad). -> Uso de **Custom Hook** con la lógica que puede ser reutilizada.
- Implementar **Firebase Realtime Database**. -> Se registró el proyecto y se añadió el SDK de Firebase para almacenar las publicaciones en la base de datos.
- Implementar **Firebase Storage**. -> Metódos para interactuar con el SDK de Firebase para subir los archivos multimedia de las publicaciones.
- Utilizar **loader** en webpack para manejar archivos de _CSS_. -> Se añadió style-loader y css-loader para cargar los estilos en modo de desarrollo, para producción, se añadira MiniCSSExtractPlugin.
- Implementar **Firebase Authentication**. -> Primero, se añadió un router y rutas para dividir la aplicación en home, login y register. Luego se implementó autenticación a traves de Google, con email y contraseña y registro de usuarios.
- Diseñar e implementar componente Form con validaciónes usando el patrón de diseño **compound components**". -> Utilizando **Context API + Hooks** se implementaron los componentes Fomr y Input para crear formularios con su propio estado, eliminando redundancias.

### No Completadas

- Añadir input de foto de perfil con previsualizador.
- Completar **CRUD** de publicaciones.
- Hacer Code Splitting para mejorar el tamaño de los estaticos.
