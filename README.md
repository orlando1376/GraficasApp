# GraficasApp

[Gracias a Fernando Herrera por este curso](https://www.udemy.com/course/angular-fernando-herrera/learn/lecture/24268034#questions)

En esta App veremos un ejemplo de manejo de gráficas hechas con [ng2-charts](https://valor-software.com/ng2-charts/)

- Gráficas dinámicas
- Gráficas de Barra y Dona
- Re-dibujar valores de gráfica
- Gráficas basadas en peticiones HTTP
- Componentes especializados para la re-utilización de gráficas

## Instalación de ng2-charts

### Instalar paquete

``` code
npm install --save ng2-charts
npm install --save chart.js
```

### Usar API

``` code
 import { ChartsModule } from 'ng2-charts';

 // In your App's module:
 imports: [
   ChartsModule
 ]
```

### Instalar json-server

Para el ejemplo de `Dona http` utilizaremos [json-server](https://www.npmjs.com/package/json-server) como servidor backend

``` code
 npm i json-server

```

### Iniciar json-server

Debemos ubicarnos el el directorio database y ejecutar el siguiente comando:

``` code
 npm i json-server

```
