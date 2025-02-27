import styled from "styled-components";

const FormItemWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// text-align: left;
	// flex-direction: column;
	// margin-bottom: 2%;
	margin: 0 auto;
	max-width: 640px;
`;

const Label = styled.label`
	// display: block;
	// font-weight: bold;
	// padding: 10px 0;
`;

const Input = styled.input`
	// flex-basis: 60%;
	// border: 0;
	// font-size: inherit;
	// border-radius: 5px;
	// padding: 10px;
	// border: 1px solid lightGrey;
`;

function FormItem({ id, label, type = "text", placeholder = "", value, handleOnChange }) {
	return (
		<FormItemWrapper className="input-group mb-4">
			<Label className="input-group-text" htmlFor={id}>{label}</Label>
			<Input
				type={type}
				name={id}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={handleOnChange}
				className="form-control"
			/>
		</FormItemWrapper>
	);
}

export default FormItem;
