import React from "react";

const MyProps = () => {
     const renderizarMeuNome = () => {
        return(
            <span> Gabriel </span>
        )
     }

     return(
        <div>
            <h1>Meu nome é: {renderizarMeuNome()} </h1>
        </div>
     )
}

export default MyProps