
function Form() {
    return (
    <div className="contact-form">
        <div className="container">
            <div className="inner-wrap">
                <form action="">
                <div class="box-head">
                    <h3 className="inner-sub-title">Estimate For Projects</h3>
                    <h2 className="inner-title">Share Work Details</h2>
                </div>
                    <div className="inner-form-wrap">
                        <input type="text" placeholder="Full name"/>
                        <input type="email" placeholder="Email adress"/>
                        <input type="text" placeholder="Subject"/>
                        <textarea cols="30" rows="10" placeholder="Work Details"></textarea>
                    </div>

                    <div className="inner-button">
                        <button className="button button-dark">Subscribe Now</button>
                    </div>
                </form>
            </div>
        </div>
    </div>  
    )
}


export default Form;