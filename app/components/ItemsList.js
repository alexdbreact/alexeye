import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import Image from 'next/image'
 
const getItems = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/items", {
            cache: "no-store",
        });
 
        if (!res.ok) {
            throw new Error("Failed to fetch products");
        }
 
        return res.json();
    } catch (error) {
        console.log("Error loading products: ", error);
    }
};
 
export default async function ItemsList() {
    const { items } = await getItems();

 
    return (
        <>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold py-10 text-2xl">Dashboard</h1>
                </div>
                <div className="text-right">
                    <Link className="btn btn-primary" href={"/"}>
                        Add Product
                    </Link>
                </div>
            <table className="table">
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>place</th>
                    <th>sort</th>
                    <th>Image</th>
                    <th>flag</th>
                    <th>mob</th>
                    <th />
                </tr>
                </thead>
                <tbody>
                    {items.map((rs) => (
                    <tr className="hover" key={rs._id}>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                      
                        <td>
                            ${rs.place}
                        </td>
                        <td>{rs.sort}</td>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <Image
                                            src={rs.image|| null}
                                            alt={rs.mob}
                                            width={80}
                                            height={80}
                                            className="rounded-lg"
                                    />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{rs.mob || null}</div>
                                </div>
                            </div>
                        </td>
                        <td>{rs.flag || null}</td>
                        <td>{rs.mob || null}</td>

                        <th>
                        
                         
                         <Link href={`/editProduct/${rs._id}`}>
                                <button className="btn btn-primary">Edit</button>
                            </Link>
                         
                        
                            <RemoveBtn id={rs._id} />
                        </th>
                    </tr>
                    ))}                    
                </tbody>
            </table>
            </div>
        </>
    );
}