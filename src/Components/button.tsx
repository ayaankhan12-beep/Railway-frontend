

export default function Button(props:any){

return (
    <button 
    type={props.type}
    onClick={props.onClick}
    disabled={props.disabled}

    className="bg-blue-600 text-white font-semibold w-[250px] h-[40px] cursor-pointer ml-2">
        {props.Label}</button>
)
}