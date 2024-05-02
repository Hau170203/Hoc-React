function Content(props) {
    const {text, number, active} = props;
    console.log(props);
    return (
        <>
            <div className={"box" + (active ? " box--active" : "")}>
                {text} - {number}
            </div>
        </>
    )
}

export default Content;