import data from './../data.json';

function Spending() {
  return (
    <section className="h-600H lg:max-w-800MW bg-white p-32P rounded-20BR">
      <h1 className="text-xl font-bold text-black mb-64M">
        Spending - Last 7 days
      </h1>

      <div className="form flex flex-row justify-between items-end">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center relative group"
          >
            {/* Bar */}
            <div
              className={`rounded-5BR w-32W md:w-48W ${item.day === 'wed' ? 'bg-cyan group-hover:bg-light-cyan' : 'bg-soft-red group-hover:bg-light-soft-red'}`}
              style={{
                height: `${item.amount * 3}px`, // Scale amount for height
              }}
            ></div>

            {/* Label */}
            <label aria-label='day of the week'>{item.day}</label>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-8 hidden group-hover:block bg-black text-white text-xs rounded px-2 py-1 z-50">
              ${item.amount.toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <hr className="my-32M" />

      <div className="flex flex-row justify-between items-center gap-20">
        <div className="flex flex-col gap-2">
          Total this month
          <span className="font-bold text-2xl xs:text-2-4xl text-black">
            $478.33
          </span>
        </div>

        <div className="flex flex-col items-center custom:items-end justify-center">
          <span className="text-black font-bold">+2.4%</span>
          from last month
        </div>
      </div>
    </section>
  );
}

export default Spending;