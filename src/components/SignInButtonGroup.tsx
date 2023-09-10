type LoginType = 'GOOGLE' | 'APPLE' | 'KAKAO' | 'TEST';

interface LoginOption {
  value?: LoginType;
  icon?: React.ReactElement;
  classes?: string;
  onClick: () => void;
}

interface SignInButtonGroupProps {
  options: LoginOption[];
}

export default function SignInButtonGroup({ options }: SignInButtonGroupProps) {
  return (
    <div>
      {options.map(opt => (
        <button onClick={opt.onClick}>
          <span>{opt.icon}</span>
        </button>
      ))}
    </div>
  );
}
