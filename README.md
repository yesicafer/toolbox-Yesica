# toolbox-Yesica

# Cypress-Automation
Este proyecto es la automatización de Pruebas de UI en Plataforma de Ecommerce y Pruebas de API (Echo Server). usando Cypress.


## Pre-requisitos
Para ejecutar la automatización, necesitas tener los siguientes pre-requisitos instalados:
- Node.js >= v20.17.0
- NPM >=10.8.2
- Git

## Instalación
Para instalar Cypress, puedes correr el siguiente comando:

```bash
npm install cypress
```

Una vez que Cypress esté instalado, puedes iniciarlo con el siguiente npm:

```bash
npx cypress open
```

## Para descargar el proyecto de GitHub, puedes usar el siguiente comando:

```bash
git clone https://github.com/<yesicafer>/toolbox-Yesica.git
```

## Ejecución de las pruebas

Para ejecutar las pruebas, puedes usar el siguiente comando:

```bash
npx cypress run
```

## Descripción de los tests implementados

En la carpeta e2e, se encuentran las subcarpetas **API** y **UI**, donde se implementarion las siguientes automatizaciones

## API

[link:](https://echo-serv.tbxnet.com/explorer/#/QA/get_qa_test1)  

**Api_get.cy.js** : Se automatizaron las siguientes validaciones para el servicio echo con metodo GET. 

- 1. Se valida el codigo 200 es enviado en el response correctamente, adicional en el envio del request se esta concatenando la variable text.  
- 2. Se implementa assersiones con el fin de validar la homogeniedad de los datos en los header response, haciendo la comparativa en entre la respuesta del servicio y lo especificado en la documentacion del swagger.
- 3. Se valida la duracion de la respuesta del servicio se menor a segundos 

**Nota**: Ruta del payload:
**Cypres** --> **Fixtures** --> **provide_text.json** 

**Api_post_echo.cy.js** Se automatizaron las siguientes validaciones para el servicio echo con metodo POST.

- 1. Se valida el codigo 200 es enviado en el response correctamente 
- 2. Se implementa assersiones con el fin de validar la homogeniedad de los datos en los header response, haciendo la comparativa en entre la respuesta del servicio y lo especificado en la documentacion del swagger
- 3. Se valida la duracion de la respuesta del servicio se menor a  3 segundos 

**Nota**: El payload se encuentra en la siguiente ruta:
**Cypres** --> **Fixtures** --> **provide_text.json** 

## UI 
Se automatizo el registro de un nuevo usuario para la web[https://automationexercise.com/:](https://automationexercise.com/) se crearon los siguientes archivos para guardar el mapeo de elementos y la data para la creacion. 

- locator_signup.js: Se encuentran mapeados todos los elementos para realizar el registro en la web. 

**Nota**: Ruta:
**Cypres** --> **support** --> **locator_signup.js** 

- signup_data.json: Se encuentran la data del nombre y email para iniciar con el proceso del registro en la web. 

**Nota**: Ruta:
**Cypres** --> **fixtures** --> **signup_data.json** 

- form_signup.json: Se encuentran la data del nuevo usuario para terminar  con el proceso del registro en la web.

**Nota**: El archivo se encuentra en la siguiente ruta:
**Cypres** --> **fixtures** --> **form_signup.json** 

## Resultados
Los resultados de las pruebas se pueden encontrar en el archvo **results** 

**Nota**: Generar el reporte, ejecutar el siguiente script.

```bash
npx cypress run --reporter mochawesome
```


## Mejoras propuestas para prueba UI https://automationexercise.com/login

Seccion  --> singup 

- Se deberia revisar el tamaño de los iconos del menu. 
- la seccion de suscription se deberia visualizar en la parte inferior de la pagina web. 
- El tamaño de los botones en general revisarlos, no se ven del tamaño ni ordenado (Login, signup y boton enviar del subscription)
- La pagina principal esta todo en ingles, pero cuando muestra la validacion de algun campo, muestra el mensaje de validacion en español

Seccion --> Home
- Revisar el espacio de la publicidad del slider, 'AutomationExercise' deberia tener un espacio entre palabras
- Cuando se baja el cursor, para algunos items se visualiza con diferente tamaño
- Cuando se selecciona una categoria (women) el texto queda superpuesto a la linea del diseño de la pagina (ubicado en la parte central de la pagina) 

Seccion --> new account

- En la seccion de enter account y addres information, la linea se ve superpuesto.
- Si la pantalla esta con resolucion 1000px by 660px, los iconos del menu superior izquierdo se ven desordenados


