export default function Text({
    role = 'body',
    children
}: {
    role: 'title' | 'language' | 'errorTitle' | 'description' | 'delete' | 'edit' | 'body' | 'errorDetails' | 'errorDescription',
    children: React.ReactNode
}) {

    let style = 'text-body text-black'
    switch (role) {
        case 'title':
            style = 'text-title text-black font-bold'
            break
        case 'language':
            style = 'text-language text-black font-bold'
            break
        case 'errorTitle':
            style = 'text-error-title text-error-title-color font-bold'
            break
        case 'description':
            style = 'text-description text-description-color font-bold'
            break
        case 'delete':
            style = 'text-delete text-white font-bold'
            break
        case 'edit':
            style = 'text-edit text-black font-bold'
            break
        case 'errorDetails':
            style = 'text-error-details text-black font-bold'
            break
        case 'errorDescription':
            style = 'text-error-description text-error-description-color font-bold'
            break
    }
    return (
        <p className={style}>{children}</p>
    )
}