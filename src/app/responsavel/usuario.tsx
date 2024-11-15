// cadastro do usuário - responável pela microregiao
import { useState} from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'


export default function Usuario(){


  const [beneficiarios, setBeneficiarios] = useState([{nome:'', email:''}])
  const adicionarBeneficiario = ()=>{
    setBeneficiarios([...beneficiarios,{nome:'', email:''}])
  }
  

  const [showPassword] = useState(false);


  return(
    <main className="overflow-full bg-primaria">
    <h1 className="text-center text-5xl font-bold mt-7">
      CADASTRAR NOVA MICROREGIÃO DE ENERGIA
    </h1>
    <p className="mt-8 text-center text-3xl">
      Este cadastro é referente à região que a microregião de energia irá abastecer. 
      Apenas o responsável terá acesso.
    </p>

    <section className="mt-6 p-7">
      <form className="space-y-4">

        <fieldset className="border border-linha p-6 rounded-md">
          <legend className="text-2xl font-semibold">Dados do Responsável</legend>
          
          <div className="grid grid-cols-3 gap-4 mt-4">

            <div>
              <label htmlFor="nome" className="block text-lg font-medium mt-2">Nome Completo</label>
              <input type="text" id="nome" placeholder="Nome Completo" className="w-3/6 p-2 border border-linha rounded-md" />
            </div>
            
            <div>
              <label htmlFor="dataNascimento" className="block text-lg font-medium mt-2">Data de Nascimento</label>
              <input type="date" id="dataNascimento" className="w-44 p-2 border border-linha rounded-md" />
            </div>

            <div>
              <label htmlFor="cpfCnpj" className="block text-lg font-medium mt-2">CPF ou CNPJ</label>
              <input type="text" id="cpfCnpj" className="w-96 p-2 border border-linha rounded-md" placeholder='cpf ou cnpj'/>
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mt-2">E-mail</label>
              <input type="text" id="email" placeholder="E-mail" className="w-96 p-2 border border-linha rounded-md" />
            </div>

            <div>
              <label htmlFor="senha" className="block text-lg font-medium mt-2">Crie a Senha (8 caracteres)</label>
              <input type={showPassword ? 'text' : 'password'} id="senha" placeholder="Crie a Senha" className="w-96 p-2 border border-linha rounded-md" />
            </div>


            <div>
              <label htmlFor="Confrime a senha" className="block text-lg font-medium mt-2">Confrime a senha (8 caracteres)</label>
              <input type={showPassword ? 'text' : 'password'} id="Confrime a senha" placeholder="Confrime a senha" className="w-96 p-2 border border-linha rounded-md" />
            </div>

          </div>
        </fieldset>

        <fieldset className="border border-linha p-4 rounded-md">
          <legend className="text-2xl font-semibold">Endereço Residencial</legend>

          <div className="grid grid-cols-3 gap-4 mt-4">

            <div>
              <label htmlFor="rua" className="block text-lg font-medium mt-2">Rua</label>
              <input type="text" id="rua" placeholder="Rua" className="w-3/6 p-2 border border-linha rounded-md" />
            </div>

            <div>
              <label htmlFor="numero" className="block text-lg font-medium mt-2">Número</label>
              <input type="text" id="numero" placeholder="Número" className="w-44 p-2 border border-linha rounded-md" />
            </div>

            <div>
              <label htmlFor="bairro" className="block text-lg font-medium mt-2">Bairro</label>
              <input type="text" id="bairro" placeholder="Bairro" className="w-56 p-2 border border-linha rounded-md" />
            </div>

            <div>
              <label htmlFor="cep" className="block text-lg font-medium mt-2">CEP</label>
              <input type="text" id="cep" placeholder="CEP" className="w-96 p-2 border border-linha rounded-md" />
            </div>

            <div>
              <label htmlFor="cidade" className="block text-lg font-medium mt-2">Cidade</label>
              <input type="text" id="cidade" placeholder="Cidade" className="w-56 p-2 border border-linha rounded-md" />
            </div>

            <div>
              <label htmlFor="estado" className="block text-lg font-medium mt-2">Estado</label>
              <select id="estado" className="w-32 p-2 border border-linha rounded-md">
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
          </div>
        </div>
        </fieldset>

        <fieldset className="border border-linha p-4 rounded-md">
          <legend className="text-2xl font-semibold">Sobre a Microgeração de Energia</legend>

            <div className="grid grid-cols-2 gap-4 mt-4 text-center">
              <div>
                <label htmlFor="kWh" className="block text-lg font-medium mt-2">Quantos kW/h necessita gerar?</label>
                <input type="text" id="kWh" placeholder="kW/h" className="w-32 p-2 border border-linha rounded-md" />
              
              </div>

              <div>
                <label htmlFor="kWh" className="block text-lg font-medium mt-2">Quantos pessoas serão beneficiadas?</label>
                <input type="text" id="kWh" placeholder="Qts Pessoas?" className="w-32 p-2 border border-linha rounded-md" />
              </div>
            </div>
          
          <p className="mt-4 text-center text-linha text-xl underline font-medium">Endereço de Instalação da Microregião de Energia</p>
          
          <div className="grid grid-cols-4 gap-4 mt-4">
  
            <div>
              <label htmlFor="ruaInstalacao" className="block text-lg font-medium mt-2">Rua</label>
              <input type="text" id="ruaInstalacao" placeholder="Rua" className="w-96 p-2 border border-linha rounded-md" />
            </div>
            
            <div>
              <label htmlFor="bairroInstalacao" className="block text-lg font-medium mt-2">Bairro</label>
              <input type="text" id="bairroInstalacao" placeholder="Bairro" className="w-96 p-2 border border-linha rounded-md" />
            </div>

            <div>
              <label htmlFor="equipamento" className="block text-lg font-medium mt-2">Qual Equipamento mais Adequado?</label>
                <select id="equipamento" className="w-96 p-2 border border-linha rounded-md" >
                  <option value="">Escolha uma das Opções</option>
                  <option value="solar">Placas Fotovoltaicas</option>
                  <option value="eolica">Eólica</option>
                </select>
            </div>
            
            <div>
              <label htmlFor="area" className="block text-lg font-medium mt-2">Qual a metragem da área disponível para a instalação?</label>
              <input type="number" id="area" placeholder="Metragem da Área" className="w-96 p-2 border border-linha rounded-md" /> m²
            </div>
          
          </div>
        </fieldset> 

        <fieldset className="border border-linha p-6 rounded-md">
          <legend className="text-2xl font-semibold">Informações sobre o(s) BENEFICIÁRIOS</legend>

            {beneficiarios.map((beneficiario, email) => (
              

              <div  key={email} className='grid grid-cols-2 gap-4 m-2 mt-4'>

                <div>
                  <label htmlFor="nomeBeneficiario" className="block text-lg font-medium mt-2">Qual o Nome do BENEFICIÁRIO?</label>
                  <input type="text" id='nomeBeneficiario' placeholder='Beneficiário' className="w-96 p-2 border border-linha rounded-md"/>
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-medium mt-2">E-mail</label>
                  <input type="text" id="email" placeholder="E-mail" className="w-96 p-2 border border-linha rounded-md" />
                </div>
              </div>

             
              ))}

                <div className="flex justify-end mt-4">
                  <button type="button"onClick={adicionarBeneficiario}className="flex items-center gap-2 bg-indigo-950 text-white px-4 py-2 rounded-md hover:bg-indigo-900">
                    <AiOutlinePlusCircle size={20} />
                    Adicionar Beneficiário
                  </button>
                </div>

              <h3 className='mt-8 text-center leading-10 font-bold text-xl text-indigo-950'>O Beneficiário terá acesso restrito a plataforma PIECS, sendo assim crie uma senha que poderá ser compartilhda
                entre mais de um beneficiário e que seja diferente da senha criada para o responsável pela Microregião de Energia. </h3>
                <p className='text-center text-xl text-red-600 font-semibold gap-5'>A SENHA CRIADA SERÁ A MESMA PARA TODOS OS BENEFICIÁRIOS CADASTRADOS!!</p>
              <div className="grid grid-cols-2 text-center gap-4 mt-4">
                <div>
                  <label htmlFor="senha" className="block text-lg font-medium mt-2">Crie a Senha (8 caracteres)</label>
                  <input type={showPassword ? 'text' : 'password'} id="senha" placeholder="Crie a Senha" className="w-96 p-2 border border-linha rounded-md" />
                </div>
                

                <div>
                  <label htmlFor="Confirme a senha" className="block text-lg font-medium mt-2">Confrime a senha (8 caracteres)</label>
                  <input type={showPassword ? 'text' : 'password'} id="Confirme a senha" placeholder="Confirme a senha" className="w-96 p-2 border border-linha rounded-md" />
                </div>
              </div>
            
        </fieldset>

      </form>
    </section>
  </main>
  )
}