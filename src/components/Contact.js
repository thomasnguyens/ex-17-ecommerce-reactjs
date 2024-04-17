const Contact = () => {
    return ( 
        <div className="bg-color">
            <div className="container">
                <h1 className="display-5 text-center"> {/* centers the text */}
                    Contact Us
                </h1>
            </div>
            <div className="d-flex container justify-content-center text-center">
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <div className="mb-3">
                                <form method="get">
                                <label for="name" className="form-label">Name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name=""
                                    id=""
                                    aria-describedby="helpId"
                                    placeholder=""
                                />

                                <label for ="Message" className="mb-2 mt-2">Message: </label><br/> {/* adjusting the spacing of message */}
                                <textarea rows = "4" cols = "30" id ="msg" name ="msg"></textarea> <br/>
                                <input className="btn btn-light mt-2" type = "Submit" value = "Submit"/>
                                </form>
                                <small id="helpId" className="form-text text-muted">Any questions, contact us!</small>

                                
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;