import React from 'react';
import './ImageResize.css'
// import { Storage } from '@google-cloud/storage'

// const bucketName = "code-it-image-bucket"
// const storage = new Storage();

export default class ImageResize extends React.Component {

     constructor() {
          super()

          this.state = {
               originalImgUrl: null
          }

          this.handleChange = this.handleChange.bind(this)
          // this.handleUpload = this.handleUpload.bind(this)
     }

     handleChange(event) {
          this.setState({
               originalImgUrl: URL.createObjectURL(event.target.files[0])
          })
          console.log('Selected image');
     }

     handleUpload(event) {
          // this.uploadImage(this.state.originalImgUrl)
     }

     // async uploadImage(filename) {
     //      await storage.bucket(bucketName).upload(`imageResize/${filename}`, {
     //           // Support for HTTP requests made with `Accept-Encoding: gzip`
     //           gzip: true,
     //           metadata: {
     //                cacheControl: 'public, max-age=31536000',
     //           }
     //      });

     //      console.log('Image uploaded to: ' + `imageResize/${filename}`)
     // }

     render () {
          return (
               <div>
                    <p>Choose file</p>
                    <input type="file" onChange={ this.handleChange }></input>

                    <img className="image" src={this.state.originalImgUrl} width="500x"></img>
                         {/* <button onClick={ this.handleUpload }>Resize</button> */}
               </div>
          );
     }

}
