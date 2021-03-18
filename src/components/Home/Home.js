import img from './../../img/img.webp'
const Home= ()=>
{
    return(
        <div className="Home">
          <div className="Container">
              <h1 className="Hello">Hello World.</h1>
              <h1>Welcome on my website</h1>
          </div>
    
          <img className="img" src={img} alt="img"></img>
        </div>
    );
    
}
export default Home;