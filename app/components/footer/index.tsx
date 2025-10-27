const Footer = () => {
    return (
        <div className="bg-neutral-950 px-30 py-20">
            <div className="w-full flex flex-row justify-between">
                <div className="w-50">
                    <h1 className="text-lg text-neutral-50 font-semibold">INCT - CQA</h1>
                    <p className="text-md text-neutral-400 mt-5">Promovendo a colaboração entre instituições acadêmicas de excelência</p>
                </div>
                <div>
                    <h1 className="text-lg text-neutral-50 font-semibold">Navegação</h1>
                    <p className="text-md text-neutral-400 mt-5">Home</p>
                    <p className="text-md text-neutral-400 mt-2">Sobre</p>
                    <p className="text-md text-neutral-400 mt-2">Institutos</p>
                    <p className="text-md text-neutral-400 mt-2">Membros</p>
                </div>
                <div>
                    <h1 className="text-lg text-neutral-50 font-semibold">Contato</h1>
                    <p className="text-md text-neutral-400 mt-5">contato@email.com</p>
                </div>
            </div>
            <div className="w-full border border-neutral-500/50 my-10"></div>
            <p className="text-center text-lg text-neutral-400">© 2025 LACIQ - UFPE. Todos os direitos reservados.</p>
        </div>
    );
}

export default Footer;
