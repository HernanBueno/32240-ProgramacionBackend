# **Implementacion de Login**

## **Consigna**

Ajustar nuestro servidor principal para trabajar con un sistema de login.

## **Aspectos a incluir**

- Deberá contar con todas las vistas realizadas en el hands on lab, así también como las rutas de router para procesar el registro y el login.
- En lugar de realizar una redirección a la vista “/profile”, realizar la redirección directamente a la vista de productos.
- Agregar a la vista de productos un mensaje de bienvenida con los datos del usuario.
- Agregar un sistema de roles, de manera que si colocamos en el login como correo adminCoder@coder.com, y la contraseña adminCod3r123, el usuario de la sesión además tenga un campo.
- Todos los usuarios que no sean admin deberán contar con un rol “usuario”.
- Implementar botón de “logout” para destruir la sesión y redirigir a la vista de login.

## **Sugerencias**

- Recuerda que las vistas son importantes, más no el diseño, concéntrate en la funcionalidad de las sesiones antes que en la presentación.
- Cuida las redirecciones a las múltiples vistas.

## **Formato de entrega**

- Link al repositorio de Github sin node_modules.