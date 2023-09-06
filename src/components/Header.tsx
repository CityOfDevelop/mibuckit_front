import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex absolute items-center top-0 w-full h-44px bg-white ">
      <h1>🟥 Components : Header 🟥</h1>
      <div onClick={() => navigate('/')}>Home</div>
      <div onClick={() => navigate('/mypage')}>MyPage</div>
      <div className="" onClick={() => navigate('/login')}>
        로그인
      </div>
      <div onClick={() => navigate('/signup')}>회원가입</div>
      <div onClick={() => navigate('*')}>Notfound</div>
    </div>
  );
}
