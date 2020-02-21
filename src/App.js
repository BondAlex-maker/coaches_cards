import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

const coaches = [
  {
    id: 1,
    firstName: 'Brian',
    lastName: 'McCauley',
    profilePicture: 'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png',
    level: 'level1'
  },
  {
    id: 2,
    firstName: 'Brian',
    lastName: 'McCauley',
    profilePicture: 'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png',
    level: 'level1'
  },
  {
    id: 3,
    firstName: 'Brian',
    lastName: 'McCauley',
    profilePicture: 'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png',
    level: 'level1'
  },
  {
    id: 4,
    firstName: 'Brian',
    lastName: 'McCauley',
    profilePicture: 'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png',
    level: 'level1'
  },
  {
    id: 5,
    firstName: 'Brian',
    lastName: 'McCauley',
    profilePicture: 'https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png',
    level: 'level1'
  }
];

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: coaches,
    };
  }

  renderCoaches = () => {
    return this.state.items.map(item => {
      return (
        <li key={item.id}>
          <UserCard user={item}/>
        </li>

      );
    });
  };

  render () {

    return (
      <ul>
        {
          this.renderCoaches()
        }
      </ul>
    );
  }

}

export default App;
