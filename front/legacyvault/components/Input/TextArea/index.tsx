export default function TextArea({
    state
}: {
    state: 'detail' | 'reason' | 'solution'
}) {
    let placeholder = "エラーが起こる理由を記述";
    if (state === "reason") {
        placeholder = "修正前ののエラー理由を記述";
    } else if (state === "solution") {
        placeholder = "修正後の説明を記述";
    }
    return (
        <textarea id="" cols={25} rows={10} className="flex-[1_0_0] rounded-lg bg-transparent outline-none border-2 border-input px-4 py-2 focus:border-input-hover resize-none" placeholder={placeholder}></textarea>
    )
}