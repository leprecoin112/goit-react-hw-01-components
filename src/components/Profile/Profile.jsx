import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  ProfileCard,
  UserName,
  Tag,
  Location,
  Stats,
  Stat,
  Label,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Stat>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Stat>
        <Stat>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Stat>
        <Stat>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Stat>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
