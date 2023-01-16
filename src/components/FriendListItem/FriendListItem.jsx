import PropTypes from 'prop-types';
import { Avatar, Item, Status } from './FriendListItem.styled';

const FriendListItem = ({ avatar, friendName, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={friendName} width="48" />
      <p>{friendName}</p>
    </Item>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  friendName: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
