import styled from 'styled-components';


export const StyledSearchBar = styled.div`
    width: 100%;
    height: 60px;
    background: #1c1c1c;
    padding: 10px 20px 0px 20px;
    box-sizing: border-box;
    color: #fff;
`;

export const StyledSearchBarContent = styled.div`
    max-width: 1280px;
    width: 100%;
    height: 40px;
    background: #353535;
    margin: 0 auto;
    border-radius: 40px;
    position: relative;
    color: #fff;

    .search {
    position: absolute;
    left: 20px;
    top: 8px;
    color: #fff;
    z-index: 1000;
    }

    input {
    font-family: 'Abel', sans-serif;
    font-size: 18px;
    position: absolute;
    left: 0px;
    margin: 1px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;
    box-sizing: border-box;

    :focus {
        outline: none;
    }

    @media screen and (max-width: 720px) {
        font-size: 28px;
    }
    }

`