import user from 'data/user.json';
import Profile from 'components/SocialProfile/SocialProfile';
import statisticalData from 'data/statistical-data.json';
import Statistics from 'components/Statistics/Statistics';


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
      <Statistics stats={statisticalData}/>
    </div>
  );
}
