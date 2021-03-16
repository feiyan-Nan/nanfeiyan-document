import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import * as path from 'path';

export default defineConfig((env) => {
  console.log(env);
  return {
    plugins: [
      reactRefresh(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd',
            style: (name) => `antd/lib/${name}/style/index.less`,
          },
        ],
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'), // 根路径
        '@': path.resolve(__dirname, 'src'), // src 路径
      },
    },
  };
});
