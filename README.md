## Instalación STRAPI

1. Instalar STRAPI, por ejemplo,

con `npm`
```
npx create-strapi-app@latest my-project  --quickstart
```

o con `yarn`
```
yarn create strapi-app my-project --quickstart
```



## Creación Bucket

1. Acceder a Google Cloud Platform - Cloud Storage

2. Crear un Bucket considerando: 

## Choose how to control access to objects

#### Fine-grained 
    
Se debe de seleccionar el tipo `Fine-grained` para que Google Cloud le permita a Strapi publicar los archivos multimedia que se suben.


## Configuración de la autenticación. 
1. En la consola de GCP, ir a la página de **Create service account key** 
   - **[Ir a la página create service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey)**
2. De las opciones en la lista de **Service account**, elegir **New service account**.
3. Elegir un nombre para  **Service account name**.
4. En la lista de  **Role**, elegir **Cloud Storage > Storage Admin**.
5. Elegir `JSON` del **Key Type**
6. Al darle clic al botón **Create** se descargará un archivo JSON con la key para autenticar.

## Instalar Librería 

1. Acceder a la raíz del proyecto Strapi

2. Instalar librería strapi-provider-upload-google-cloud-storage

con `npm`
```
npm install @strapi-community/strapi-provider-upload-google-cloud-storage --save
```

o con `yarn`
```
yarn add @strapi-community/strapi-provider-upload-google-cloud-storage
```

3. Editar (crear) el archivo `./config/plugins.js`

```js
module.exports = {
    upload: {
      config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: '{bucket-name}',
            publicFiles: true,
            uniform: false,
            serviceAccount: {}, // reemplazar `{}` con el JSON descargado del ServiceAccount
            baseUrl: 'https://storage.googleapis.com/{bucket-name}',
            basePath: '',
        },
      },
    },
    //...
}
```
 Se pueden utilizar proveedores diferentes según el entorno, utilizando un archivo `plugins.js` por cada entorno: 
- `config/env/development/plugins.js`
- `config/env/production/plugins.js`


El archivo `config/env/{env}/` sobreescribirá los datos del archivo `config` princioal.

**Ejemplo con variables de entorno**

```js
module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
          serviceAccount: env.json('GCS_SERVICE_ACCOUNT'),
          bucketName: env('GCS_BUCKET_NAME'),
          basePath: env('GCS_BASE_PATH'),
          baseUrl: env('GCS_BASE_URL'),
          publicFiles: env('GCS_PUBLIC_FILES'),
          uniform: env('GCS_UNIFORM'),
        },
      },
    },
    //...
});
```


4. Modificar la seguridad de Strapi para que no bloquee las URL externas:

Editar el archivo  `./config/middlewares.js`
- En el campo `img-src` y `media-src` agregar la url del CDN (por defecto `storage.googleapis.com`) para poder mostrar las imágenes del bucket externo
```js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'storage.googleapis.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::favicon',
  'strapi::public',
];
```




## Links

- [Google Cloud Storage](https://console.cloud.google.com/storage/)
- [Strapi website](http://strapi.io/)
- [Strapi-provider-upload-google-cloud-storage](https://www.npmjs.com/package/@strapi-community/strapi-provider-upload-google-cloud-storage)