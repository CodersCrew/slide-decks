import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-width: ${props => props.width}px;
  min-height: ${props => props.height}px;
  max-width: ${props => props.width}px;
  max-height: ${props => props.height}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  transform: scale(${props => props.scale});
  overflow: hidden;
  background-color: black;
`;
