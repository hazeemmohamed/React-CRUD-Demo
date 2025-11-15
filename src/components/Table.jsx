function Table ({tableData, handleEdit, handleDelete}){
    return(
        <>
         <table className="mt-6 w-full">
            <thead className="">
                <tr className="bg-gray-100 border border-gray-200">
                    <th className="p-2 border border-gray-200">Name</th>
                    <th className="p-2 border border-gray-200">Email</th>
                    <th className="p-2 border border-gray-200">Action</th>
                </tr>
            </thead>
            <tbody className="w-full">
                {tableData.map((item,index)=>{
                    return(
                        <tr key={index}>
                        <td className="p-2 border border-gray-200">{item.name}</td>
                        <td className="p-2 border border-gray-200">{item.email}</td> 
                        <td className="p-2 border border-gray-200">
                            <button 
                            className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
                            onClick={()=>{handleEdit(index)}}
                            >Edit</button>
                            <button 
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={()=>{handleDelete(index)}}
                            > Delete</button>
                        </td>
                    </tr>
                    )
                }
                )}
            </tbody>
         </table>
        </>
    )
}
export default Table