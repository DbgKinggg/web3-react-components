"use client"
import { Button } from "./ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { Loader2 } from "lucide-react";
import { truncateMiddle } from "@/lib/utils";

function ConnectWalletBtn() {
    const { open } = useWeb3Modal();
    const { address, isConnecting } = useAccount();

    if (isConnecting) {
        return (
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting
            </Button>
        );
    }

    if (address) {
        const truncatedAddress = truncateMiddle(address, 6, 4);

        return (
            <Button onClick={() => open()}>
                {truncatedAddress}
            </Button>
        );
    }

    return (
        <Button onClick={() => open()}>
            Connect Wallet
        </Button>
    );
}

export default ConnectWalletBtn