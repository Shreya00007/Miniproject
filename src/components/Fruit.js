import React from 'react';
import  qwe1 from "./Images/fruit1.jpg"


var Fruit = React.createClass({
    render: function() {
      return (
        <div>
          <style dangerouslySetInnerHTML={{__html: "\ndiv.gallery {\n  margin: 5px;\n  border: 1px solid #ccc;\n  float: left;\n  width: 180px;\n}\n\ndiv.gallery:hover {\n  border: 1px solid #777;\n}\n\ndiv.gallery img {\n  width: 100%;\n  height: auto;\n}\n\ndiv.desc {\n  padding: 15px;\n  text-align: center;\n}\n" }} />
          <div className="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img src={qwe1} alt="Cinque Terre" width={600} height={400} />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img src="img_forest.jpg" alt="Forest" width={600} height={400} />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <a target="_blank" href="img_lights.jpg">
              <img src="img_lights.jpg" alt="Northern Lights" width={600} height={400} />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
          <div className="gallery">
            <a target="_blank" href="img_mountains.jpg">
              <img src="img_mountains.jpg" alt="Mountains" width={600} height={400} />
            </a>
            <div className="desc">Add a description of the image here</div>
          </div>
        </div>
      );
    }
  });

  export default Fruit;