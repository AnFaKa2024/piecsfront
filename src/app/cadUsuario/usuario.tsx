// cadastro do usuário - responável pela microregiao

export default function Usuario(){

  return(
    <main>
      <h1>CADASTRO DO RESPONSÁVEL PELA MICROREGIÃO DE ENERGIA </h1>
      <p> Este cadastro é referente a região que a micreogião de energia irá abastecer, apenas o responsável terá acesso.</p>

      <section>
        <form>
          <legend>Dados do Responsável</legend>

          <label htmlFor="nome" id='nome'>Nome Completo</label>
          <input type="text" name="nome" id="nome" placeholder="Nome Completo"/>

          <label htmlFor="dataNascimento" id="nascimento">Data de Nascimento</label>
          <input type="date" name="dataNascimento" id="nascimento" />

          <label htmlFor="cpf/cnpj" id="cpf/cnpj">CPF ou CNPJ</label>
          <input type="text" name="cpf/cnpj" id="cpf/cnpj" />

          <label htmlFor="email" id="email">E-mail</label>
          <input type="text" name="email" id="email" placeholder="E-mail" />

          <legend>Endereço Residencial</legend>

          <label htmlFor="rua" id="rua">Rua</label>
          <input type="text" name="rua" id="rua" placeholder="Rua" />

          <label htmlFor="bairro" id="bairro">Bairro</label>
          <input type="text" name="bairro" id="bairro" placeholder="Bairro" />

          <label htmlFor="cidade" id="cidade">Cidade</label>
          <input type="text" name="cidade" id="cidade" placeholder="Cidade" />

            {/* colocar um seletor com todos os estados */}
          <label htmlFor="Estado" id="Estado">Estado</label>
          
          <legend>Sobre a Microgeração de Energia</legend>
          <label htmlFor="kWh" id='kwh'>Quantos kW/h necessita gerar?</label>
          <input type="text" id='kwh' placeholder="kW/h" />


          <p>Endereço de Instalação da Microregião de Energia</p>

          <label htmlFor="rua" id="rua">Rua</label>
          <input type="text" name="rua" id="rua" placeholder="Rua" />

          <label htmlFor="bairro" id="bairro">Bairro</label>
          <input type="text" name="bairro" id="bairro" placeholder="Bairro" />

          <label htmlFor="area" id="area">Qual a metragem da área disponível para a instalação?</label>
          <input type="number" name="area" id="area" placeholder="Metragem da Área" />m²

          <label htmlFor="equipamento">Qual Equipamento mais Adequado?</label>
          
          <select name="equipamento" id="equipamento">Escolha uma das Opções</select>
          <option value="solar">Placas Fotovoltaica</option>
          <option value="eolica">Eólica</option>

          {/*considerando que a escolha tenha sido FOTOVOLTAICA*/}
          <label htmlFor="localFoto">Qual o local para instalação?</label>
          <select name="localFoto" id="localFoto">Selecione uma das opções</select>
            <option value="telhado">Telhado das Residências</option>
            <option value="estacionamento">Cobertura das Vagas do Estacionamento</option>
            <option value="cobertura">Cobertura do Prédio</option>
            <option value="confinamento">Cobertura do confinamento</option>
            <option value="granja">Cobertura da Granja</option>
            <option value="pasto">No Pasto</option>
            <option value="horta">Sobre ou Entre a Horta</option>
            <option value="Outro">Outro Local </option> {/*Caso selecione aqui, precisa abrir um input*/}

          {/*considerando que a escolha tenha sido EÓLICA*/}
          <label htmlFor="localEolica">Qual o local para instalação?</label>
          <select name="localEolica" id="localEolica">Selecione uma das opções</select>
            <option value="montanha">Montanha</option>
            <option value="praia">Praia</option>
            <option value="pasto">No Pasto</option>
            <option value="Outro">Outro Local </option> {/*Caso selecione aqui, precisa abrir um input*/}

        </form>
      </section>
    </main>
  )
}