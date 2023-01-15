import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 300px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 2px #d7e0ea;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Description = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #e6ebf2;
  width: 100%;
`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Tag = styled.p`
  font-size: 20px;
  margin-top: 10px;
  color: #949fab;
`;
export const Location = styled.p`
  font-size: 20px;
  margin-top: 10px;
  color: #949fab;
`;

export const Stats = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  flex-grow: 1;
  background-color: #f4f6f9;
  width: 100%;
  justify-content: space-evenly;
`;

export const Stat = styled.li`
  padding: 20px;
  display: grid;
  place-items: center;
  border-right: 2px solid #e8edf3;
`;

export const Label = styled.span`
  font-size: 20px;
  color: #949fab;
`;

export const Quantity = styled.span`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;
