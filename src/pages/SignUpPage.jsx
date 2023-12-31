import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from '../components/common/auth.styled';
import ACLogoIcon from '../assets/images/ac-logo.svg';
import AuthInput from '../components/AuthInput';

const SignUpPage = () => {
  return (
    <AuthContainer>
      <div>
        <img src={ACLogoIcon} />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput />
      </AuthInputContainer>
      <AuthButton>註冊</AuthButton>
      <AuthLinkText>取消</AuthLinkText>
    </AuthContainer>
  );
};

export default SignUpPage;
