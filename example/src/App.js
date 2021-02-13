import React, { useState } from 'react'

import { LDAvis } from 'react-ldavis'
import 'react-ldavis/dist/index.css'

import LDAvisDataList from './data'

const options = LDAvisDataList.map((_, i) => (
  <option key={i} value={i}>{i}</option>
))

const App = () => {
  const [currentData, setCurrentData] = useState(0);

  return (
    <div>
      <label>Data: </label>
      <select onChange={event => setCurrentData(event.target.value)}>
        {options}
      </select>
      <LDAvis
        data={LDAvisDataList[currentData]}
        style={{ textAlign: "center" }}
      />
    </div>
  )
}

export default App
