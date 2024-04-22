export default function Button({
    role
}: {
    role: 'edit' | 'delete'
}) {
    const button = role === 'edit' ? <button className="w-[150px] h-[40px] border-input bg-white rounded justify-center items-center font-bold hover:bg-[#f0f0f0]">Edit</button> : role === 'delete' ? <button className="w-[150px] h-[40px] border-input bg-show-code rounded justify-center items-center text-white font-bold hover:bg-[#101927]">Delete</button> : null
    return button
}