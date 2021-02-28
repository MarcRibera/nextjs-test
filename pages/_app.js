import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import AppContext from '../components/AppContext';
import Layout from '../components/Layout'
import '../styles/globals.scss'

export default class MyApp extends App {
  state = {
    user: null,
    pageTitle:'Next.js Test Project from _app'
  };

  componentDidMount = () => {
    const user = localStorage.getItem('username');
    if (user) {
      this.setState({ user });
    } else {
      Router.push('/login');
    }
  };

  componentWillUnmount = () => {
    localStorage.removeItem('username');
  }

  changePageTitle = (newTitle) => {
    this.setState({ pageTitle: newTitle });
  }

  signIn = (username) => {
    localStorage.setItem('username', username);
    this.setState({ user: username }, () => Router.push('/'));
  };

  signOut = () => {
    localStorage.removeItem('username');
    this.setState({ user: null });
    Router.push('/login');
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContext.Provider value={{
          user: this.state.user,
          signIn: this.signIn,
          signOut: this.signOut,
          changePageTitle: this.changePageTitle,
          pageTitle: this.state.pageTitle
        }}>
        <Layout>
          <Component { ...pageProps } />
        </Layout>
      </AppContext.Provider>
    );
  }
}
