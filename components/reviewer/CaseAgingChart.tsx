"use client";

import { useEffect,useState } from "react";

export default function CaseAgingChart(){

const [data,setData] = useState<any[]>([]);

useEffect(()=>{

fetch("/api/reviewer/analytics")
.then(res=>res.json())
.then(d=>setData(d.monthly));

},[]);

return(

<div style={{display:"flex",gap:15,alignItems:"flex-end",height:200}}>

{data.map((m:any)=>{

const h = m.total * 10;

return(

<div key={m.month} style={{textAlign:"center"}}>

<div style={{
height:h,
width:40,
background:"#1e3a8a"
}}/>

<small>
{new Date(m.month).toLocaleDateString()}
</small>

</div>

);

})}

</div>

);

}