// next.config.js
const withPWA = require('next-pwa')({
    dest: 'public', // 서비스워커를 어디에 저장할지
    register: true,
    skipWaiting: true,
  });
  
  module.exports = withPWA({
    // 기타 Next.js 설정
  });