import React from 'react'
import ReactDOM from 'react-dom'

import { BoaTarde, BoaNoite } from './componentes/Multiplos'

ReactDOM.render(
   <div>
      <BoaTarde nome="Daniel" />
      <BoaNoite nome="Suzanne" />
   </div>
, document.getElementById('root'))