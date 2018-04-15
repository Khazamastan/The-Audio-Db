import React from 'react';

import Circle from './Circle';
import Wrapper from './Wrapper';

const LoadingIndicator = (props) => (
  <Wrapper size={props.size} top={props.top}>
    <Circle color={props.color}  />
    <Circle color={props.color} rotate={30} delay={-1.1} />
    <Circle color={props.color} rotate={60} delay={-1} />
    <Circle color={props.color} rotate={90} delay={-0.9} />
    <Circle color={props.color} rotate={120} delay={-0.8} />
    <Circle color={props.color} rotate={150} delay={-0.7} />
    <Circle color={props.color} rotate={180} delay={-0.6} />
    <Circle color={props.color} rotate={210} delay={-0.5} />
    <Circle color={props.color} rotate={240} delay={-0.4} />
    <Circle color={props.color} rotate={270} delay={-0.3} />
    <Circle color={props.color} rotate={300} delay={-0.2} />
    <Circle color={props.color} rotate={330} delay={-0.1} />
  </Wrapper>
);

export default LoadingIndicator;
