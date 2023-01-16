import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => setBgColorItem(props.fileType)};
`;

export const Label = styled.span`
  color: #ffffff;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  color: #ffffff;
`;

function setBgColorItem(value) {
  switch (value) {
    case '.docx':
      return '#25acd4';
    case '.pdf':
      return '#a242ee';
    case '.mp3':
      return '#ee4a66';
    case '.psd':
      return '#00b9c4';
    default:
      return '#49af5c';
  }
}
