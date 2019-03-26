import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: auto;
`;

const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

class LoadingDots extends Component {
  render() {
    return (
      <DotWrapper>
        <Dot delay=".2s" />
        <Dot delay=".5s" />
        <Dot delay=".9s" />
      </DotWrapper>
    )
  }
}

export default LoadingDots;
