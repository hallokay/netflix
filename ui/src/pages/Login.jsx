import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// firebase
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseAuth } from "../util/firebase-config";

const Login = () => {
  const navigate = useNavigate();
  const formState = {
    email: "",
    password: "",
  };
  const [formVal, setFormVal] = useState(formState);

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formVal);
    try {
      const { email, password } = formVal;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/home");
  });
  return (
    <Container>
      <Wrap className="flex column a-center j-center">
        <div className="content">
            <h2>로그인</h2>
          <Form onSubmit={onSubmit} className="flex column">
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={formVal.email}
              onChange={(e) =>
                setFormVal({ ...formVal, [e.target.name]: e.target.value })
              }
            />
              
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
                  로그인
                </button>
          </Form>
        </div>
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

  .content {
    background: rgba(0,0,0,.8);
    padding: 2rem;
    width: 50%;
  }
  @media (max-width: 768px) {
    .content {
        width: 85%;
    }
  }
`;
const Form = styled.form`
  display: flex;
  margin-top: 25px;
  gap: 1rem;
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

`;
export default Login;
