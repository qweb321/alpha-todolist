import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../api/auth';
import Swal from 'sweetalert2';

const SignUpPage = () => {
  const [registerInfo, setRegister] = useState({
    username: '',
    password: '',
    email: '',
  });

  const navigate = useNavigate();
  const handleClick = async () => {
    if (
      registerInfo.username.length === 0 ||
      registerInfo.password.length === 0 ||
      registerInfo.email.length === 0
    ) {
      return;
    }
    const showWindow = (status, title) => {
      Swal.fire({
        position: 'top',
        title: title,
        timer: 1000,
        icon: status,
        showConfirmButton: false,
      });
    };

    const { success, authToken } = await register({
      username: registerInfo.username,
      email: registerInfo.email,
      password: registerInfo.password,
    });

    if (success) {
      localStorage.setItem('authToken', authToken);
      showWindow('success', '註冊成功！');
      navigate('/todo');
      return;
    }

    showWindow('error', '註冊失敗');
  };

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
          value={registerInfo.username}
          placeholder="請輸入帳號"
          onChange={(username) => setRegister({ ...registerInfo, username })}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="email"
          label="Email"
          value={registerInfo.email}
          placeholder="請輸入 email"
          onChange={(email) => setRegister({ ...registerInfo, email })}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          value={registerInfo.password}
          onChange={(password) => setRegister({ ...registerInfo, password })}
          placeholder="請輸入密碼"
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <AuthLinkText>取消</AuthLinkText>
    </AuthContainer>
  );
};

export default SignUpPage;
