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
import { login } from '../api/auth';
import Swal from 'sweetalert2';
import { checkPermission } from '../api/auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkTokenIsValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        return;
      }
      const result = await checkPermission(authToken);
      if (result) {
        navigate('/todo');
      }
    };

    checkTokenIsValid();
  }, [navigate]);

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

    const { success, authToken } = await login({ username, password });

    if (success) {
      localStorage.setItem('authToken', authToken);
      showWindow('success', '登入成功！');
      navigate('/todo');
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
