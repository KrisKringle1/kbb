import styled, { keyframes } from "styled-components";

export const DataContainer = styled.div`
  flex: 1;
  background: #72a0c1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 10px;
  margin: 20px 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
  padding: 15px 20px;
  min-width: 900px;
`;

export const JustifyContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const AppContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const DealerViewContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  display: flex;
  justify-content: center;
`;
export const HeaderContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  border-radius: 12px;
  border: none;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  background-color: #002244;

  &:active {
    transform: translateY(-2px);
  }
  border-radius: 10px;
`;

export const ButtonSpan = styled.span`
  display: block;
  background-color: #00308f;
  padding: 12px 42px;
  border-radius: 12px;
  font-size: 1.25rem;
  color: white;
  transform: translateY(-6px);
  &:active {
    transform: translateY(-2px);
  }
`;

export const Heading = styled.header`
  background-color: #0151cc;
  color: white;
  border-radius: 10px;
`;

export const DealerContainer = styled.div`
  flex: 1;
  background: #0a51cc;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  visibility:  visible;
  animation:  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  } 1s linear;
  transition: visibility 1s linear;
  color: white;
  border-radius: 10px;
  margin: 20px 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
  padding: 15px 20px;
`;

export const CarContainer = styled.div`
  flex: 1;
  background: #72a0c1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  border-radius: 10px;
  margin: 20px 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6);
  padding: 15px 20px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const FadeIn = ({
  duration = 2500,
  delay = 3,
  children,
  ...delegated
}) => {
  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: duration + "ms",
        animationDelay: delay + "ms",
      }}
    >
      {children}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`;

export const ListItem = styled.li`
margin-top: 50px
margin-bottom: 10px
`;
