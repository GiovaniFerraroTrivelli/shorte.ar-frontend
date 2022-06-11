import {useState} from "react";
import LoadingSpinner from "./loading-spinner";

const Input = () => {
    const [processing, setProcessing] = useState(false);
    const [inputUrl, setInputUrl] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState(null);
    const [validUrl, setValidUrl] = useState(false);
    const [copied, setCopied] = useState(false);

    const generate = () => {
        setProcessing(true);

        setTimeout(() => {
            setGeneratedUrl("https://shorte.ar/2kd")
            setProcessing(null);
            setInputUrl("");
            setValidUrl(false);
        }, 2000);
    }

    const onInputChange = (value) => {
        setInputUrl(value);

        let expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
        let regex = new RegExp(expression);

        setValidUrl(value.match(regex));
    }

    const copyUrl = () => {
        navigator.clipboard.writeText(generatedUrl).then(r => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        });
    }

    return (
        <section>
            <div className="mt-6 sm:mt-10 flex justify-center sm:space-x-6 text-sm flex-wrap">
                <input type="text" value={inputUrl} onChange={e => onInputChange(e.target.value)}
                       className="sm:flex items-center w-full mb-3 sm:mb-0 sm:w-96 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
                       placeholder="URL"/>
                {!processing && <button disabled={!validUrl} onClick={() => generate()} type="button"
                                        className={`bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 ${!validUrl ? "opacity-50 cursor-not-allowed" : ""}`}>
                    Generar
                </button>}
                {processing && <button type="button"
                                       className="bg-slate-800 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
                                       disabled>
                    <LoadingSpinner/> Procesando...
                </button>}
            </div>
            {generatedUrl && <div className="mt-6 sm:mt-10 flex justify-center sm:space-x-6 text-sm flex-wrap">
                <p className="text-slate-900 text-lg sm:text-xl lg:text-2xl tracking-tight text-center dark:text-white">
                    ¡Listo! La URL es:<br />
                    <span className="font-bold cursor-pointer" onClick={() => copyUrl()}>{generatedUrl}</span> {copied && <span>✅</span>}
                </p>
            </div>}
        </section>
    );
}

export default Input;
