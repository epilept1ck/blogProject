import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
export const MainPAge = () => {
    const [content,setContent] = useState([]);
    const {id} = useParams();
    const [count,setCount] = useState(0);
    useEffect(()=>
    {
        fetch(`https://blog-u-n.herokuapp.com/api/content`).then(res => res.json()).then(content => setContent(content));
        
    },[id])
    

    
  return (
    <div>
    {
        // eslint-disable-next-line
        content.filter((a)=>a.id==id).map((article)=>(
            <div id="con" key={article.id}>
                        <h1>{article.title}</h1>
                        <img src={article.Image} alt='pic' id='fit-img'/><br/><br/>
                        <p id='tparagraph'>{article.information}
                        <br/><br/><br/>



                        <h3 id='counter'>{count}</h3>
<div id="share">
<div id="shareIcon">

</div>

</div>

                        </p>
                    </div>
        ))
    }
    </div>
  )
}
