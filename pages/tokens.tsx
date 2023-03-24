import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/InputField";
import { Label } from "@/components/atoms/Label";
import { Message } from "@/components/atoms/Message";
import { Header } from "@/components/molecules/Header";
import { Card } from "@/components/wrappers/Card";
import { SidebarLayout } from "@/components/wrappers/SidebarLayout";
import { SetStateAction, useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { apikey } from "../utils/constants";
import axios from "axios";
import Web3 from "web3";

const Layout = SidebarLayout;
export default function Tokens() {
  const [contractAddress, setContractAddress] = useState("");
  const [symbol, setSymbol] = useState("N/A");
  const [balance, setBalance] = useState("N/A");
  const { address, isConnected } = useAccount();
  const [walletAddress, setWalletAddress] = useState("Loading");
  const [message, setMessage] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setWalletAddress(address);
    } else setWalletAddress("");
  }, [isConnected]);

  const fetchInfo = async () => {
    try {
      setSymbol("loading...");
      setBalance("loading...");
      const web3 = new Web3("https://polygon-rpc.com/");
      const response = await axios.get(
        `https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${contractAddress}&tag=latest&apikey=${apikey}`
      );
      if (response.data.message === "NOTOK") {
        throw new Error(response.data.result);
      }
      const balance = response.data.result / 10 ** 18;
      setBalance(balance.toFixed(4));
      const response2 = await axios.get(
        `https://api.polygonscan.com/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apikey}`
      );
      console.log(response2);
      if (response2.data.message === "NOTOK") {
        throw new Error(response2.data.result);
      }
      const abi = JSON.parse(response2.data.result);
      console.log(abi);
      const symbol = await new web3.eth.Contract(abi, contractAddress).methods
        .symbol()
        .call();
      setSymbol(symbol);
    } catch (error) {
      setMessage("" + error);
      setMessageOpen(true);
      setBalance("N/A");
      setSymbol("N/A");
      console.error(error);
    }
  };

  const handleMessageClose = () => {
    setMessageOpen(false);
    setMessage("");
  };

  return (
    <Layout>
      <Header address={walletAddress} />
      <div className="mx-12 mt-8 font-bold text-red-900">Contract Info</div>
      <Card>
        <table className="table-auto w-full">
          <tbody>
            <tr className="border-b-2">
              <td>
                <Label title="Contract Address" />
              </td>
              <td>
                <div className="flex">
                  <InputField
                    value={contractAddress}
                    onChange={(e: {
                      target: { value: SetStateAction<string> };
                    }) => setContractAddress(e.target.value)}
                    placeholder={"0x0000000000000000000000000"}
                  />
                  <div className="-ml-4">
                    <Button title={"Get Info"} onClick={fetchInfo} />
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b-2">
              <td>
                <Label title={"Symbol"} />
              </td>
              <td>
                <Label title={symbol} />
              </td>
            </tr>
            <tr>
              <td>
                <Label title={"Balance"} />
              </td>
              <td>
                <Label title={balance} />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
      {messageOpen && (
        <Message content={message} handleMessageClose={handleMessageClose} />
      )}
    </Layout>
  );
}
