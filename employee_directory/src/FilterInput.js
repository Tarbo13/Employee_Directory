import React, { useEffect, useState } from "react";



const FilterInput = ({ users, updateUsers }) => {
    const [inputValue, updateInput] = useState("");

    useEffect(() => {
        const filterdUsers = inputValue === ""
        ? users
        : users.filter(
            ({ name: { first }}) =>
            first.toLowerCase().indexOf(inputValue.toLocaleLowerCase()) >= 0
        );

        updateUsers(filterdUsers);
    }, [inputValue, users]);

    return (
        <input value={inputValue} onChange={e => updateInput(e.target.value)} />
    );
};

export default FilterInput;