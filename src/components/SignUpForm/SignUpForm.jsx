import React, { Component } from 'react';

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = { login: '', email: '', password: '', agreed: false, gender: null, age: '' };

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    // this.setState({ [name]: value });
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // this.state.agreed === false && alert('Musisz sie zgodzic');
    if (!this.state.agreed) return alert('Musisz sie zgodzic');

    const { login, email, password } = this.state;
    console.log(`zalogowany jako ${login}, email: ${email}, haslo: ${password}`);

    this.props.onSubmit_1({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            placeholder="Wpisz login"
            value={login}
            name="login"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            placeholder="Wpisz email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            placeholder="Wpisz haslo"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor="agreed">
          <input type="checkbox" name="agreed" checked={agreed} onChange={this.handleChange} />
          <span>Agree</span>
        </label>

        <section>
          <h3>Twoja plec</h3>
          <label htmlFor="">
            Man
            <input
              type="radio"
              name="gender"
              value={Gender.MALE}
              checked={gender === Gender.MALE}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Woman
            <input
              type="radio"
              name="gender"
              value={Gender.FEMALE}
              checked={gender === Gender.FEMALE}
              onChange={this.handleChange}
            />
          </label>
        </section>

        <label htmlFor="">
          Wybierz wiek
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled></option>
            <option value="15-25">15-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>

        <button type="submit">Wpisz sie jako {login}</button>
      </form>
    );
  }
}

export default SignUpForm;
