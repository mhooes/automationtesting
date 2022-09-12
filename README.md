<p align="center">
  <a href="https://www.linkedin.com/in/emiliano-adrian-palacio/"><img src="https://img.shields.io/badge/Emiliano%20 Palacio-LinkedIn-0077B5.svg" style="max-height: 300px;" style="max-height: 300px;"></a>
</p>

# [![Cypress](https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png)](https://www.cypress.io)

## Proyecto de practica  basado en [Cypress](https://www.cypress.io), [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) y [Node.js](https://nodejs.org/en/)

### Requerimientos generales

- Instalar [Node.js](https://nodejs.org/es/download/).
- Instalar algún cliente git como por ejemplo [git bash](https://git-scm.com/downloads).
- Tener instalada alguna versión de Chrome, Firefox o Edge.

### Instalación del framework de pruebas

#### **Clonar el repositorio:**

```bash
git clone https://github.com/mhooes/automationtesting.git
```

#### **Instalar las dependencias.**

```bash
npm install
```

#### **Para abrir el Test Runner**

```bash
npx cypress open
```

#### **Para la ejecución de los test en Chrome Headless**

```bash
npx cypress run --browser chrome
```

#### **Para la ejecución de los test en Chrome Headed**

```bash
npx cypress run --headed
```

#### **Para la ejecución de los test en Firefox Headless**

```bash
npx cypress run --browser firefox
```

#### **Para actualizar la base de datos local de browsers**

```bash
npx browserslist@latest --update-db
```

El comando anterior hay que ejecutarlo periódicamente. Para mayor información consultar la documentación oficial [Browserslist](https://github.com/browserslist/browserslist#browsers-data-updating).

### Web de ejemplo

Utilizamos como ejemplo para realizar pruebas con el framework la siguiente [web pública](https://www.demoblaze.com/).

### Créditos

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
