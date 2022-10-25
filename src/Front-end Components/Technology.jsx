import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Technology = () => 
{
    
    const [data,setData] = useState([]);
    useEffect(()=>
    {
        fetch(`https://blog-u-n.herokuapp.com/api/content`).then(res => res.json()).then(data => setData(data))

    },[])
  return ( 
    <>
        
        { data.filter(
            function(j)
            {
               return j.category === "Technology" && j.direction === "left"
            })
            .map((i)=>(
              <div id="contai">
                <h1 id='tourism-heading' className="hover-underline-animation">{i.category}</h1>
                <div id="fblock1">
                  <Link to={`/${i.category}/${i.id}`} id='readmore'><img src={i.Image} alt='Taj Mahal' id='tourism-img'/></Link>
                  <div id="subdiv">
                    <h2 id='sub-heading'>{(i.title).toString().split('').slice(0,24)}</h2>
                    <p>{(i.information).toString().split('').slice(0,60)}
                        <Link to={`/category/${i.id}`} id='readmore'>read more</Link>
                    </p><br/>
                    <h3 id='tagline' >Technology</h3><br/><br/>
                  </div> 
              </div><br/><br/>
              <hr id='hrline1'/>
            </div>
            
        ))}
        {
          data.filter((k)=>
              {
                 return k.direction === "right" && k.category === "Technology";
              }).map((d)=>(
            <div id='cont'>
                  <h1 id='toppost' className="hover-underline-animation">Top Post</h1>
                  <h2 id='bestvisits'>Latest tech News</h2>
                  <div id="tblock9">
                    <Link to={`/${d.category}/${d.id}`}><img src={d.Image} alt='Shilong' id='tourism-imgR'/></Link>
                    <h1 style={{textAlign:"left",opacity: 0.87}}> {(d.information).toString().split('').slice(0,54)}<Link to={`/${d.category}/${d.id}`}>read more</Link> </h1>
                    {/* <h3 id='subR'>{(d.information).toString().split('').slice(0,24)}<Link to={`/${d.category}/${d.id}`}>read more</Link></h3>     */}
                  </div><br/><br/>
                  
            </div>
        ))
        }
        <h1 className="hover-underline-animation" id='fit-heading'>You can also watch</h1>
        <h2 id='fit-subheading'>K-pop</h2>
         <div id="disp">
         {
          data.filter((x)=>x.category === 'k-pop').map((y)=>(
          <div id='flex-container'>
          <div id="row">
            <h2>{(y.information).toString().split('').slice(0,24)}</h2>
            <Link to={`/${y.category}/${y.id}`} id='readmore'><img src={y.Image} alt='Taj Mahal' id='tourism-img'/></Link>
          </div>
          </div>))
         }  
          </div> 
    <div id='advert'>advertisement</div>
    <div id='advertisement'></div>
    </>
  )
}

export default Technology