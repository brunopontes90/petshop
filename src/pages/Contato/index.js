import React from "react";
import "../../css/contato.css";
import Menu from "../Layouts/menu";
import { Input, Button } from "antd";

const { TextArea } = Input;

export default function Contato()
{
    return(
        <div>
            <Menu/>

            <div id="form">
            
                <h1>Fale Conosco</h1>

                <form method="POST" action="mensagem">
                    <div>
                        <label><span class="obrigatorio">*</span>Nome:</label>
                        <Input size="large" placeholder="Nome Completo" required/>
                    </div>
                    <div>
                        <label><span class="obrigatorio">*</span>Endereço:</label>
                        <Input size="large" placeholder="Endereço Completo" required/>
                    </div>
                    <div>
                        <label><span class="obrigatorio">*</span>Email:</label>
                        <Input size="large" placeholder="email@email.com" required/>
                    </div>
                    <div id="select">
                        <label>Tipo:</label>
                        <select name="select">
                            <option value="sugestoes" selected>Sugestões</option>
                            <option value="reclamacoes">Reclamações</option>
                            <option value="elogios">Elogios</option>
                        </select>
                    </div>
                    <div>
                        <div id="msg">
                            <label>Mensagem</label>
                        </div>
                        <div>
                            <TextArea rows={10} cols={100} />
                        </div>
                    </div>
                    <Button type="primary" htmlType="submit">Enviar</Button>
                </form>
            </div>
        </div>
    );
}