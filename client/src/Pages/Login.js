import React, { useState } from 'react';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
  return [value, setValue];
};
const Login = () => {
  const [value, setValue] = useStateWithLocalStorage('role');
  const onChange = event => setValue(event.target.value);
  return (
    <div>
      <h1>Hello React with Local Storage!</h1>
      <input value={value} type="text" onChange={onChange} />
      <p>{value}</p>
    </div>
  );
};

export default Login;
