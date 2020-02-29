module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    themeColor: '#f3d4d4',
    msTileColor: '#f3d4d4',
    appleMobileWebAppStatusBarStyle: '#f3d4d4',
    appleMobileWebAppCapable: 'yes',
    name: 'Just Forecast',
    manifestOptions: {
      background_color: '#f3d4d4'
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/just-forecast/'
    : '/'
}
