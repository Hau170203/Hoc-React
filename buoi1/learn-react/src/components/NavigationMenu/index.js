function NavigationMenu() {
    const clickme = (e) =>{
        console.log(e.target);
    }
    const changeme = (e) =>{
        console.log(e.target.value);
    }

    const submitme = (e) =>{
        e.preventDefault();// Ngăn chặn sự kiện load mặc định của onSubmit
        console.log(e.target[0].value);
    }

    return (
        <>
           <div className="box">
                <div>NavigationMenu</div>
                <form onSubmit={submitme}>
                <input type="text" onChange={changeme} />
                <button onClick={clickme}>click me</button>
                </form>
           </div>
        </>
    )
}

export default NavigationMenu;