import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/InputField";
import { Label } from "@/components/atoms/Label";
import { Message } from "@/components/atoms/Message";
import { Header } from "@/components/molecules/Header";
import { Card } from "@/components/wrappers/Card";
import { SidebarLayout } from "@/components/wrappers/SidebarLayout";
import { SetStateAction, useEffect, useState } from "react";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import Web3 from "web3";

const Layout = SidebarLayout;

export default function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [walletName, setWalletName] = useState("");
  const [balance, setBalance] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const { address, isConnected } = useAccount();
  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const { data, isError, isLoading } = useBalance({
    address: address,
    enabled: false,
  });

  const [message, setMessage] = useState("");
  const [messageOpen, setMessageOpen] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setWalletAddress(address);
    } else setWalletAddress("");
  }, [isConnected]);

  const handleConnect = async () => {
    try {
      if (validate()) {
        const web3 = new Web3("https://polygon-rpc.com/");
        const res = await connectAsync();
        const data = await web3.eth.getBalance(res.account);
        setBalance(web3.utils.fromWei(data, "ether"));
        setMessage(
          `Hi ${name || "Anon"}, Your ${walletName} wallet has a balance of ${
            balance + " MATIC" || "0.00 MATIC"
          }`
        );
        setMessageOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessageClose = () => {
    setMessageOpen(false);
    setMessage("");
  };

  const validate = () => {
    if (!name) {
      setMessage(`Please enter your name`);
      setMessageOpen(true);
      return false;
    }
    return true;
  };

  return (
    <Layout>
      <Header address={walletAddress} />
      <div className="mx-12 mt-8 font-bold text-red-900">Wallet Info</div>
      <Card>
        <table className="table-auto w-full">
          <tbody>
            <tr className="border-b-2">
              <td>
                <Label title="Name" />
              </td>
              <td>
                <InputField
                  value={name}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setName(e.target.value)}
                  placeholder={"Enter your name"}
                />
              </td>
            </tr>
            <tr className="border-b-2">
              <td>
                <Label title="Email" />
              </td>
              <td>
                <InputField
                  value={email}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setEmail(e.target.value)}
                  placeholder={"abc@xyz.com"}
                />
              </td>
            </tr>
            <tr className="border-b-2">
              <td>
                <Label title="Wallet Name" />
              </td>
              <td>
                <InputField
                  value={walletName}
                  onChange={(e: {
                    target: { value: SetStateAction<string> };
                  }) => setWalletName(e.target.value)}
                  placeholder={"metamask wallet"}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Label title={"Connect Wallet"} />
              </td>
              <td>
                <Button
                  title={isConnected ? "Disconnect" : "Connect"}
                  onClick={isConnected ? disconnect : handleConnect}
                />
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
