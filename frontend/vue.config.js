const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // Konfigurasi Electron di sini
        appId: 'com.example.sikadesktop',
        productName: 'Sikad Desktop',
        directories: {
          output: 'dist_electron' // Output direktori untuk aplikasi Electron
        },
        // Lainnya sesuai kebutuhan Anda
      },
      preload: 'src/preload.js' // Contoh file preload
    }
  }
})
