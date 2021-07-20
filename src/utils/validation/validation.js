export const emptyValid = (text) => {
    if (text === "") {
        return "Không được để trống";
    }
    return "";
}

export const emailValid = (email) => {
    const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    if(email.match(re)){
        return "";
    }
    return "Email không hợp lệ";
}

