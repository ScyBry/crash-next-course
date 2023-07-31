import { ShoppingCart } from "@/lib/db/cart";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({}: ShoppingCartButtonProps) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-circle btn-ghost ">
        <div className="indicator"></div>
      </label>
    </div>
  );
}
