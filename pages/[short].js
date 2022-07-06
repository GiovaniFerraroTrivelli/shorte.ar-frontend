import React from "react";
import axios from "axios";
import Router from "next/router";

export const getServerSideProps = async (context) => {
    try {
        const res = await axios.get(`${process.env.BACKEND_PROTO}://${process.env.BACKEND_HOST}:${process.env.BACKEND_PORT}${context.req.url}`);

        return {
            redirect: {
                permanent: false,
                destination: res.data.url
            }
        }
    } catch (error) {
        context.res.statusCode = 404;

        return {
            props: {}
        }
    }
}

const Path = () => {
    const redirectToHome = () => {
        Router.push("/").then();
    }

    return (
        <div className="relative max-w-5xl mx-auto p-4 sm:p-0 text-center">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                Este link corto es inválido 😥
            </h1>
            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
                Probablemente ya haya sido usado, o nunca haya existido...
            </p>
            <button type="button" onClick={() => redirectToHome()}
                    className="mt-5 bg-slate-800 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
            >
                Ir al inicio
            </button>
        </div>
    );
}

export default Path;
