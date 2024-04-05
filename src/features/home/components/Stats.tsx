

interface StatsProp {
    name: string;
    value: string;
    className?: string
}

function Stat({name, value, className} : StatsProp) {
  return (
    <div className={`px-5 flex flex-col my-1 justify-center items-center gap-y-1 ${className}`}>
        <h3 className="text-fdt-brown-normal text-xl font-normal my-0 ">{value}+</h3>
        <p className="text-sm my-0 text-black">{name}</p>
    </div>
  )
}


function Stats() {
  return (
    <section className="bg-white shadow -bottom-7 absolute  rounded-[4px] py-1 px-0 w-[90%] border-[1px] border-solid border-fdt-grey-light-active flex flex-row justify-evenly">
            <Stat name="Customers" value="745"/>
            <Stat name="Orders" value="1023" className="border-solid border-x border-y-0  border-fdt-grey-normal"/>
            <Stat name="Products" value="100"/>
    </section>
  )
}

export default Stats