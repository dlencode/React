import React from 'react';
import ReactDOM from 'react-dom';

import profiles from './profiles';

import Profile from './components/Profile';

function App(props) {
  return (
    <div className="wrapperCenter">
      <div className="container">
        {props.profiles.map(member =>
          <Profile key={member.id} links={member.links} name={member.name} position={member.position} quote={member.quote} />
        )}
      </div>
    </div>
  );
}

App.protoTypes = {
  
}

ReactDOM.render(<App profiles={profiles} />, document.getElementById('root'));