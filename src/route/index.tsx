import React from 'react';
import { createBrowserRouter, NonIndexRouteObject } from 'react-router-dom';
import Canvas from '../pages/canvas/index.tsx';
import DarkTheme from '../pages/darkTheme/index.tsx';
import ThreeJs from '../pages/threeJs/index.tsx';
import WebWorker from '../pages/webWorker/index.tsx';
import Progress from '../pages/progress/index.tsx';
import AutoImage from '../pages/autoImage/index.tsx';
import Taber from '../pages/taber/index.tsx';
import Framer from '../pages/framer/index.tsx';
import Home from '../pages/home/index.tsx';
import Info from '../pages/info/index.tsx';
import Scorll from '../pages/scorll/index.tsx';
import NotFind from '../pages/notFind/index.tsx';
import Flow from '../pages/flow/index.tsx';
import WebWorkerBlob from '../pages/webWorkerBlob/index.tsx';
import AutoScroll from '../pages/autoScroll/index.tsx';
import ShareWorker from '../pages/shareWorker/index.tsx';
import TestPage from '../pages/testpage/index.tsx';
import Test from '../pages/ystest/index.tsx';
import Zustand from '../pages/zustand/index.tsx';
import ExTable from '../pages/exTable/index.tsx';
import LazyFunction from '../pages/lazyFunction/index.tsx';
import WebSocketTest from '../pages/websocketTest/index.tsx';
export interface CustomRouteObject extends NonIndexRouteObject {
  path: string;
  title?: string;
  element?: React.ReactNode | null;
}
export const routeList: CustomRouteObject[] = [
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/info',
        element: <Info />,
      },
    ],
  },
  {
    title: '测试用例',
    path: '/test',
    element: <Test />,
  },
  {
    title: '暗黑主题',
    path: '/darkTheme',
    element: <DarkTheme />,
  },
  {
    title: 'Canvas',
    path: '/Canvas',
    element: <Canvas />,
  },
  {
    title: 'threeJs',
    path: '/threeJs',
    element: <ThreeJs />,
  },
  {
    title: 'webWorker',
    path: '/webWorker',
    element: <WebWorker />,
  },
  {
    title: '上传进度条',
    path: '/progress',
    element: <Progress />,
  },
  {
    title: '自动图片',
    path: '/autoImage',
    element: <AutoImage />,
  },
  {
    title: 'taber',
    path: '/taber',
    element: <Taber />,
  },
  {
    title: 'Framer',
    path: '/framer',
    element: <Framer />,
  },
  {
    title: '滚动',
    path: '/scorll',
    element: <Scorll />,
  },
  {
    title: 'flow',
    path: '/flow',
    element: <Flow />,
  },
  {
    title: 'webWorkerBlob',
    path: '/webWorkerBlob',
    element: <WebWorkerBlob />,
  },
  {
    title: '自动滚动',
    path: '/autoScroll',
    element: <AutoScroll />,
  },
  {
    title: 'shareWorker',
    path: '/shareWorker',
    element: <ShareWorker />,
  },
  {
    title: 'testPage',
    path: '/testPage',
    element: <TestPage />,
  },
  {
    title: 'zustand',
    path: '/zustand',
    element: <Zustand />,
  },
  {
    title: 'exTable',
    path: '/exTable',
    element: <ExTable />,
  },
  {
    title: '惰性函数',
    path: '/lazyFunction',
    element: <LazyFunction />,
  },
  {
    title: 'webSocketTest',
    path: '/webSocketTest',
    element: <WebSocketTest />,
  },
  {
    path: '*',
    element: <NotFind />,
  },
] as const;

const globalRouter = createBrowserRouter([...routeList]);
export default globalRouter;
