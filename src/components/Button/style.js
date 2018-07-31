import styled from 'styled-components';

const style = {
  primary: {
    color: '#fff',
    backgroundColor: '#3da1ce',
    hoverBackground: '#70d8f5',
  },
  success: {
    color: '#fff',
    backgroundColor: '#28a745',
    hoverBackground: '#218838;',
  },
  light: {
    color: '#212529',
    backgroundColor: '#f8f9fa',
    hoverBackground: '#e2e6ea;',
  },
};


export const StyledButton = styled.button`
    margin: 10px;
    width: ${props => (props.width ? props.width : '91%')};
    color: ${props => style[props.colorScheme].color};
    background-color: ${props => style[props.colorScheme].backgroundColor};
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: .15s;
    line-height: 1.5;
    padding: .375rem .75rem;
    cursor: pointer;
    &:hover {
        background-color: ${props => style[props.colorScheme].hoverBackground}
    }
`;
