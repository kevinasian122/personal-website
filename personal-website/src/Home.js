import pfp from './Images/IMG_3929.jfif';

const Home = () => {
    return ( 
        <div className="home">
            <div className="header">
                <h1>Hi, I'm </h1>
                <div className="name">Kevin</div>
                
            </div>
            <div className="bio">
                <div className="bodytext">
                    A budding programmer and a first-year computer science student at the University of Waterloo
                    <br />
                    

                </div>
                <img src= {pfp} alt="pfp" className = "pfp"/>
            </div>
        </div>
        
     );
}
 
export default Home;