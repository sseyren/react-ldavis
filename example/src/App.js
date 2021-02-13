import React from 'react'

import { LDAvis } from 'react-ldavis'
import 'react-ldavis/dist/index.css'

import LDAvisDataList from './data'

const App = () => {
  return <LDAvis data={LDAvisDataList[0]} style={{textAlign: "center"}} />
}

export default App
