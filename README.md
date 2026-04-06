#  Aplicación de Gestión Financiera 

Aplicación web desarrollada en React para la gestión de ingresos, gastos y metas financieras. Permite a los usuarios autenticarse, registrar información financiera y organizar sus datos mediante una interfaz interactiva.

---

##  Funcionalidades 

- Registro e inicio de sesión de usuarios mediante consumo de API
- Protección de rutas según estado de autenticación
- Registro de gastos con categorías
- Gestión de ingresos y metas financieras
- Formularios con validación de datos
- Interfaz estructurada con componentes reutilizables

---

##  Características técnicas 

- Manejo de rutas con React Router DOM
- Protección de vistas mediante autenticación
- Consumo de API REST con Axios
- Manejo de formularios con React Hook Form
- Uso de hooks (`useState`, `useNavigate`)
- Validación de datos en formularios

---

##  Validaciones implementadas 

- Campos obligatorios en formularios
- Validación de correo electrónico
- Validación de contraseña
- Control de entradas numéricas y fechas
- Manejo de errores en formularios

---

##  Tecnologías utilizadas 

- React
- JavaScript (ES6+)
- React Router DOM
- Axios
- React Hook Form
- HTML5
- CSS3
- Bootstrap

---

##  Estructura del proyecto 
src/
│── pages/ # Vistas principales (Login, Home, Expenses, etc.)
│── forms/ # Formularios (Login, Gastos, Ingresos, Metas)
│── common/ # Componentes reutilizables (Header, Footer, Banner)
