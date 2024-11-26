import Logo from './../images/logo.svg'

function Balance() {
  return (
    <div className="bg-soft-red p-32P rounded-20BR h-128H xs:h-160H lg:max-w-800MW text-white flex justify-between items-center">
      <h1 className='flex flex-col justify-center items-center text-lg xs:text-xl'>
        My balance
        <span className="font-bold text-2xl xs:text-2-4xl">
          $921.48
        </span>
      </h1>
      <img className='h-4/6 xs:h-4/6' src={Logo} alt="" />
    </div>
  )
}

export default Balance
