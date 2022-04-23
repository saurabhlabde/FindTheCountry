interface ISearchInputProps {
        placeholder: string
        value: string
        onChange(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void
}

export { ISearchInputProps }