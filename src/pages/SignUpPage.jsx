import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState } from 'react';

const SignUpPage = () => {
  const [register, setRegister] = useState({
    username: '',
    password: '',
    email: '',
  });

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput
          type="text"
          label="帳號"
          value={register.username}
          placeholder="請輸入帳號"
          onChange={(username) => setRegister({ ...register, username })}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="email"
          label="Email"
          value={register.email}
          placeholder="請輸入 email"
          onChange={(email) => setRegister({ ...register, email })}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          value={register.password}
          placeholder="請輸入密碼"
        />
      </AuthInputContainer>
      <AuthButton>註冊</AuthButton>
      <AuthLinkText>取消</AuthLinkText>
    </AuthContainer>
  );
};

export default SignUpPage;
