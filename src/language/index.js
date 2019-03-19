var language = {}

export const setLanguage = (addInLanguage) => {
    language = {
        ...language,
        ...addInLanguage
    }
}

export const text = () => language.lang 

export const getData = () => language