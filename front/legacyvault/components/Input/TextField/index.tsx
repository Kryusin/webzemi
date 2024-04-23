export default function TextField({ onChange }: { onChange: (valut: string) => void }) {
    return (
        <input
            type="text"
            className="justify-self-stretch flex flex-row items-center h-[50px] outline-none border-2 border-solid border-input focus:border-input-hover rounded-lg pl-4 py-2"
            placeholder="エラー文を記述"
            onChange={(e) => onChange(e.target.value)}
        />
    )
}