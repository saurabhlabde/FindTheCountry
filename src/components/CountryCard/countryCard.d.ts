
interface IItemProps {
        props: {
                title: string
                content: string
        }
}

interface ICountryCardProps {
        props: {
                code: string
                emoji: string
                name: string
                currency: string
                continent: {
                        name: string
                }
                states: Array<{
                        code: string
                }>
                languages: Array<{
                        name: string
                }>
        }
}

export {
        ICountryCardProps,
        IItemProps,
}