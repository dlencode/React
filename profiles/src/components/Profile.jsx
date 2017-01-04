import React from 'react';

function Profile(props) {
  return (
    <div className="profile">
        <div className="profile__photo">
          <img src={`http://lorempixel.com/300/300/people/?v=${Math.random()}`} alt=""/>
        </div>
        <div className="profile__links">
          { props.links ? props.links.map((link, index) => 
            <a key={index} href={link.link}><i className={`fa fa-${link.name}`} aria-hidden="true"></i></a>
            ) : 'Not found' }
          
        </div>
        <div className="profile__info">
          <div className="profile__name"><h2>{props.name}</h2></div>
          <div className="profile__position">{props.position}</div>
          <div className="profile__quote">{props.quote}</div>
        </div>
      </div>
  );
}

Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired,
  quote: React.PropTypes.string,
}

export default Profile;

// { props.links ? <a href="#"><i className={`fa fa-${props.link.map(link)}`} aria-hidden="true"></i></a> : '' }