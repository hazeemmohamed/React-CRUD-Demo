function Form({handleFormData, handleSubmit, FormData, editIndex}){
    return(
        <>
        <h1 className="text-3xl font-semibold">Beginner-Friendly React CRUD Example</h1>
        <form action="" 
        className="p-6 rounded-lg border border-gray-200 mt-4"
        onSubmit={handleSubmit}
        >
            <input type="text" className="w-full border rounded border-gray-200 p-2 mt-4" placeholder="Name" 
            onChange={(e)=>{
                handleFormData("name", e.target.value)
            }}
            value={FormData.name}
            required
            />
            <input type="email" className="w-full border rounded border-gray-200 p-2 mt-4"
             placeholder="Email"
             onChange={(e)=>{
                handleFormData("email", e.target.value)
            }}
            value={FormData.email}
            required
             />
            <button className="px-4 py-2 rounded bg-blue-500 text-white mt-4"
            
            >{editIndex === null ? "Add" : "Update"}</button>
        </form>
        </>
    )
}
export default Form