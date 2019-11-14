/*
 * @Author: None
 * @LastEditors: None
 * @Date: 2019-11-14 12:27:50
 * @LastEditTime: 2019-11-14 18:18:29
 * @Description: 
 */
import React,{useState,useEffect} from 'react';
import jt from './util'
function Jitang({ hours = 0, minutes = 0, seconds = 0 }) {
  const [jitang,updateJitang]=useState('')
  const [a,setA]=useState([])
  async function data(){
    return atob((await jt('./jt.json'))[`7sZlZIzXCEe'`.replace(/\d|Z|X|E|z|'/g,'').toLowerCase()]([2][0])).split(',')
  }
  async function getList(){
    return await data()
  }
  async function getOne(e){
    e && e.preventDefault()
    let b=decodeURI(a[Math.random()*a.length^0])
    updateJitang(b)
  }
  useEffect(() => {
    (async function(){
      let list=await getList()
      setA(list)
      // await getOne()
      document.querySelector('#getOne').click()
    })()
  },[])
  return (
    <div>
      <div
        className="top-wrap"
        style={{position: 'absolute',top: '1vh',width: '100%',zIndex: 999}}
      >
        <div className="container">
          <div className="row" style={{marginTop: 30}}>
            <div className="col">
              <svg t="1573725253322" className="icon" style={{width: '5rem',margin: 0,padding: 0,height: '3rem'}} viewBox="0 0 1474 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="587" width="200" height="200"><path d="M1394.680586 407.892002a65.534689 65.534689 0 0 1 65.53469 65.534689v1.310694a65.534689 65.534689 0 0 1-65.53469 65.53469h-121.136777V842.939941A181.060059 181.060059 0 0 1 1092.50423 1023.97952H370.066199a181.039579 181.039579 0 0 1-181.03958-181.039579V540.251595H65.534689a65.534689 65.534689 0 0 1-65.534689-65.534689v-1.310694a65.534689 65.534689 0 0 1 65.534689-65.534689H1394.660107z m-192.446711 253.414452c12.697346-23.346733-13.188856-37.068059-41.123017-60.947261-27.934161-23.858723-9.645887-62.954261-29.449651-67.52121-19.803764-4.566949-31.98912 20.315754-36.044079 41.123018-4.054959 20.827743-1.02398 38.092038-35.552569 44.174476-34.528589 6.102918-109.156217-18.779784-168.547029-28.937661-59.411292-10.157877-68.545189-5.078938-116.795104 30.473631-48.229435 35.532089-36.044079 138.093878-36.04408 138.093878s-18.288274-36.556069-13.721325-89.352453c4.587428-52.816864 54.844343-89.864443 54.844343-89.864443s-55.847843-20.827743-182.780344 0c-126.932501 20.807264-170.594988 90.376432-198.52915 142.148837-27.913682 51.792884-28.425671 60.926781-42.638507 61.438771 0 0-20.315754-11.161377-33.0131-8.621907-12.697346 2.539469-12.697346 21.831243-7.106418 50.768904s51.280894 57.363333 67.0297 58.387313c15.728325 1.02398 597.594448 11.181856 622.47715-3.54297 24.882702-14.745305 2.539469-80.730545 1.0035-87.345453-1.51549-6.594428-18.779784 11.161377-27.422171 15.236816-8.621908 4.054959-66.49723 21.831243-81.734046 29.449651-15.236815 7.618408-52.304874-5.078938-52.304874-5.078939s9.154377-6.102918 57.383813-25.906682c48.229435-19.783284 120.317594-81.222056 158.921621-113.211175 38.583548-31.98912 41.123018-37.068059 70.060679-22.834744 28.937661 14.192356 58.366833 15.216336 71.084658-8.130397z m-742.835703 68.115118c-6.860663 2.51899-15.462091-4.300714-17.673886-7.741286-2.191316-3.440571-14.581468-17.059499 30.309793-54.393792 44.911742-37.334293 78.907862-48.700466 117.081819-57.752445 38.194436-9.01102 74.340913-7.782244 78.621147 6.246275 4.259755 14.00804-4.50551 21.565009-36.00312 22.117958-31.49761 0.573429-58.100598 7.51601-92.854463 24.00208-34.753865 16.48607-72.620628 65.0227-79.46081 67.52121zM1092.48375 146.531469a181.060059 181.060059 0 0 1 181.03958 181.03958v46.386272H189.067579v-46.386272a181.039579 181.039579 0 0 1 181.039579-181.03958h316.122957V94.144677c-22.240835-8.888142-36.945181-24.165917-36.945181-41.573568v-2.867143C649.264455 22.261315 685.922922 0 731.121378 0h1.658846c45.218936 0 81.877402 22.261315 81.877403 49.703966v2.887622c-0.02048 17.387172-14.724826 32.664947-36.965661 41.553089v52.386792h314.791784z" p-id="588" fill="#1296db"></path></svg>
            </div>
            <div className="col">
              <div className="float-right" style={{paddingTop:'0px'}}>
                <a
                  className="btn btn-primary btn-filled btn-xs"
                  href="https://github.com/blackmady/jitang">开源</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-wrapper" style={{position: 'relative', top: '-6vh'}}>
        <div className="container main-sentence justify-content-center text-center">
          <span id="sentence" style={{fontSize: '2rem'}}>{jitang}</span>
        </div>
      </div>
      <div className="foot-1" style={{position: 'absolute', bottom: '7vh',width: '100%'}}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <p className="lead text">截屏分享朋友</p>
              <span className="btn btn-primary btn-filled btn-xs">
                <a href="/" id="getOne" className="btn btn-primary btn-filled btn-xs" onClick={(e)=>getOne(e)}>我要的毒鸡汤</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jitang;
