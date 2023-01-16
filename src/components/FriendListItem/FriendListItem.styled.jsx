import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  background-color: #ffffff;
  width: 200px;
  box-shadow: 9px 8px 12px -7px rgba(0, 0, 0, 1);
`;

export const Status = styled.span`
  display: block;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 100%;
`;

export const Avatar = styled.img`
  display: block;
  margin-right: 10px;
`;
