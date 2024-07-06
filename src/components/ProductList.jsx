import Product from "./Product";

export default function ProductList() {
    return (
        <div className="flex gap-4 overflow-scroll">
            <Product />
            <Product />
            <Product />
        </div>
    )
}