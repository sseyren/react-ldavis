import React, { useState } from 'react'

import { LDAvis } from 'react-ldavis'
import 'react-ldavis/dist/index.css'

import LDAvisDataList from './data'

const options = LDAvisDataList.map((_, i) => (
  <option key={i} value={i}>{i}</option>
))

const App = () => {
  const [currentData, setCurrentData] = useState(0);
  const [modHis, setModHis] = useState(false);

  return (
    <div>
      <label>data: </label>
      <select onChange={event => setCurrentData(event.target.value)}>
        {options}
      </select>

      <label>modifyHistory: </label>
      <input
        type="checkbox"
        checked={modHis}
        onChange={event => setModHis(event.target.checked)}
      />

      <LDAvis
        data={LDAvisDataList[currentData]}
        modifyHistory={modHis}
        style={{ textAlign: "center" }}
      />
    </div>
  )
}

export default App
