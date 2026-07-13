import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PRODUCT_OPTIONS, type LotteryProductId } from "../config/products";

type ProductSelectorProps = {
  value: LotteryProductId;
  onChange: (value: LotteryProductId) => void;
};

export function ProductSelector({ value, onChange }: ProductSelectorProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selectedProduct = PRODUCT_OPTIONS.find((product) => product.id === value) ?? PRODUCT_OPTIONS[0];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="product-selector" ref={rootRef}>
      <span className="product-selector-label">Product</span>
      <button
        type="button"
        className="product-select-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{selectedProduct.label}</span>
        <ChevronDown size={15} aria-hidden="true" />
      </button>
      {open ? (
        <div className="product-menu" role="listbox" aria-label="Product">
          {PRODUCT_OPTIONS.map((product) => (
            <button
              key={product.id}
              type="button"
              className={`product-option ${product.id === value ? "active" : ""}`}
              role="option"
              aria-selected={product.id === value}
              onClick={() => {
                onChange(product.id);
                setOpen(false);
              }}
            >
              {product.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
