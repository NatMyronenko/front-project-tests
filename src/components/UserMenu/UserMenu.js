import { useSelector } from 'react-redux';
// import { logOutUser } from 'redux/user/operations/operations';
import { selectUser } from 'redux/user/slice/slice';
import css from './UserMenu.module.css';
import { FiLogOut } from 'react-icons/fi';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  const { user } = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        type="button"
        className={css.Header_button}
        // onClick={() => dispatch(logOutUser())}
      >
        <FiLogOut />
      </button>
    </div>
  );
};
