const proxyConfig = [
  {
    context: ['/backend/'],
    target: 'http://localhost:8080/users',
    secure: true,
    changeOrigin: true,
    changeOrigin: true
  }   
  }
];

module.exports = proxyConfig;