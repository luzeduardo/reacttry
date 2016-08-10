import React from 'react';
import { Header } from './Header.jsx';
import { Main } from './Main.jsx';
import { Cvv } from './Cvv.jsx';
import { NewCard } from './NewCard.jsx';

export class LooIndex extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Cvv />
        {/*<NewCard />*/}
      </div>
    );
  }
}
