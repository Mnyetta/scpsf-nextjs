"use client";

export default function WorkloadHeatmap({ lawyers }: any) {

  return (

    <div style={{display:"flex",gap:20,alignItems:"flex-end",height:160}}>

      {lawyers.map((l:any)=>{

        const color =
          l.workload > 6
            ? "#dc3545"
            : l.workload > 3
            ? "#ffc107"
            : "#28a745";

        return(

          <div key={l.id} style={{textAlign:"center"}}>

            <div
              style={{
                height: l.workload * 20,
                width: 50,
                background: color,
                borderRadius: 8
              }}
            />

            <small>{l.name}</small>

          </div>

        );

      })}

    </div>

  );

}