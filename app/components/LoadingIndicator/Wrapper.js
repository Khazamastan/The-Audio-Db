import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${props => ((props.top || 30) +'%') } auto auto auto;
  text-align : center;
  width: ${props => ((props.size || 40) +'px') };
  height: ${props => ((props.size || 40) +'px') };
  position: relative;
`;

export default Wrapper;
