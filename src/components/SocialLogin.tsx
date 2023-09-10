import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppleIcon, GoogleIcon, KakaoIcon } from '../assets';

type LoginType = 'GOOGLE' | 'APPLE' | 'KAKAO' | 'TEST';

interface LoginOption {
  value: LoginType;
  icon: React.ReactElement;
  onClick: () => void;
}
export function useHelper(testMode: boolean) {
  const navigate = useNavigate();

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
