const Footer = () => {
    return (
        <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-wrap gap-3">
                <div>2022 - Made with 🧉 by <a href="https://gft.ar" className="hover:underline">Giovani Ferraro Trivelli</a>.</div>
                <div><a href="https://github.com/GiovaniFerraroTrivelli/shorte.ar-frontend" target="_blank" rel="noopener">Frontend Source Code</a>.</div>
                <div><a href="https://github.com/GiovaniFerraroTrivelli/shorte.ar-backend" target="_blank" rel="noopener">Backend Source Code</a>.</div>
            </div>
        </footer>
    );
}

export default Footer;
