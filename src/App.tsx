import React, {useEffect, useMemo} from 'react';
import {Terminal} from "./Terminal";
import {useTerminal} from "./Terminal/hooks";

function App() {
  const {
    history,
    pushToHistory,
    setTerminalRef,
    resetTerminal,
  } = useTerminal();


  useEffect(() => {
    resetTerminal();

    pushToHistory(<>
        <div><strong>Welcome!</strong> to the terminal.</div>
        <div style={{fontSize: 20}}>It contains <span style={{color: 'yellow'}}><strong>HTML</strong></span>. Awesome, right?</div>
        <br/>
        <div>You can write: start or alert , to execute some commands.</div>
      </>
    );
  }, []);

  const commands = useMemo(() => ({
    'start': async () => {
      await pushToHistory(<>
          <div>
            <strong>Starting</strong> the server... <span style={{color: 'green'}}>Done</span>
          </div>
        </>);
    },
    'alert': async () => {
      alert('Hello!');
      await pushToHistory(<>
          <div>
            <strong>Alert</strong>
            <span style={{color: 'orange', marginLeft: 10}}>
              <strong>Shown in the browser</strong>
            </span>
          </div>
        </>);
    },
  }), [pushToHistory]);

  return (
    <div className="App">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>Write something awesome:</>}
        commands={commands}
      />
    </div>
  );
}

export default App;
