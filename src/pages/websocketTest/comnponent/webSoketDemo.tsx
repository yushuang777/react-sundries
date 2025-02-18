// src/WebSocketDemo.js
import React, { useEffect, useState } from 'react';

const WebSocketDemo = () => {
  const [message, setMessage] = useState('');
  const [wsConnection, setWsConnection] = useState(null) as any;

  useEffect(() => {
    const socket = new WebSocket('ws://example.com/socket');

    // 连接成功时的回调
    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    // 接收到消息时的回调
    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
      setMessage(event.data); // 更新接收到的消息
    };

    // 连接关闭时的回调
    socket.onclose = () => {
      console.log('WebSocket disconnected');
    };

    // 错误处理
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // 保存 WebSocket 连接，以便以后操作
    setWsConnection(socket);

    // 清理 WebSocket 连接（在组件卸载时关闭连接）
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  // 发送消息到 WebSocket 服务器
  const sendMessage = () => {
    if (wsConnection && wsConnection.readyState === WebSocket.OPEN) {
      wsConnection.send('Hello from React!');
    } else {
      console.log('WebSocket is not open');
    }
  };

  return (
    <div>
      <h1>WebSocket Demo</h1>
      <div>
        <button onClick={sendMessage}>Send Message</button>
      </div>
      <div>
        <h3>Received Message:</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default WebSocketDemo;
