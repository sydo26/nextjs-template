import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 50px;

  h2 {
    position: relative;
    width: 100%;
    text-align: center;
    font-family: Open Sans, sans-serif;
    font-weight: 400;
    font-size: 28px;
    margin: 20px 0;
    color: ${props => props.theme.colors.text};
  }

  b {
    color: ${props => props.theme.colors.primary};
  }

  img {
    width: 25vw;
    height: 25vw;
    min-width: 300px;
    min-height: 300px;
    max-width: 720px;
    max-height: 720px;
    border-radius: 100%;
    object-fit: cover;
  }

  footer {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    list-style: none;
    float: left;
    width: 100%;
    height: auto;
    max-width: 300px;
  }

  li {
    width: 32px;
    height: 32px;
    margin: 0 20px;
    transform: scale(0.96);
    cursor: pointer;
    transition: 0.1s transform ease;
  }

  li > svg {
    width: 100%;
    height: 100%;
  }

  li:hover {
    transform: scale(1);
  }

  li:hover > svg {
    fill: ${props => props.theme.colors.primary};
  }

  i {
    width: 100%;
    text-align: center;
    margin: 20px 0;
    font-family: Open Sans, sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
    color: ${props => props.theme.colors.text};
  }
`
