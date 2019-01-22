import firebase from './firebase'
export const uploadFile=(file)=>{
  const task = firebase.storage().ref('chelas').child(file.name).put(file)
  return task
      .then(snap=>snap.ref.getDownloadURL())
      .then(link=>link)    
}
export default uploadFile;