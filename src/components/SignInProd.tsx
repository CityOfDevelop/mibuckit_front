import SignInButtonGroup from './SignInButtonGroup';
import { useHelper } from './SocialLogin';

export default function SignInProd() {
  const { loginOptions } = useHelper(false);

  return (
    <>
      <h1>소셜 로그인 테스트</h1>
      <SignInButtonGroup options={loginOptions} />
    </>
  );
}
