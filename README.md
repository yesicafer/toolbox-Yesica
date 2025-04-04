# toolbox-Yesica

# Cypress-Automation
Este proyecto es la automatización de Pruebas de UI en Plataforma de Ecommerce y Pruebas de API (Echo Server). usando Cypress.


## Pre-requisitos
Para ejecutar la automatización, necesitas tener los siguientes pre-requisitos instalados:
- Node.js >= v20.17.0
- NPM >=10.8.2
- Git

## Instalación
Para instalar Cypress, puedes usar el siguiente comando:

```bash
npm install cypress
```
```bash
Una vez que Cypress esté instalado, puedes iniciarlo con el siguiente comando:
```
```bash
npx cypress open
```

## Para descargar el proyecto de GitHub, puedes usar el siguiente comando:

```bash
git clone https://github.com/yesicafer/toolbox-Yesica.git
```

## Ejecución de las pruebas
```bash
Para ejecutar las pruebas, puedes usar el siguiente comando:
npx cypress run
```

## Descripción de los tests implementados

En la carpeta e2e, se encuentran las subcarpetas **API** y **UI**, donde se implementarion las siguientes automatizaciones

## API
Se encuentran dos automatizaciones, una de metodo Get y la otra de metodo POST; el swagger de guia se puede encontrar en en siguiente [link:](https://echo-serv.tbxnet.com/explorer/#/QA/get_qa_test1)  

-**Api_get.cy.js** : Se seleciono el servicio tipo /echo Echo service para el test, este archivo es el principal para ejecutarlo y validar los siguientes casos:

- 1. Se valida el codigo 200 es enviado en el response correctamente, adicional en el envio del request se esta concatenando la variable text.  
- 2. Se valida los response headers del swagger vr ejecutados en cypress
- 3. Se valida la duracion de la respuesta del servicio se menor a segundos

**Nota**: El payload se encuentra en la siguiente ruta:
**Cypres** --> **Fixtures** --> **provide_text.json** 

-**Api_post_echo.cy.js** Se seleciono el servicio tipo /echo Echo service para el test, este archivo es el principal para ejecutarlo y validar los siguientes casos:

- 1. Se valida el codigo 200 es enviado en el response correctamente 
- 2. Se valida los response headers del swagger vr ejecutados en cypress
- 3. Se valida la duracion de la respuesta del servicio se menor a segundos

**Nota**: El payload se encuentra en la siguiente ruta:
**Cypres** --> **Fixtures** --> **pos_code.json** 


## UI 
Se encuentra el archivo ecommerce.cy, Se realizo el registro de un usuario nuevo de la plataforma [link:](https://automationexercise.com/) a continuacion se definen los archivos relacionados

- locator_signup.js: Se encuentran mapeados todos los elementos para realizar el registro en la web. 

**Nota**: El archivo se encuentra en la siguiente ruta:
**Cypres** --> **support** --> **locator_signup.js** 

- signup_data.json: Se encuentran la data del nombre y email para iniciar con el proceso del registro en la web. 

**Nota**: El archivo se encuentra en la siguiente ruta:
**Cypres** --> **fixtures** --> **signup_data.json** 

- form_signup.json: Se encuentran la data del cliente para terminar  con el proceso del registro en la web.

**Nota**: El archivo se encuentra en la siguiente ruta:
**Cypres** --> **fixtures** --> **form_signup.json** 

## Resultados
Los resultados de las pruebas se pueden encontrar en el archvo **results** 

**Nota**: Generar el reporte, ejecutar el siguiente script.

```bash
npx cypress run --reporter mochawesome
```