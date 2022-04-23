import { IDetailsCountryCard } from '@types/card.d'
interface IItemProps {
        props: {
                title: string
                content: string
        }
}

interface IDetailsCountryCardProps {
        props: IDetailsCountryCard | null | undefined
}

export {
        IDetailsCountryCardProps,
        IItemProps,
}