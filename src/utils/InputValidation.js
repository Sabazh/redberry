import { useState } from 'react'

const InputValidation = () => {
    const [inputValue, setInputValue] = useState('')
    const [errorMessage, setErrorMessage] = useState({
        enoughSymbols: '',
        enoughWords: '',
        isGeorgianAlphabet: '',
    });

    const validateInput = () => {
        const trimmedValue = inputValue.trim();
        const hasEnoughSymbols = trimmedValue.length >= 4;
        const words = trimmedValue.split(/\s+/);
        const hasEnoughWords = words.length >=2;
        const isGeorgianAlphabet = /^[\u10A0-\u10FF\s]+$/u.test(trimmedValue);
        
        setErrorMessage ({
            enoughSymbols: hasEnoughSymbols ? 'green' : 'red',
            enoughWords: hasEnoughWords ? 'green' : 'red',
            isGeorgianAlphabet: isGeorgianAlphabet ? 'green' : 'red',
        });
    };
}

export default InputValidation