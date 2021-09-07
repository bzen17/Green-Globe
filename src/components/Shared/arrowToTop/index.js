import React from 'react';
import styled from 'styled-components';

const TopWrapper = styled.div`
position: absolute;
& .arrowWrap {
  opacity: 1;
  cursor: pointer;
}

& .NoarrowWrap {
  opacity: 0;
  cursor: default;
}
`;

const Arrowfooter = styled.div`
    position: fixed;
    width: 2.5rem;
    height: 2.8125rem;
    background: #e20074;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 5rem;
    right: 2.8rem;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 2;
    
  &:hover {
    background: #ba0060;
  }

  img {
    width: 0.918rem;
    height: 1.875rem;
    transform: rotate(-90deg);
  }

`;

const Arrowtotop = (props) => {
  const {navigateToTop} = props;
  const toTop = () => {
    if (window.scrollY) {
      window.scroll(0, 0);
    }
  };

  return (
    <TopWrapper>
      <Arrowfooter className={navigateToTop ? 'arrowWrap arrow-btn-gtm' : 'NoarrowWrap'} onClick={navigateToTop && toTop}>
        <img className={'arrowIcon arrow-btn-gtm'} src='/assets/arrow.svg' alt="arrow" />
      </Arrowfooter>
    </TopWrapper>

  );
};

export default Arrowtotop;
