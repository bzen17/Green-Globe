import styled from 'styled-components';
import * as theme from './config/theme';
export const StyledDiv = styled.div`
  
`;

export const StyledMaxWidthSection = styled.section`
  ${(props)=>props.maxWidth?theme.default.maxWidth:'none'};
  margin: auto;
  padding: ${(props) => props.padding?props.padding:'0 3.75rem;'} ;
`;