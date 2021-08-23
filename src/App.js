import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilterableList from './components/FilterableList';
import AddForm from './components/Form';
import * as Modes from './components/Modes';
import DispatchContext from './context/dispatch';
import { DEFAULT_EDITING_RECORD_VALUES } from './stateManager/reducer';
import { reducer } from './stateManager/reducer';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';





export default function App() {
  const [{ records, mode, editingRecord }, dispatch] = useReducer(reducer, {
    records: [],
    mode: Modes.SEARCH_MODE,
    editingRecord: DEFAULT_EDITING_RECORD_VALUES
  });

  return (
    <Container>
      <Jumbotron>
          <DispatchContext.Provider value={dispatch}>
            {mode === Modes.SEARCH_MODE && <FilterableList data={records} />}

            {mode === Modes.ADD_MODE && <AddForm
              id={editingRecord.id}
              initialName={editingRecord.name}
              initialPhone={editingRecord.phone}
            />}
          </DispatchContext.Provider>
      </Jumbotron>
    </Container>
  )
}