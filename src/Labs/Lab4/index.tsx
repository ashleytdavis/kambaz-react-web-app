import ArrayStateVariable from './ArrayStateVariable';
import BooleanStateVariables from './BooleanStateVariables';
import ClickEvent from './ClickEvent'
import Counter from './Counter';
import DateStateVariable from './DateStateVariable';
import EventObject from './EventObject';
import ObjectStateVariable from './ObjectStateVariable';
import ParentStateComponent from './ParentStateComponent';
import PassingDataOnEvent from './PassingDataOnEvent'
import PassingFunctions from './PassingFunctions'
import StringStateVariables from './StringStateVariables';

const Lab4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
    </>
  )
}

export default Lab4