const About = (props) => {
    return ( 
        
        <div id="about"> {/* id is needed so navbar can navigate here */}
            <img src= {props.coverpic} width="100%" height="auto" alt={props.altImg}/>
            <div className="title-bg">
            <div className="container text-center">
                <div className="row-fluid"> 
                    <h1 className="display-5">OUR STORY</h1>
                    <h5><b>GREEN TEA HERITAGE</b></h5> 
                </div>
            </div>
            </div>
            
            <div className="container mt-2"> {/* margin top spacing 2 */}
                <div className="row row-cols-md">
                    <div className="col">
                        <h1> Founder </h1>
                        <p id="p-wrap" className="fs-6">
                        Like any good origin story, ours has a hint of nostalgia. It started decades ago when our founder Kim Mingyu 
                        watched his mom transform camellia oil into next-level personal care products. Years later, inspired by 
                        her skills, he traveled to Jeju Island and laid the foundations for innisfree.
                        </p>
                    </div>
                    <div className="col">
                        <img src={props.ownerpic} width="auto" height = "400" alt={props.owneralt}/>
                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default About;