import styled from "styled-components";

const FormItemWrapper = styled.div`
	display: flex;
	text-align: left;
	flex-direction: row;
	margin-bottom: 2%;
`;

const Label = styled.label``;

const Input = styled.input`
	flex-basis: 60%;
	border: 0;
	font-size: inherit;
	border-radius: 5px;
	padding: 10px;
	border: 1px solid lightGrey;
	width: 100%;
`;

function FormItem({ id, label, type = "text", placeholder = "", value, handleOnChange }) {
	return (
		<FormItemWrapper className="input-group">
			<Label className="input-group-text" htmlFor={id}>
				{label}
			</Label>
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
