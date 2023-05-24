import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import styled from 'styled-components';

const SearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);
 
    return (
    <Container>
    <Search className={`${showSearch ? 'show' : ''}`}>
        <button
            onFocus={() => setShowSearch(true)}
            onBlur={() => {
                if(!inputHover) {
                    setShowSearch(false);
                }
            }}>
            <FaSearch/>
        </button>
        <input 
            type='text'
            placeholder='Search'
            onMouseEnter={() => setInputHover(true)}
            onMouseLeave={() => setInputHover(false)}
            onBlur={() => {
                setInputHover(false);
                setShowSearch(false);
            }}
        />
    </Search>

    </Container>
  )
}
const Container = styled.div`
  margin-right: 1rem;
  .show {
    border: 1px solid #fff;
    background: rgba(0, 0, 0, 0.6);
    input {
      width: 100%;
      opacity: 1;
      visibility: visible;
      padding: 0.3rem;
    }
  }
`;
const Search = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    gap: .4rem;
    padding: .2rem;
    padding-left: .5rem;

    button{
        background: transparent;
        border: none;
        &:focus {
            outline: none;
        }
        svg {
            color: #fff;
            font-size: 1.2rem;
        }
    }
    input {
        width: 0;
        opacity: 0;
        visibility: hidden;
        transition: .3s ease-in-out;
        background: transparent;
        border: none;
        color: #fff;
        &:focus {
            outline: none;
        }
    }
`

export default SearchBar