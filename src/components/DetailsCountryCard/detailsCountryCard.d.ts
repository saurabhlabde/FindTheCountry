
interface IItemProps {
        props: {
                title: string
                content: string
        }
}

interface IDetailsCountryCardProps {
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
                        name: string
                }>
                languages: Array<{
                        name: string
                }>
                phone: string
        }
}

export {
        IDetailsCountryCardProps,
        IItemProps,
}