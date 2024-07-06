export default function Category() {
    return (
        <div className="flex flex-col gap-4">
            <section>
                <h1 className="text-[#0E0E0E] text-xl font-semibold">Best Products</h1>
                <p className="text-[#626262]">Choose from Categories</p>
            </section>

            <section className="flex justify-between items-center text-[#626262]">
                <p className="bg-[#C31162] h-8 px-2 py-1.5 flex items-center rounded-lg text-white">Body cream</p>
                <p className="bg-[#EFEFEF] h-8 px-2 py-1.5 flex items-center rounded-lg">Makeups</p>
                <p className="bg-[#EFEFEF] h-8 px-2 py-1.5 flex items-center rounded-lg">perfumes</p>
            </section>
        </div>
    )
}