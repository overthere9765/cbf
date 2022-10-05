import React from "react"
import { connect } from 'react-redux';
import Button from "./Button"
import { log, logwarn, logerror } from "../std"

import Signin from "../Signin";
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
            toast.error(<>Please install <a href='https://metamask.io/' target="_blank">Metamask</a></>);
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
                            this.setState({ text: "0x..." + this.props.accounts[0].substring(this.props.accounts[0].length - 3) })
                        }
                    }).catch(err => toast.error(err.message))
            }
        }
    }
    clicked(e) {
        this.connectWeb3()
    }

    render() {


        const { text } = this.state;
        const { web3 } = this.props;
        return (
            <Button icon="img/metamask.svg" onClick={this.clicked.bind(this)}>{text}</Button>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    web3: state.web3Store.web3,
    accounts: state.web3Store.accounts,
    // contract: state.Contract.contract,
    // owner: state.Contract.owner,
});

export default connect(mapStateToProps, {
    connectWeb3: connectWeb3,
    // connectContract: connectContract,
})(Wallet);
