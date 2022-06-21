module.exports = {
    upload: {
      config: {
        provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
        providerOptions: {
            bucketName: 'esb-strapi-bucket',
            publicFiles: true,
            uniform: false,
            serviceAccount: {
              "type": "service_account",
              "project_id": "api-project-33905381274",
              "private_key_id": "3bc4a33ae4c312e2c93a459aeb8572f40af7155d",
              "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDgrcKOXW/LztVN\nDlnZAVR3AJJEImxssX7Aj0XisUNL77sD6lsmcUkXyTATei8FHDx4XFZc3lVcXr9y\ncWlyPtS/TVgeNPzROpCwtFEttCedyDi0ettMrRUNbU4hqNsW4FX53otBKtKy1kmX\na+WKEn+AY+eycwkLWQH418PzTIaWmh45PtgI4KtcBvPEoZtQgAo7nY9saa2Xz5BO\nJZbuINSkbRfSjvwyfdMciSihFxHtrRno/2r6bfOF1C9Ejstp2bBE+qoWYxY2X09X\n0Hd088HvnsKEVN3Tnsn4nlJoePU65MNlWkCnHh9bdJoUzrmrhYZlXQNsTvvmpBRG\nWlqaiCEjAgMBAAECggEAP1lu7nI09+u5I7FkrvWbibQ9CX4FQT5opUWgaFMfzPTq\nr6dwDO5LNCwzZIKCaHf2Kt+qMCQ2QEWsyElm+GHz3X6i1l2NXTccnd4xt2fA9dGC\n/4xWcg+pTHBh48a3A4O8aigP7o9y+h7GgC3Zei1OCvbgWOXrimoNzsqTgvG0Txjc\n+TyGMNdmJZ7Zwp4dZnqHzqyOtK5nvEo0Iyecc3oRtgWzkUOJsMQ1GiOzAsB59feK\nBNR10+JSKgTlNgi1MSv8Z66TrNM3ekpbxv0gKDV71em1YWiEuHps0xN0SAN/5H4j\nrhSjuRwtlNxtyj3kVYV9XcYO10GtCUDWJ7tDZSioLQKBgQD8hUk9AD86h+IHu9L6\n6itOdjO/JmnQXDRojyiA3uFX+pzIauWXcaaqDJnhmBZTN9JgrT+srq07ktTKLL2C\n6YgZ+6pdfKlOOMtDrbulwHB9ixJiVz9+9DK+qubJsCuHrVW1S+sNTVcQQK2WyM2c\naCxOkAVBU17v3ajsSm9dY6zvFwKBgQDjxkR00APoY03Of40Md1Ee3ZOT8zh8hArP\n5KzArTCFqQLq2LqpwzCsKggEvqfq4KRsWk+ilVCuW4njuBEwM/6w4jS7W27XUBn/\nlDURsRwTUtQbeQoCMmXv8u9lJn/tRcRrBYddVON0+NlVJoiqyEI6opjNBFKibzYH\nnszASuxF1QKBgQCrmA76is5sgaXQx4tIwhOHj77+J6ZD1kQuwQku+UV7uWsMrccy\nMCKm70UqDWUuS4KD+3aHa3OARfifIePtr6+yqFdOi8Wox+MoLEiVC73lMbneZZda\nN6q78fo+F56c5eaV+e7R7To6axkKm41MuWVSRX+ssnCS4rdFShd/CJqdJQKBgGL9\nTc7+gFREpBH0eRZL3KNvZK3N7GSg9hn3peRu4EGWfEAYRLd2rvaDpcx6F3wKeSrl\n7OoZvmCoQ7sFyeKLFktFY+lxCTDmDQZ4IMA5mpwDSU9PQTxHLuojSEtLehliUsS4\nOGYleFzjsYBCKO8f7TiSZZnkIQ2bC34wU4fWh+ypAoGBAIcZlvU74pCtxP1NJ4Ih\n6nyn1KJK2EsjxXZDJ227PPky5Wk5oQKf0pOdDj6xYYCai0TWbWKWMFinOOYlIqEV\nIMOWaEbyR4wBWtimCPzEPHw6JT9JJTPPNGz2Vbw2T2XrYZ/7/m6LzvXfzcZ0l4Dl\nLiZyhb3UUuNGKgGyvD0j5Ho0\n-----END PRIVATE KEY-----\n",
              "client_email": "strapi-demo@api-project-33905381274.iam.gserviceaccount.com",
              "client_id": "115862344395722726473",
              "auth_uri": "https://accounts.google.com/o/oauth2/auth",
              "token_uri": "https://oauth2.googleapis.com/token",
              "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
              "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/strapi-demo%40api-project-33905381274.iam.gserviceaccount.com"
            }
              , // replace `{}` with your serviceAccount JSON object
            baseUrl: 'https://storage.googleapis.com/esb-strapi-bucket',
            basePath: '/demo-strapi',
            gzip: true,
        },
      },
    },
    //...
}