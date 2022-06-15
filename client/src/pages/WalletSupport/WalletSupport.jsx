import "./walletSupport.scss";
import wallet1 from "../../pictures/WalletSupport/metamask.png";
import wallet2 from "../../pictures/WalletSupport/Coinbase wallet.png";
import wallet3 from "../../pictures/WalletSupport/WalletConnect.png";
import wallet4 from "../../pictures/WalletSupport/phantom.png";
import wallet5 from "../../pictures/WalletSupport/glow.png";
import wallet6 from "../../pictures/WalletSupport/Fortmatic.png";

function WalletSupport() {
  return (
    <div className="walletSupport">
      <div className="walletSupport-title">
        <span>Wallets We Support</span>
      </div>
      <div className="walletSupport-list">
        <div className="walletSupport-item">
          <img src={wallet1} alt="" />
          <div className="walletSupport-item__button">
            <button>
              <span>MetaMask</span>
            </button>
          </div>
        </div>
        <div className="walletSupport-item">
          <img src={wallet2} alt="" />
          <div className="walletSupport-item__button">
            <button>
              <span>Coinbase</span>
            </button>
          </div>
        </div>
        <div className="walletSupport-item">
          <img src={wallet3} alt="" />
          <div className="walletSupport-item__button">
            <button>
              <span>WalletConnect</span>
            </button>
          </div>
        </div>
        <div className="walletSupport-item">
          <img src={wallet4} alt="" />
          <div className="walletSupport-item__button">
            <button>
              <span>Phantom</span>
            </button>
          </div>
        </div>
        <div className="walletSupport-item">
          <img src={wallet5} alt="" />
          <div className="walletSupport-item__button">
            <button>
              <span>Glow</span>
            </button>
          </div>
        </div>
        <div className="walletSupport-item">
          <img src={wallet6} alt="" />
          <div className="walletSupport-item__button">
            <button>
              <span>Fortmatic</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletSupport;
