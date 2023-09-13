import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppleIcon, GoogleIcon, KakaoIcon } from '../assets';

type LoginType = 'GOOGLE' | 'APPLE' | 'KAKAO' | 'TEST';

interface LoginOption {
  value: LoginType;
  icon: React.ReactElement;
  onClick: () => void;
}

//카카오 로그인_필요한 정보
export const Rest_api_key = '90f10e8c1b10fc14551f41210f311954'; // REST API KEY
export const redirect_uri = 'http://localhost:3000/kakaoLogin'; // Redirect URI

export function useHelper(testMode: boolean) {
  const navigate = useNavigate();

  const KAKAO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = useCallback((mode: LoginType) => {
    switch (mode) {
      case 'GOOGLE':
        console.log('구글 로그인');
        break;
      case 'APPLE':
        console.log('애플 로그인');
        break;
      case 'KAKAO':
        console.log('카카오 로그인');
        window.location.href = KAKAO_URL;
        break;
      case 'TEST':
        navigate('/');
        break;
    }
  }, []);

  const loginOptions = useMemo(() => {
    const options: LoginOption[] = [
      {
        value: 'GOOGLE' as LoginType,
        icon: <GoogleIcon width={22} height={22} />,
        onClick: () => handleLogin('GOOGLE'),
      },
      {
        value: 'APPLE' as LoginType,
        icon: <AppleIcon width={22} height={22} />,
        onClick: () => handleLogin('APPLE'),
      },
      {
        value: 'KAKAO' as LoginType,
        icon: <KakaoIcon width={22} height={22} />,
        onClick: () => handleLogin('KAKAO'),
      },
    ];

    return options;
  }, [testMode]);

  return { loginOptions };
}
