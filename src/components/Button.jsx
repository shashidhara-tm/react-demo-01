function Button({ label, onClick, type, testId }){

    let color = "blue"
    if(type == "danger")
        color = "red"
    else if(type == "action")
        color = "green"

    return <button data-testId={testId} onClick={onClick} style={{
        border: "1px solid blue",
        borderRadius: 5,
        backgroundColor: color,
        color: "white",
        padding: 5,
        margin: 5
    }}>{label}</button>
}

export { Button }