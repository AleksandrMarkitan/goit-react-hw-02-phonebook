// import PropTypes from 'prop-types';

import s from '../ContactForm/ContactForm.module.scss';

export const Filter = () => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="Find contacts by name"
        required
      />
    </label>
  );
};

// User.propTypes = {
//   user: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired, // name of the users  object  being
//   }).isRequired,
// };
