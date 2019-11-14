import JSZip from 'jszip'
export default function (file) {
  var promise = new JSZip.external.Promise(function (resolve, reject) {
    // eslint-disable-next-line no-undef
    JSZipUtils.getBinaryContent(file, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  return new Promise((resolve,reject)=>{
    promise.then(JSZip.loadAsync) 
    .then(function (zip) {
      return zip.file("jt.txt").async("string"); 
    })
    .then(function success(text) {
      resolve(text)
    }, function error(e) {
      reject(e)
    });
  })
}