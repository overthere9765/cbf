import React from "react"
import { connect } from 'react-redux';
import Button from "./Button"
import { log, logwarn, logerror } from "../std"

import { toast } from 'react-toastify';

import { connectWeb3, CHAINS } from "../store/web3Store";


class Wallet extends React.Component {
    state = {
        text: "Metamask"
    }
    componentDidMount() {
        if (!window.ethereum || !window.ethereum.isMetaMask) {
            this.setState({ text: "Install" })
        }
    }

    connectWeb3() {
        if (!window.ethereum || !window.ethereum.isMetaMask) {
            let url = 'https://metamask.io/';
            toast.error(<>Please install <a href={url} target="_blank">Metamask</a></>);
            window.open(url, '_blank').focus();
            this.setState({ text: "Install" })
        } else {
            let { web3 } = this.props;
            if (!window.ethereum.isConnected()) {
                toast.error("Please check Metamask RPC")
            } else if (!web3) {
                this.props.connectWeb3(() => toast.success("Connected"))
                    .then(r => {
                        if (r.error) {
                            logerror('connectWeb3', r.error)
                            toast.error(r.error.message)
                        } else {
                            toast.success("connected web3")
                            this.setState({ text: "" })
                        }
                    }).catch(err => toast.error(err.message))
            }
        }
    }

    render() {
        const { text, } = this.state;
        let { accounts, chainId } = this.props;
        // alert(chainId)
        let account = accounts.length > 0 ? "0x..." + accounts[0].substring(accounts[0].length - 3) : text;
        let icon = (accounts && accounts.length > 0 && chainId) ? CHAINS[chainId].icon : "metamask.svg";
        return (
            <Button icon={"img/" + icon} onClick={this.connectWeb3.bind(this)} {...this.props}>{account} </Button>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    web3: state.web3Store.web3,
    accounts: state.web3Store.accounts,
    chainId: state.web3Store.chainId,
    // contract: state.Contract.contract,
    // owner: state.Contract.owner,
});

export default connect(mapStateToProps, {
    connectWeb3: connectWeb3,
    // connectContract: connectContract,
})(Wallet);
