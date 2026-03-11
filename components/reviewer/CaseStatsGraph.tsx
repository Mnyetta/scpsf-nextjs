"use client";

import { useEffect, useState } from "react";

export default function CaseStatsGraph() {

  const [stats,setStats] = useState({
    pending:0,
    assigned:0,
    completed:0
  });

  const loadStats = async ()=>{
    try{
      const res = await fetch("/api/reviewer/case-stats");
      const data = await res.json();
      setStats(data);
    }catch(err){
      console.error(err);
    }
  };

  useEffect(()=>{
    loadStats();
  },[]);

  const max = Math.max(stats.pending,stats.assigned,stats.completed,1);

  const bar = (value:number,color:string)=>({
    height:`${(value/max)*200}px`,
    background:color,
    width:"80px",
    borderRadius:"8px 8px 0 0",
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"center",
    color:"white",
    fontWeight:"bold"
  });

  return(
    <div style={{
      display:"flex",
      gap:40,
      alignItems:"flex-end",
      justifyContent:"center",
      height:220
    }}>

      <div style={{textAlign:"center"}}>
        <div style={bar(stats.pending,"#E21B1B")}>
          {stats.pending}
        </div>
        <p>Pending</p>
      </div>

      <div style={{textAlign:"center"}}>
        <div style={bar(stats.assigned,"#1e3a8a")}>
          {stats.assigned}
        </div>
        <p>Assigned</p>
      </div>

      <div style={{textAlign:"center"}}>
        <div style={bar(stats.completed,"#28a745")}>
          {stats.completed}
        </div>
        <p>Completed</p>
      </div>

    </div>
  );
}