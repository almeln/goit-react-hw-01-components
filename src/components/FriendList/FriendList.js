import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
        {friends.map(friend => (
            <FriendListItem 
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default FriendList;