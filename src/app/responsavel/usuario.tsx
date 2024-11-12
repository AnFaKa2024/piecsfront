// cadastro do usuário - responável pela microregiao
import { useState, ChangeEvent } from 'react';


export default function Usuario(){

  const [equipamento, setEquipamento] = useState<string>("")
  const [localInstalacao, setLocalInstalacao] = useState<string>("")
  const [outroLocal, setOutroLocal] = useState<string>("")
  const [locaisSelecionados, setLocaisSelecionados] = useState<string[]>([])

  const handleEquipamentoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setEquipamento(e.target.value)
    setLocalInstalacao("") 
    setLocaisSelecionados([])
  }

  const handleLocalChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    setLocaisSelecionados(selectedOptions);
  }

  return(
    <main className="overflow-full bg-green-600">
    <h1 className="text-center text-5xl font-bold">
      CADASTRAR NOVA MICROREGIÃO DE ENERGIA
    </h1>
    <p className="mt-8 text-center text-3xl">
      Este cadastro é referente à região que a microregião de energia irá abastecer. 
      Apenas o responsável terá acesso.
    </p>

    <section className="mt-6">
      <form className="space-y-4">

        <fieldset className="border p-4 rounded-md">
          <legend className="text-2xl font-semibold">Dados do Responsável</legend>
          
          <div className="grid grid-cols-2 gap-4 mt-4">

            <div>
              <label htmlFor="nome" className="block text-lg font-medium mt-2">Nome Completo</label>
              <input type="text" id="nome" placeholder="Nome Completo" className="w-3/6 p-2 border rounded-md" />
            </div>
            
            <div>
              <label htmlFor="dataNascimento" className="block text-lg font-medium mt-2">Data de Nascimento</label>
              <input type="date" id="dataNascimento" className="w-44 p-2 border rounded-md" />
            </div>

            <div>
              <label htmlFor="cpfCnpj" className="block text-lg font-medium mt-2">CPF ou CNPJ</label>
              <input type="text" id="cpfCnpj" className="w-96 p-2 border rounded-md" />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mt-2">E-mail</label>
              <input type="email" id="email" placeholder="E-mail" className="w-96 p-2 border rounded-md" />
            </div>

          </div>
        </fieldset>

        <fieldset className="border p-4 rounded-md">
          <legend className="text-2xl font-semibold">Endereço Residencial</legend>

          <label htmlFor="rua" className="block text-lg font-medium mt-2">Rua</label>
          <input type="text" id="rua" placeholder="Rua" className="w-full p-2 border rounded-md" />

          <label htmlFor="numero" className="block text-lg font-medium mt-2">Número</label>
          <input type="text" id="rua" placeholder="Rua" className="w-full p-2 border rounded-md" />

          <label htmlFor="bairro" className="block text-lg font-medium mt-2">Bairro</label>
          <input type="text" id="bairro" placeholder="Bairro" className="w-full p-2 border rounded-md" />

          <label htmlFor="cep" className="block text-lg font-medium mt-2">CEP</label>
          <input type="text" id="bairro" placeholder="Bairro" className="w-full p-2 border rounded-md" />

          <label htmlFor="cidade" className="block text-lg font-medium mt-2">Cidade</label>
          <input type="text" id="cidade" placeholder="Cidade" className="w-full p-2 border rounded-md" />

          <label htmlFor="estado" className="block text-lg font-medium mt-2">Estado</label>
          <select id="estado" className="w-full p-2 border rounded-md">
            <option value="">Selecione o Estado</option>
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
            
          </select>
        </fieldset>

        <fieldset className="border p-4 rounded-md">
          <legend className="text-2xl font-semibold">Sobre a Microgeração de Energia</legend>

          <label htmlFor="kWh" className="block text-lg font-medium mt-2">Quantos kW/h necessita gerar?</label>
            <input type="text" id="kWh" placeholder="kW/h" className="w-full p-2 border rounded-md" />

          <p className="mt-4 font-medium">Endereço de Instalação da Microregião de Energia</p>

          <label htmlFor="ruaInstalacao" className="block text-lg font-medium mt-2">Rua</label>
            <input type="text" id="ruaInstalacao" placeholder="Rua" className="w-full p-2 border rounded-md" />

          <label htmlFor="bairroInstalacao" className="block text-lg font-medium mt-2">Bairro</label>
            <input type="text" id="bairroInstalacao" placeholder="Bairro" className="w-full p-2 border rounded-md" />


          <label htmlFor="equipamento" className="block text-lg font-medium mt-2">Qual Equipamento mais Adequado?</label>
            <select id="equipamento" className="w-full p-2 border rounded-md" value={equipamento} onChange={handleEquipamentoChange}>
              <option value="">Escolha uma das Opções</option>
              <option value="solar">Placas Fotovoltaicas</option>
              <option value="eolica">Eólica</option>
            </select>

          <label htmlFor="area" className="block text-lg font-medium mt-2">Qual a metragem da área disponível para a instalação?</label>
            <input type="number" id="area" placeholder="Metragem da Área" className="w-full p-2 border rounded-md" /> m²
          
          {equipamento && (
            <div>
              <label htmlFor="localInstalacao" className="block text-lg font-medium mt-2">
                Qual o local para instalação?
              </label>
              <select id="localInstalacao" className="w-full p-2 border rounded-md" onChange={handleLocalChange} multiple value={locaisSelecionados}>
                {equipamento === 'fotovoltaica' ? (
                  <>
                    <option value="telhado">Telhado das Residências</option>
                    <option value="estacionamento">Cobertura das Vagas do Estacionamento</option>
                    <option value="cobertura">Cobertura do Prédio</option>
                    <option value="confinamento">Cobertura do Confinamento</option>
                    <option value="granja">Cobertura da Granja</option>
                    <option value="pasto">No Pasto</option>
                    <option value="horta">Sobre ou Entre a Horta</option>
                    <option value="outro">Outro Local</option>
                  </>
                ) : (
                  <>
                    <option value="montanha">Montanha</option>
                    <option value="praia">Praia</option>
                    <option value="pasto">No Pasto</option>
                    <option value="outro">Outro Local</option>
                  </>
                )}
              </select>

              {locaisSelecionados.includes("outro") && (
                <input type="text" placeholder="Especifique o Local" className="w-full p-2 border rounded-md mt-2" value={outroLocal} onChange={(e) => setOutroLocal(e.target.value)}/>)}
            </div>
          )}
        </fieldset> 
      </form>
    </section>
  </main>
  )
}