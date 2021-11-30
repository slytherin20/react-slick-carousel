import './App.css';

function App({images,width,height}) {
  let imageCount=0,dotsCount=0;
  return (
    <div className="App" style={{
      width: width,
      height: height
    }}>
      { 
        images.map((image)=>{
          imageCount++;
         return  <div key={imageCount} className="slides">
              <img src={image} alt="slide" className="slide"/>
            </div>
        }
        )}
        <span className="slide-to">&#10094;</span>
        <span className="slide-to">&#10095;</span>
        <div className="dots-container">
        {
        images.map(()=>
        {
          dotsCount++;
          return <div key={dotsCount} className="dots">
          </div>
        }
        )}
        </div>
    </div>
  );
}

export default App;
