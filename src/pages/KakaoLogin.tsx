import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Rest_api_key, redirect_uri } from '../components/SocialLogin';

export default function KakaoLogin() {
  const navigate = useNavigate();

  const UrlSearchParams = new URLSearchParams(window.location.search);
  const KAKAO_CODE = UrlSearchParams.get('code');

  function getKakaoToken() {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=authorization_code&client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&code=${KAKAO_CODE}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          localStorage.setItem('token', data.access_token);
          //ToDo : 여기서 로그인 상태 유지하는 코드 넣어야함
          //이후 메인으로 이동
          navigate('/');
        } else {
          navigate('/notFound');
        }
      });
  }

  useEffect(() => {
    if (!window.location.search) return;
    getKakaoToken();
  }, []);

  useEffect(() => {
    if (KAKAO_CODE) {
      console.log('KAKAO_CODE:', KAKAO_CODE);
    }
  }, []);

  return (
    <div>
      <div>🟥 pages: KakaoLogin 🟥</div>
    </div>
  );
}
