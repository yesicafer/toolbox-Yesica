---
name: "Yesica Guayabo"
---

### Environment
URL: (https://echo-serv.tbxnet.com/v1/qa/test1)
Stage: qa

<link to screenshot or video>
N/A

### Logs
<paste console logs here>

### Network Requests
<paste output from network requests tab here>

### Browser Metadata
| Field      | Value                                            |
|------------|--------------                                    |
| Browser    | Chrome                                           |
| Version    | Versión 134.0.6998.178 (Build oficial) (64 bits) |


Case1: Validar el link, sin impresion con formato estilistico --> Ok
Respuesta: {"ok":true,"date":"2025-04-04T22:42:58.349Z"}
Observaciones: **Ok**.La hora actual es 05:42 pero en la pagina esta mostrando 22:42, falta validar si es correcto como lo tienen configurado en el servidor o se deba cambiar

Case1: Validar el link, con impresion con formato estilistico --> Ok
Respuesta:{
  "ok": true,
  "date": "2025-04-04T22:54:37.650Z"
}
Observaciones: La hora actual es 05:54 pero en la pagina esta mostrando 22:42, falta validar si es correcto como lo tienen configurado en el servidor o se deba cambiar


---

### Environment
URL: (https://echo-serv.tbxnet.com/v1/qa/test2)
Stage: qa

<link to screenshot or video>
N/A


### Logs
<GET https://echo-serv.tbxnet.com/v1/qa/test2 500 (Internal Server Error)>

### Network Requests
<{"code":"SYS-ERR","message":"An Error","details":"An Error","status":500}>

### Browser Metadata
| Field      | Value                                            |
|------------|--------------                                    |
| Browser    | Chrome                                           |
| Version    | Versión 134.0.6998.178 (Build oficial) (64 bits) |


Case2: Validar el link, sin impresion con formato estilistico --> Ok
Respuesta: {"code":"SYS-ERR","message":"An Error","details":"An Error","status":500}
Observaciones: **failed**

Case2.2: Validar el link, con impresion con formato estilistico --> Ok
Respuesta{
  "code": "SYS-ERR",
  "message": "An Error",
  "details": "An Error",b
  "status": 500
}
Observaciones: **failed**

### BUG

| Bug #      | Name                                  |Description    
|------------|---------------                        |
| 1          | Error 500 cuando se ingresa al link   |Al ingresar al link https://echo-serv.tbxnet.com/v1/qa/test2 
|            |                                       |genera error 500

        


[Ref:](https://echo-serv.tbxnet.com/public/bugreport.md)
