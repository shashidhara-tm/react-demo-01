function InputField({value, onChange, testId}){
    return <input data-testId={testId} value={value} onChange={onChange} style={{
        border: "1px solid blue",
        borderRadius: 5,
        padding: 5,
        margin: 5
    }} type="text" />
}

export { InputField }
