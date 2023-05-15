import React, { useState } from "react";
import styled from "styled-components";
import { Bgimg } from "../components";

const Signup = () => {
  const formState = {
    email: "",
    password: "",
  };
  const [formVal, setFormVal] = useState(formState);

  return (
    <Container>
      <Bgimg />
      <div className="body flex column a-center j-center">
        <div className="text flex column">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>
            Ready to watch? Enter your email to create or restart membership.
          </h6>
        </div>

        <form>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={formVal.email}
            onChange={(e) =>
              setFormVal({ ...formVal, [e.target.name]: e.target.value })
            }
          />
          <input type="password" name="password" placeholder="Password"/>
            <button>Get Started</button>
        </form>
        <button>Log In</button>
      </div>
    </Container>
  );
};
const Container = styled.section`
    /* position: relative; */
`;
export default Signup;
