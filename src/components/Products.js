const Products = (prod) => {
    return ( 
        <div>
        
        {/* this is the products */}
        <div className="d-flex container justify-content-center">
            <div className="row row-cols-sm-1 row-cols-lg-3"> {/* 1 cols per row in small viewport, 3 per row in lg viewport*/}
                <div className="col">
                    <div className="wrapper mx-5 mt-5 mb-5"> {/* m is for margin, x sets left/right, y sets up/down, to for top*/}
                        <div className="card text-center">
                            <img className= "img-resize" src = {prod.imgsrc} alt={prod.imgalt} />
                            <div className="card-body">
                                <h5> {prod.ititle}</h5>
                                <p className="card-text">{prod.idesc}</p>
                            </div>
                            <div className="text-muted">
                                <button className="card-btn"> {prod.iadd} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>

        </div>
     );
}
 
export default Products;