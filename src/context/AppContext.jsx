import { createContext, useState } from "react";

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cvc, setCvc] = useState('')


    const onHandleName = (e) => {
        console.log('hola');
        setName(e.target.value)
    };

    const onHandleYear = (e) => setYear(e.target.value);

    const onHandleMonth = (e) => setMonth(e.target.value);

    const onHandleCardNumber = (e) => setCardNumber(e.target.value);

    const onHandleCvc = (e) => setCvc(e.target.value);

    const onCvcInput = (e) => {
        if (e.target.value.length > 3) {
            e.target.value = e.target.value.slice(0, 3);
        }
    }

    const onDateInput = (e) => {
        if (e.target.value.length > 2) {
            e.target.value = e.target.value.slice(0, 2);
        }
    }

    const onCardNumberInput = (e) => {
        if (e.target.value.length > 16) {
            e.target.value = e.target.value.slice(0, 16);
        }
    }


    return (
        <AppContext.Provider value={{ name, onHandleName, year, onHandleYear, 
        month, onHandleMonth, cardNumber, onHandleCardNumber, cvc, onHandleCvc, 
        onCvcInput,onDateInput,onCardNumberInput }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }