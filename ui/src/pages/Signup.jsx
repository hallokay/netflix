import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// firebase
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from '../util/firebase-config'

import { useDispatch } from "react-redux";
import {setUserLongin} from '../store/features/userSlice'

const Signup = () => {
  const dispatch = useDispatch();

    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const formState = {
    email: "",
    password: "",
  };
  const [formVal, setFormVal] = useState(formState);

  const onSubmit = async(e) => {
    e.preventDefault();
    // console.log(formVal);
    try{
        const { email, password } = formVal;
        await createUserWithEmailAndPassword(firebaseAuth, email, password);
        
        
    } catch (err) {
        console.log(err);
    }
  }
const setUser = currentUser => {
  console.log('signup',currentUser);
  const {
    email,
    reloadUserInfo: { passwordHash: password },
  } = currentUser;
  dispatch(setUserLongin( email , password));

}
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser) {
      setUser(currentUser);
      navigate('/home')
    }
  })
  return (
    <Container>
      <Wrap className="flex column a-center j-center">
        <div className="text flex column a-center">
          <h1>영화, 시리즈 등을 무제한으로</h1>
          <h4>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h4>
          <h6>
            시청할 준비가 되셨나요? 멤버십을 등록하려면 이메일 주소와 비밀번호를
            입력하세요.
          </h6>
        </div>

        <Form onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={formVal.email}
            onChange={(e) =>
              setFormVal({ ...formVal, [e.target.name]: e.target.value })
            }
          />
          {showPassword && (
            <>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formVal.password}
                onChange={(e) =>
                  setFormVal({ ...formVal, [e.target.name]: e.target.value })
                }
              />
              <button type="submit" className="main-btn">
                가입하기
              </button>
            </>
          )}
          {!showPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(true)}
              className="main-btn"
            >
              시작하기
            </button>
          )}
        </Form>
      </Wrap>
    </Container>
  );
};
const Container = styled.section`
  position: relative;
  display: block;
  min-height: 100vh;
  /* 배경 한톤 어둡게 */
  background: rgba(0, 0, 0, 0.4);

  /* 배경 */
  &::after {
    position: absolute;
    content: "";
    background: url("/images/login.jpg") center center / cover no-repeat fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -5;
  }
`;

const Wrap = styled.div`
  min-height: 100vh;
  gap: 1.5rem;

  .text {
    gap: 1rem;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    .text {
      font-size: 1rem;
    }
  }
`;
const Form = styled.form`
  display: flex;

  input {
    background: rgba(0, 0, 0, 0.8);
    color: #ccc;
    padding: 0.8rem;
    font-size: 1.2rem;
    border: none;
    margin-right: 0.5rem;

    &:focus {
      outline: none;
      background: rgba(0, 0, 0, 0.8);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;
export default Signup;
