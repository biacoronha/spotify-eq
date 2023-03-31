//testing

export const Equalizer = () => {
    var context = new (window.AudioContext)();
    console.log(context)
    // var mediaElement = document.querySelector('audio')!;
    // var source = context.createMediaElementSource(mediaElement);
    var highShelf = context.createBiquadFilter();
    var lowShelf = context.createBiquadFilter();
    var highPass = context.createBiquadFilter();
    var lowPass = context.createBiquadFilter();
    let controlSet = {
      highShelf,
      lowShelf,
      highPass,
      lowPass
    };
    // source.connect(highShelf);
    highShelf.connect(lowShelf);
    lowShelf.connect(highPass);
    highPass.connect(lowPass);
    lowPass.connect(context.destination);
    

    return (
        <div className="equalizer">
  <div className="section">
    <div className="title">HF</div>
    <div className="sliders">
      <div className="range-slider">
        <span className="scope">22</span>
        <input type="range" className="vertical" min="4700" max="22000" step="100" value="4700" data-filter="highShelf" data-param="frequency"/>
        <span className="scope scope-min">4.7</span>
        <span className="param">kHz</span>  
      </div>
      <div className="range-slider">
        <span className="scope">50</span>
        <input type="range" className="vertical" min="-50" max="50" value="50" data-filter="highShelf" data-param="gain"/>
        <span className="scope scope-min">-50</span>
        <span className="param">dB</span>  
      </div>
    </div>
  </div>
    
  <div className="section">
    <div className="title">LF</div>
    <div className="sliders">
      <div className="range-slider">
        <span className="scope">220</span>
        <input type="range" className="vertical" min="35" max="220" step="1" value="35" data-filter="lowShelf" data-param="frequency"/>
        <span className="scope scope-min">35</span>
        <span className="param">Hz</span>  
      </div>
      <div className="range-slider">
        <span className="scope">50</span>
        <input type="range" className="vertical" min="-50" max="50" value="50" data-filter="lowShelf" data-param="gain"/>
        <span className="scope scope-min">-50</span>
        <span className="param">dB</span>  
      </div>
    </div>
  </div>
      
  <div className="section">
    <div className="title">HMF</div>
    <div className="sliders">
      <div className="range-slider">
        <span className="scope">5.9</span>
        <input type="range" className="vertical" min="800" max="5900" step="100" value="800" data-filter="highPass" data-param="frequency"/>
        <span className="scope scope-min">0.8</span>
        <span className="param">kHz</span>  
      </div>
      <div className="range-slider">
        <span className="scope">12</span>
        <input type="range" className="vertical" min="0.7" max="12" step="0.1" value="0.7" data-filter="highPass" data-param="Q"/>
        <span className="scope scope-min">0.7</span>
        <span className="param">Q</span>  
      </div>
    </div>
  </div>  
    
  <div className="section">
    <div className="title">LMF</div>
    <div className="sliders">
      <div className="range-slider">
        <span className="scope">1600</span>
        <input type="range" className="vertical" min="80" max="1600" step="10" value="880" data-filter="lowPass" data-param="frequency"/>
        <span className="scope scope-min">80</span>
        <span className="param">Hz</span>  
      </div>
      <div className="range-slider">
        <span className="scope">12</span>
        <input type="range" className="vertical" min="0.7" max="12" step="0.1" value="0.7" data-filter="lowPass" data-param="Q"/>
        <span className="scope scope-min">0.7</span>
        <span className="param">Q</span>  
      </div>
    </div>
  </div>
  </div>
  
)}
