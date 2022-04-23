
interface ICountryCard {
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

interface IDetailsCountryCard {
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

export { ICountryCard, IDetailsCountryCard }