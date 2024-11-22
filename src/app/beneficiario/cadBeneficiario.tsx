// import { BeneficiarioProps } from "@/types"
// import { useState } from "react"
// import {useRouter} from 'next/navigation'
// import {AiOutlinePlusCircle} from 'react-icons/ai'

// export default function CadBeneficiario(){

//   const [showPassword] = useState(false);

//   const navigate = useRouter()

//   const [beneficiario, setBeneficiario] = useState<BeneficiarioProps>({
//     id:0,
//     nome:"",
//     email:"",
//   })

//   const adicionarBeneficiario = ()=>{
//     setBeneficiario([...beneficiario,{nome:'', email:''}])
//   }

//   return(
//     <section>
//       <fieldset className="border border-linha p-6 rounded-md">
//           <legend className="text-2xl font-semibold">Informações sobre o(s) BENEFICIÁRIOS</legend>

//             {beneficiarios.map((beneficiario, email) => (
              

//               <div  key={email} className='grid grid-cols-2 gap-4 m-2 mt-4'>

//                 <div>
//                   <label htmlFor="nomeBeneficiario" className="block text-lg font-medium mt-2">Qual o Nome do BENEFICIÁRIO?</label>
//                   <input type="text" id='nomeBeneficiario' placeholder='Beneficiário' className="w-96 p-2 border border-linha rounded-md"/>
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-lg font-medium mt-2">E-mail</label>
//                   <input type="text" id="email" placeholder="E-mail" className="w-96 p-2 border border-linha rounded-md" />
//                 </div>
//               </div>

             
//               ))}

//                 <div className="flex justify-end mt-4">
//                   <button type="button"onClick={adicionarBeneficiario}className="flex items-center gap-2 bg-indigo-950 text-white px-4 py-2 rounded-md hover:bg-indigo-900">
//                     <AiOutlinePlusCircle size={20} />
//                     Adicionar Beneficiário
//                   </button>
//                 </div>

//               <h3 className='mt-8 text-center leading-10 font-bold text-xl text-indigo-950'>O Beneficiário terá acesso restrito a plataforma PIECS, sendo assim crie uma senha que poderá ser compartilhda
//                 entre mais de um beneficiário e que seja diferente da senha criada para o responsável pela Microregião de Energia. </h3>
//                 <p className='text-center text-xl text-red-600 font-semibold gap-5'>A SENHA CRIADA SERÁ A MESMA PARA TODOS OS BENEFICIÁRIOS CADASTRADOS!!</p>
//               <div className="grid grid-cols-2 text-center gap-4 mt-4">
//                 <div>
//                   <label htmlFor="senhaBeneficiario" className="block text-lg font-medium mt-2">Crie a Senha (8 caracteres)</label>
//                   <input type={showPassword ? 'text' : 'password'} id="senhaBeneficiario" placeholder="Crie a Senha" className="w-96 p-2 border border-linha rounded-md" />
//                 </div>
                

//                 <div>
//                   <label htmlFor="ConfirmeSenhaBeneficiario" className="block text-lg font-medium mt-2">Confrime a senha (8 caracteres)</label>
//                   <input type={showPassword ? 'text' : 'password'} id="ConfirmeSenhaBeneficiario" placeholder="Confirme a senha" className="w-96 p-2 border border-linha rounded-md" />
//                 </div>
//               </div>
            
//         </fieldset>

//     </section>
//   )
// }