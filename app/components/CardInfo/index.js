import A from "../A";
import React from "react";
import { Link } from 'react-router-dom'

function millisToMinutesAndSeconds(millis) {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

const UserInfo = props => {
	const openModal = () => {
		props.openModal(props);
	}
	const {Name,idArtist, intDuration} = props;
	var content = null;
	switch(props.viewType){
		case 'Album':
			content = (
				<div className="user-info">
					<div className="name">{Name}</div>
					<a onClick={openModal}>View Tracks</a>
				</div>
			);
			break;
		case "Track":
			content = (
				<div className="user-info full space-between">
					<span className="name">
						{Name}
					</span>
					<strong>
						- {millisToMinutesAndSeconds(intDuration)}
					</strong>
				</div>
			);
			break;
		default:
			content = (
				<div className="user-info">
					<div className="name">{Name}</div>
					{props.secondaryText == 'info' ?
						<span>Fallowers : {props.intMembers}</span>
						:
						<Link to={"/artist?idArtist="+idArtist}>
							View Albums
						</Link>
					}
				</div>
			);
	}
	return content;
};
UserInfo.propTypes = {
	firstName: React.PropTypes.string,
	lastName: React.PropTypes.string,
	gender: React.PropTypes.string,
	email: React.PropTypes.string,
	phone: React.PropTypes.string
};

export default UserInfo;