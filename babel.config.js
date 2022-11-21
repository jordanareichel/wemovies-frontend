module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['styled-components', { ssr: true }],
    'inline-react-svg',
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@utils': './src/utils',
          '@styles': './src/styles',
          '@api': './src/api',
          '@contexts': './src/contexts',
        },
        include: ['NODE_ENV'],
      },
    ],
  ],
};
