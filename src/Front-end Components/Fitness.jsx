import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Fitness = () => {
    
    const [data,setData] = useState([]);
    useEffect(()=>
    {
        fetch(`https://blog-u-n.herokuapp.com/api/content`).then(res => res.json()).then(data => setData(data))

    },[])
  return (
    <div>
        { data.filter(
            function(j)
            {
               return j.category === "fitness" && j.direction === "left"
            })
            .map((i)=>(
              <div id="contai">
                <h1 id='tourism-heading' className="hover-underline-animation">{i.category}</h1>
                <div id="fblock1">
                  <Link to={`/${i.category}/${i.id}`} id='readmore'><img src={i.Image} alt='Taj Mahal' id='tourism-img'/></Link>
                  <div id="subdiv">
                    <h2 id='sub-heading'>{i.title} </h2>
                    <p>{(i.information).toString().split('').slice(0,140)}
                        <Link to={`/category/${i.id}`} id='readmore'>read more</Link>
                    </p><br/>
                    <h3 id='tagline' >fitness / Stretching</h3>
                  </div> 
              </div><br/><br/>
              <hr id='hrline1'/>
            </div>
        ))}
        {
          data.filter((k)=>
              {
                 return k.direction === "right" && k.category === "fitness";
              }).map((d)=>(
            <div id='cont'>
                  <h1 id='toppost' className="hover-underline-animation">Top Post</h1>
                  <h2 id='bestvisits'>Fitness for Mental Health</h2>
                  <div id="tblock9">
                    <Link to={`/${d.category}/${d.id}`}><img src={d.Image} alt='Shilong' id='tourism-imgR'/></Link>
                    <h1 style={{textAlign:"left",opacity: 0.87}}> {d.title} </h1>
                    <h3 id='subR'>{(d.information).toString().split('').slice(0,64)} <Link to={`/${d.category}/${d.id}`}>read more</Link></h3>    
                  </div><br/><br/>
            </div>
        ))
        } 
              <div id='advert'>advertisement</div>
    <div id='advertisement'></div> 
           
    </div>
    
  )
}

export default Fitness