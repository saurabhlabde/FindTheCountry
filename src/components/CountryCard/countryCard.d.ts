import { ICountryCard } from '@types/card.d'
interface IItemProps {
        props: {
                title: string
                content: string
        }
}

interface ICountryCardProps {
        props: ICountryCard
}

export {
        ICountryCardProps,
        IItemProps,
}