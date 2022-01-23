// 반응형 모바일 사이즈 설정
// index.js에 전체 포맷을 ThemeProvider로 설정
const size = {
  mobile: '500px'
};

const theme = {
  mobile: `(max-width: ${size.mobile})`
};

export default theme;
