import React, {useState} from 'react';
import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons';
import {getPrediction} from "./ageSlice";
import {useDispatch, useSelector} from "react-redux";

const AgePredictionsSaga = () => {
  const isLoading = useSelector((state: any) => state.age.isLoading);
  const isError = useSelector((state: any) => state.age.isError);
  const agePrediction = useSelector((state: any) => state.age.agePrediction);
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("")

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handlePrediction = () => {
    dispatch(getPrediction(name))
  }

  const displayPredictions = agePrediction

  return (
      <>
          <br/>
        Age Predictions Saga Way
        <br/>
        <input placeholder={"Type your name"} value={name} onChange={handleNameChange} />
        <button onClick={handlePrediction}>Predict</button>
        <br/>
        {isError && (<>An Error Occurred</>)}
        {isLoading && !isError && (<Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/>)}
        {displayPredictions && (
            <>Predicted Age: {agePrediction}</>
        )}
      </>
  )
}


export default AgePredictionsSaga;
