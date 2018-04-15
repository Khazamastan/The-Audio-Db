import React from 'react';
import PropTypes from 'prop-types';
const UserImage = props => {
	const {imageURL, imageAlt} = props;
	if (typeof imageURL === 'string') {
		return <img src={imageURL} alt={imageAlt}/>;	
	}
	return <img src='' alt="placeholder"/>;
};
UserImage.propTypes = {
	imageURL: PropTypes.string,
	imageAlt: PropTypes.string
};

export default UserImage;