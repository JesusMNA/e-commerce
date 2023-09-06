const OrdersCard = props => {
  const {
    totalPrice,
    totalProducts
  } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <div className='flex items-center gap-2'>
        <p>
          <span>05.09.23</span>
          <span>{totalProducts}</span>
          <span>{totalPrice}</span>
        </p>
      </div>
    </div>
  )
}

export { OrdersCard }