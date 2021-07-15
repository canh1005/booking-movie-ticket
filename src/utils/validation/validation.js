export const emptyValid = (text) => {
    if (text === "") {
        return "Can't empty";
    }
    return "";
}

export const emailValid = (email) => {
    const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if(email.match(re)){
        return true;
    }
    return false;
}

