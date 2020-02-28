module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
    themeColor: '#f3d4d4',
    msTileColor: '#f3d4d4',
    appleMobileWebAppStatusBarStyle: '#f3d4d4',
    name: 'Just Forecast',
    iconPaths: [
      {
        src: 'manifest-icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'manifest-icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/just-forecast/'
    : '/'
}
