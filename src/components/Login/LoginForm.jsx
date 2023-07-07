import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../../apis/authService';
import * as Styled from './LoginFormStyled';
import { loginSchema } from '../../validators/authValidator';
import Logo from '../../images/BookLink_Logo.svg';
import showPasswordImg from '../../images/password_eye.svg';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(() => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const watchEmail = watch('email');
  const watchPassword = watch('password');

  //[ 로그인 ]
  const handleOnSubmit = useCallback(async (user) => {
    try {
      const { email, password } = user;

      const { status, data } = await login({ email, password });

      if (status !== 200) throw new Error(data.message);

      alert(data.message);
    } catch (error) {
      console.error(error);
      console.log(error.message);
    }
  }, []);

  return (
    <Styled.LoginDiv>
      <Styled.LogoDiv>
        <Styled.Img src={Logo} />
      </Styled.LogoDiv>
      <Styled.LoginFormDiv>
        <Styled.LoginForm onSubmit={handleSubmit(handleOnSubmit)}>
          <Styled.InputDiv>
            <Styled.Label htmlFor="email">아이디</Styled.Label>
            <Styled.LoginInput
              type="email"
              id="email"
              placeholder="example@gmail.com"
              {...register('email')}
            />
            {watchEmail && errors.email && (
              <Styled.ErrorMessage>{errors.email.message}</Styled.ErrorMessage>
            )}
          </Styled.InputDiv>
          <Styled.InputDivWithMargin>
            <Styled.Label htmlFor="password">패스워드</Styled.Label>
            <Styled.LoginInput
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="8~16자로 입력해주세요."
              {...register('password')}
            />
            <Styled.ShowPasswordImg
              src={showPasswordImg}
              onClick={handleShowPassword}
            />
            {watchPassword && errors.password && (
              <Styled.ErrorMessage>
                {errors.password.message}
              </Styled.ErrorMessage>
            )}
          </Styled.InputDivWithMargin>
          <Styled.LoginFormFooterDiv>
            <div>
              <Styled.LoginFormCheckBox type="checkbox" id="checkbox" />
              <Styled.LoginFormFooterLabel htmlFor="checkbox">
                아이디/비밀번호 기억하기
              </Styled.LoginFormFooterLabel>
            </div>
            <div>
              <Styled.StyledLink to="#">아이디/비밀번호 찾기</Styled.StyledLink>
            </div>
          </Styled.LoginFormFooterDiv>
          <Styled.LoginButton type="submit">로그인</Styled.LoginButton>
          <Styled.RegisterButton to="/register">
            회원가입 하기
          </Styled.RegisterButton>
        </Styled.LoginForm>
      </Styled.LoginFormDiv>
    </Styled.LoginDiv>
  );
};

export default LoginForm;
