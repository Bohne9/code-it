import React from 'react';

export default class ImageResize extends React.Component {

     constructor() {
          super()

          this.state = {
               resizedImgUrl: "",
               originalImgUrl: ""
          }
     }

     render () {
          return (
               <div>
                    <p>Choose file</p>
                    <input type="file"></input>
               </div>
          )
     }

}
