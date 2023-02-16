import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 40px 60px;
  background: white;
  position: absolute;
  bottom: -120px;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 50px 10px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  color: red;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #grey;
  margin-bottom: 20px;
  font-size: 12px;
  text-decoration: none;
   
  &:hover {
      color: red;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 16px;
  color: red;
  margin-bottom: 40px;
  font-weight: bold;
`;