import {
  AiOutlineCar,
  AiOutlineCreditCard,
  AiOutlineCustomerService,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

export const RenderIcon = (option) => {
  switch (option) {
    case 'shopping':
      return <AiOutlineShoppingCart />;
    case 'entertainment':
      return <AiOutlineCustomerService />;
    case 'health':
      return <AiOutlineHeart />;
    case 'transport':
      return <AiOutlineCar />;
    case 'others':
      return <AiOutlineCreditCard />;
    default:
      return null;
  }
};
