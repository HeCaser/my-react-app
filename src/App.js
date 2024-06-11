import { createWalletFromMnemonic } from "./funntion/function";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          H5 页面暴露方法 createWalletFromMnemonic 给 native 调用
          {/* {createWalletFromMnemonic()} */}
        </p>
      </header>
    </div>
  );
}

export default App;
