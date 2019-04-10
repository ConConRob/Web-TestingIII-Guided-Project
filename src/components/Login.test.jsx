import React from 'react';
import * as rt from 'react-testing-library';
import Login from './Login';

afterEach(rt.cleanup);

describe('Login', () => {
  it('displays no login button if no username or no password', () => {
    const wrap = rt.render(<Login />);
    const button = wrap.queryByTestId(/loginButton/i);
    expect(button).toBeFalsy();
    expect(wrap.asFragment()).toMatchSnapshot();
  });

  // it('can change input values', () => {
  //   const wrap = rt.render(<Login />);
  //   rt.fireEvent.change(
  //     wrap.getByPlaceholderText('username'),
  //     { target: { value: 'foo' } },
  //   );

  //   rt.fireEvent.change(
  //     wrap.getByPlaceholderText('password'),
  //     { target: { value: 'bar' } },
  //   );

  //   expect(wrap.getByDisplayValue('foo'));
  //   expect(wrap.getByDisplayValue('bar'));
  // });

  it('can change input values', () => {
    const wrap = rt.render(<Login />);
    expect(wrap.asFragment()).toMatchSnapshot();

    const usernameInput = wrap.getByPlaceholderText('username');
    const passwordInput = wrap.getByPlaceholderText('password');

    const inputValue = 'name';
    const passValue = 'secretPassword';

    rt.fireEvent.change(usernameInput, { target: { value: inputValue } });
    expect(wrap.getByPlaceholderText('username').value).toBe(inputValue);
    expect(wrap.asFragment()).toMatchSnapshot();

    rt.fireEvent.change(passwordInput, { target: { value: passValue } });
    expect(wrap.getByPlaceholderText('password').value).toBe(passValue);
    expect(wrap.asFragment()).toMatchSnapshot();
  });

  it('displays login button if username and password', () => {
    const wrap = rt.render(<Login />);
    const usernameInput = wrap.getByLabelText('username');
    const passwordInput = wrap.getByLabelText('password');

    rt.fireEvent.change(
      usernameInput,
      { target: { value: 'A' } },
    );

    expect(wrap.queryByTestId(/loginButton/i)).toBeFalsy();
    expect(wrap.asFragment()).toMatchSnapshot();

    rt.fireEvent.change(
      passwordInput,
      { target: { value: 'B' } },
    );

    expect(wrap.queryByTestId(/loginButton/i)).toBeTruthy();
    expect(wrap.asFragment()).toMatchSnapshot();
  });

  it('can login successfully', async () => {
    // create a wrapper
    // change username to Alex
    // change password to > 0 length
    // click button
    // await flash message to appear
    // assert 'welcome' message is there
  });

  it('can fail miserably', async () => {
    // see the error render
  });
});
