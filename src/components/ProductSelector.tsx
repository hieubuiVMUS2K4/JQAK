import { PRODUCT_OPTIONS, type LotteryProductId } from "../config/products";

type ProductSelectorProps = {
  value: LotteryProductId;
  onChange: (value: LotteryProductId) => void;
};

export function ProductSelector({ value, onChange }: ProductSelectorProps) {
  return (
    <label className="product-selector">
      <span>Product</span>
      <select value={value} onChange={(event) => onChange(event.target.value as LotteryProductId)}>
        {PRODUCT_OPTIONS.map((product) => (
          <option key={product.id} value={product.id}>
            {product.label}
          </option>
        ))}
      </select>
    </label>
  );
}
