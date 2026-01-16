import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN'; // 引入Antd中文语言包

function App() {
  return (
    <ConfigProvider locale={zhCN}> {/* 配置Antd为中文 */}
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;