import React ,{useState} from 'react';
import { Nav, initializeIcons } from '@fluentui/react';

const navigationStyles = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    paddingTop: '10vh',
  },
};

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
    initializeIcons();
  return (
    <Nav
      groups={links}
      styles={navigationStyles}
    />
  );
}

export default Header
