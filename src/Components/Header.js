import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';
import {useSelector} from 'react-redux';


const links = [
  {
    name:'Todo App',
    links: [
      {
        name: 'Todo List',
        key:'key1',
        url: '/',
        iconProps: {
          iconName: 'PageList',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Add Todo Task',
        key: 'key2',
        url: '/add',
        iconProps: {
          iconName: 'AddToShoppingList',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
    ],
  },
];

function Header() {
  const {theme} = useSelector(state => ({...state}))
    initializeIcons();
  return (
    <Nav
      groups={links}
      selectedKey = {null}
      className={theme.mode?"nav nav-light":"nav nav-dark"}
    />
  );
}

export default Header
