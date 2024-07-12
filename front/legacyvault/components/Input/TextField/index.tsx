export default function TextField({ value, name, onChange }: { value: string, name:string, onChange: (valut: string) => void }) {
    return (
        <input
            type="text"
            name={name}
            className="justify-self-stretch flex flex-row items-center h-[50px] outline-none border-2 border-solid border-input focus:border-input-hover rounded-lg pl-4 py-2"
            placeholder="エラー文を記述"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}