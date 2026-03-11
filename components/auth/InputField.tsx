"use client";

export default function InputField({
  label,
  type,
  value,
  onChange,
  placeholder
}:any){

  return(

    <div className="input-group">

      <label>{label}</label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e)=>onChange(e.target.value)}
        required
      />

    </div>

  );

}