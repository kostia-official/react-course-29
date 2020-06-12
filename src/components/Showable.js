import styled from 'styled-components';

const Showable = styled.div`
  display: ${(props) => (props.isShow ? 'block' : 'none')};
`;
