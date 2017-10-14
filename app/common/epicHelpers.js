/* eslint-disable */

// https://github.com/redux-observable/redux-observable/issues/94
// https://gist.github.com/braco/28dc2006e9ce04a004d2d9c4f5b9a4b6

import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';

//Global Polyfill
if (!Object.entries) {
    Object.entries = function (obj) {
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i); // preallocate the Array
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];

        return resArray;
    };
}

Observable.prototype.debug = function (_message) {
  const message = `EpicDebug: ${_message}`;

  return this.do(
    (next) => {
      if (__DEV__) {
        console.log(message, next);
      }
    },
    (err) => {
      if (__DEV__) {
        console.error('ERROR >>> ', message, err);
      }
    },
    () => {
      if (__DEV__) {
        console.log('Completed.', message);
      }
    }
  );
};

const debugEpic = (debugName) => (epic) => (...args) =>
  epic(...args)
    .catch((error, source) => {
      console.info(`${debugName}: caught an error.`, error, source);
      setTimeout(() => {
        throw error;
      }, 0);
      return source;
    })
    .finally(() =>
      console.info(`${debugName}: epic exited.`, args)
    );

export const wrapEpics = (epicObj, debugName = 'root') => {
  if (typeof epicObj === 'function') {
    return debugEpic(debugName)(epicObj);
  }

  return combineEpics(
    ...Object
      .entries(epicObj)
      .map(([name, epics]) => wrapEpics(epics, `${debugName}/${name}`))
      .map(debugEpic(debugName))
  );
};
