import { State } from './State.js';
/*
 manage states 
 return state , and assign dispatcher to state 
 **we currently dont use it **
 --its instance sould have a state and its dispatcher--
 */
export class StateManager {
  constructor(dispatcher) {
    this._state = new State();
    this.dispatcher = dispatcher;
  }

  get state() {
    return this._state;
  }

  dispatch(action) {
    if (this.dispatcher) {
      this.dispatcher.dispatch(action);
    } else {
      console.error('Dispatcher not set in StateManager');
    }
  }
  
}
