import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { emailRegEx, passwordRegEx } from '../constants/Validation';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    id: '',
    pw: '',
  });
  const [message, setMessage] = useState({
    id: '',
    pw: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const value = e.target.value;

    console.log('handleChange함수 발생 -- inputContent', id, value);

    let newMessage = '';
    if (id === 'id' && !emailRegEx.test(value)) {
      newMessage = '❌ 이메일의 형식이 올바르지 않습니다.';
    } else newMessage = '';

    setMessage({ ...message, [id]: newMessage });
    setFormData({ ...formData, [id]: value });
  };

  const isFormValid = !message.id && formData.id && formData.pw;

  <input
    type="submit"
    value="로그인"
    disabled={!isFormValid}
    onClick={e => {
      e.preventDefault();
      if (isFormValid) {
        navigate('/');
      }
    }}
  />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <div>PurDream</div>
      <div>로그인</div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* <Label htmlFor="id">ID</Label> */}
        <div>
          <input className="" type="text" id="id" placeholder="이메일" value={formData.id} onChange={handleChange} />
          <p className="message">{message.id}</p>
          <input type="password" id="pw" placeholder="비밀번호" value={formData.pw} onChange={handleChange} maxLength={12} />
          <p className="message">{message.pw}</p>
        </div>
        <div>
          <span>아이디 찾기</span>
          <span>/</span>
          <span>비밀번호 찾기</span>
        </div>
        <input
          type="submit"
          value="로그인"
          onClick={() => {
            navigate('/');
          }}
        />
        <div onClick={() => navigate('/signup')}>이메일 회원가입</div>
      </form>
    </div>
  );
}
