import Header from "../../components/Header";
import ModalForm from "../../components/ModalForm";

const admin = () => {
    return (
        <>
            <Header></Header>
            <div>
                <div className="flex place-content-center p-8">
                    <h1 className="text-3xl font-bold text-center">Administração dos Hotéis</h1>
                </div>
                <form>
                    <input type="hidden" name="id"/>
                    <input type="text" name="nome" placeholder="Nome do Hotel"/>
                    <input type="text" name="foto" placeholder="Foto"/>
                    <input type="text" name="endereco" placeholder="Endereço do Hotel"/>
                    <input type="text" name="cidade" placeholder="Cidade"/>
                    <input type="text" name="estado" placeholder="Estado"/>
                    <input type="text" name="telefone" placeholder="Telefone"/>
                    <input type="text" name="email" placeholder="Email"/>
                    <input type="text" name="site" placeholder="Site"/>
                    <button type="submit">Salvar</button>
                </form>
                <ModalForm/>
            </div>
        </>
    );
};

export default admin;
