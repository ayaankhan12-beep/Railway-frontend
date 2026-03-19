
export default function Inputfield(props: any)

{
  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
  
        className="w-full border border-gray-300 rounded-lg p-3 pr-10 outline-none focus:ring-2 focus:ring-blue-400 transition"

      
    

    />
  );
}

