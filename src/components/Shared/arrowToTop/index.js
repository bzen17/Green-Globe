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
    height: 2.5rem;
    background: rgba(0,173,181,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 5rem;
    right: 2.8rem;
    opacity: 0;
    border-radius: 100px;
    transition: opacity 1s ease-in-out;
    z-index: 2;
    box-shadow: 0 0 5px 0 black;
    
  &:hover {
    background: rgba(0,173,181,1);;
  }

  img {
    width: 1rem;
    height: 1.5rem;
    transform: rotate(-90deg);
  }

`;

const Arrowtotop = (props) => {
  const {navigateToTop} = props;
  const toTop = () => {
    if (window.scrollY) {
      window.scroll({top: 0, left: 0, behavior: 'smooth' });
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
