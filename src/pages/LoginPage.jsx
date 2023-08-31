import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from 'contexts/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate('/todos');
  //   }
  // }, [navigate, isAuthenticated]);

  const handleClick = async () => {
    if (username.length === 0 || password.length === 0) {
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

    const success = await login({ username, password });

    if (success) {
      showWindow('success', '登入成功！');
      return;
    }

    showWindow('error', '登入失敗');
  };
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          type="text"
          label="帳號"
          placeholder="請輸入帳號"
          value={username}
          onChange={(username) => setUsername(username)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type="password"
          label="密碼"
          value={password}
          placeholder="請輸入密碼"
          onChange={(password) => setPassword(password)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
