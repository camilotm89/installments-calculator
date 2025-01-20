import React from 'react'
import { useProduct } from 'vtex.product-context'


interface Props {
  installments: number
}

const InstallmentsCalculator: React.FC<Props> & { schema?: any } = ({ installments = 12 }) => {
  console.log('entro a la funcion');
    
  const productContext = useProduct()

  if (!productContext || !productContext.product) {
    return null
  }

  const price = productContext.selectedItem?.sellers[0]?.commertialOffer?.Price
  
  


  if (!price || !installments) {
    return null
  }

  const installmentValue = price / installments
  console.log('cuotas de', installmentValue);


  return (
    <div>
      <p>
      <strong style={{color:"rgb(90,90,90)"}}>{installments} cuotas sin interés</strong> de <strong style={{color:"green"}}> ${installmentValue.toFixed(4)} </strong>
      </p>
    </div>
  )
}

InstallmentsCalculator.schema = {
    title: 'Installments Calculator',
    type: 'object',
    properties: {
      installments: {
        title: 'Cantidad de cuotas',
        type: 'number',
        default: 12,
      },
    },
  }

export default InstallmentsCalculator
