export default function AuthCard({title,children}:any){

  return(

    <div className="auth-card">

      <h2 className="auth-title">{title}</h2>

      {children}

    </div>

  );

}