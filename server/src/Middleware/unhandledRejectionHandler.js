import { ResponseError } from "intempt-nodejs-sdk";

export const unhandledRejectionHandler = (err) => {
  if (err instanceof ResponseError) {
    const symbols = Object.getOwnPropertySymbols(err.response);
    const stateSymbol = symbols.find((symbol) => symbol.toString() === 'Symbol(state)');
    const state = stateSymbol ? err.response[stateSymbol] : null;

    if (state) {
      readStream(state.body.stream)
    } else {
      console.log('Symbol(state) not found in response object');
    }

    if (err.response) {
      const { response } = err;
      console.log(`Response Status: ${response.status} ${response.statusText}`);
    } else {
      console.log('Error does not contain a response object.');
    }
  } else {
    console.log(err);
  }
};

async function readStream(stream) {
  const reader = stream.getReader();
  let result = '';

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        console.log('Stream read completed.');
        break;
      }

      // Assuming the stream is text
      result += new TextDecoder().decode(value);
    }
  } catch (error) {
    console.error('Error reading the stream', error);
  } finally {
    reader.releaseLock();
  }

  console.log('Stream content:', result);
  return result;
}