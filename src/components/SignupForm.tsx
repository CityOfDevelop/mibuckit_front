import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailRegEx, passwordRegEx } from '../constants/Validation';

export default function SignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    pw: '',
    pwCheck: '',
  });
  const [message, setMessage] = useState({
    email: '',
    pw: '',
    pwCheck: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    let newMessage = '';

    if (id === 'email') {
      newMessage = emailRegEx.test(value) ? '🌱 사용 가능한 이메일 입니다.' : '❌ 이메일의 형식이 올바르지 않습니다.';
    } else if (id === 'pw') {
      newMessage = passwordRegEx.test(value) ? '🌱 안전한 비밀번호 입니다.' : '❌ 비밀번호는 영문 대소문자, 숫자를 혼합하여 8~12자로 입력해주세요';
    } else if (id === 'pwCheck') {
      newMessage = formData.pw && formData.pw !== value ? '❌ 비밀번호가 일치하지 않습니다.' : '🌱 비밀번호가 일치합니다.';
    }
    setFormData({ ...formData, [id]: value });
    setMessage({ ...message, [id]: newMessage });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 우선 메인으로 이동하는걸로 해놓음
    navigate('/');
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <h1>🟥 Components : SignupForm 🟥</h1>
      <header>
        <div>로고자리</div>
        <h1>회원가입</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <main>
          <div>이메일</div>
          <input className="" type="email" id="email" pattern=".+@gmail\.com" placeholder="이메일을 입력해주세요." value={formData.email} onChange={handleChange} />
          <p className="message">{message.email}</p>

          <div>비밀번호</div>
          <input type="password" id="pw" placeholder="비밀번호를 입력해주세요." value={formData.pw} onChange={handleChange} maxLength={12} />
          <p className="message">{message.pw}</p>

          <div>비밀번호 확인</div>
          <input type="password" id="pwCheck" placeholder="비밀번호를 입력해주세요." value={formData.pwCheck} onChange={handleChange} maxLength={12} />
          <p className="message">{message.pwCheck}</p>
        </main>
        <input type="submit" value="가입하기" />
      </form>
    </>
  );
}
