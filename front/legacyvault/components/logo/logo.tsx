import Image from "next/image"

export default function Logo() {
    return (
        <div className="flex flex-row gap-4">
            <Image src="/logo.svg" alt="legacyvault" width={25} height={27.52}></Image>
            <span className="text-white text-xl font-bold">LegacyVault</span>
        </div>
    )
}