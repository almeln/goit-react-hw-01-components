import user from 'data/user.json';
import Profile from 'components/SocialProfile/SocialProfile';
import statisticalData from 'data/statistical-data.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'data/friends.json';
import FriendList from 'components/FriendList/FriendList';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends}/>
    </div>
  );
}
