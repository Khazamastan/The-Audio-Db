
// Reusable component 02
const Input = props => {
	const {onChangeValue, inputType, inputValue, inputPlaceHolder} = props;
	const onChangeValueFunc = target => onChangeValue(target);
	return (<input type={inputType} value={inputValue} onChange={onChangeValueFunc} placeholder={inputPlaceHolder}/>);
};
Input.propsType = {
	inputType: React.PropTypes.oneOf(['text', 'checkbox', 'radio', 'number', 'email', 'password', 'submit']).isRequired,
	onChangeValue: React.PropTypes.func.isRequired,
	inputPlaceHolder: React.PropTypes.string,
	inputValue: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]).isRequired
};

export default Input