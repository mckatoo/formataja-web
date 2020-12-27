import styled from 'styled-components'

export const PopperContainer = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: white;
  padding: 20px;
  text-align: center;

  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: '';
      background-color: white;
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -25px;
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -30px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`
