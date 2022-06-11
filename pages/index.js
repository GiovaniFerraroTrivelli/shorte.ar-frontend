import React from "react";
import Input from "../components/input";

const Index = () => {
    return (
        <div className="relative max-w-5xl mx-auto p-4 sm:p-0">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                Generá enlaces cortos de un solo uso al instante
            </h1>
            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                Escribí la URL en la caja de abajo y dale a generar. Una vez que ingreses al link, dejará de funcionar
                😎👌
            </p>
            <Input />
        </div>
    );
}

export default Index;
