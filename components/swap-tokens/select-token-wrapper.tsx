"use client"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from 'lucide-react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils";

type Token = {
    name: string;
    symbol: string;
    image: string;
};

const tokens: Token[] = [
    {
        name: "Wrapped Ether",
        symbol: "USDT",
        image: "/tokens/usdt.png",
    },
    {
        name: "USDCoin",
        symbol: "USDC",
        image: "/tokens/usdc.png",
    },
    {
        name: "Wrapped ETH",
        symbol: "WETH",
        image: "/tokens/weth.png",
    },
    {
        name: "Dai Stablecoin",
        symbol: "DAI",
        image: "/tokens/dai.png",
    },
    {
        name: "Wrapped BTC",
        symbol: "WBTC",
        image: "/tokens/btc.png",
    },
];

type UserToken = {
    token: Token;
    balance: number;
};

function SelectTokenWrapper() {
    const [selectedToken, setSelectedToken] = useState<Token | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="default"
                    className="rounded-full whitespace-nowrap"
                >
                    {
                        selectedToken === null
                            ? (
                                <>
                                    Select token
                                </>
                            )
                            : (
                                <>
                                    <Avatar className="w-6 h-6 mr-2">
                                        <AvatarImage src={selectedToken.image} alt={selectedToken.symbol} className="my-auto" />
                                        <AvatarFallback>{selectedToken.symbol}</AvatarFallback>
                                    </Avatar>
                                    <span className="my-auto text-sm">{selectedToken.symbol}</span>
                                </>
                            )
                    }
                    <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
            </DialogTrigger>
            <DialogContent className="px-0">
                <DialogHeader className="mx-4">
                    <DialogTitle>Select a token</DialogTitle>
                </DialogHeader>
                <div className="mt-2 mx-4">
                    <CommonTokens
                        selectedToken={selectedToken}
                        setSelectedToken={setSelectedToken}
                        setIsOpen={setIsOpen}
                    />
                </div>
                <hr className="border border-border w-full"></hr>
                <UserTokens
                    selectedToken={selectedToken}
                    setSelectedToken={setSelectedToken}
                    setIsOpen={setIsOpen}
                />
            </DialogContent>
        </Dialog>
    );
}

type CommonTokensProps = {
    selectedToken: Token | null;
    setSelectedToken: (token: Token) => void;
    setIsOpen: (isOpen: boolean) => void;
};

function CommonTokens({ selectedToken, setSelectedToken, setIsOpen }: CommonTokensProps) {
    return (
        <div className="flex gap-x-2 gap-y-3 flex-wrap">
            {
                tokens.map((token) => (
                    <CommonToken
                        token={token}
                        isSelected={token.symbol === selectedToken?.symbol}
                        setSelectedToken={setSelectedToken}
                        setIsOpen={setIsOpen}
                    />
                ))
            }
        </div>
    );
}

type CommonTokenProps = {
    token: Token;
    isSelected: boolean;
    setSelectedToken: (token: Token) => void;
    setIsOpen: (isOpen: boolean) => void;
}

function CommonToken({ token, isSelected, setSelectedToken, setIsOpen }: CommonTokenProps) {
    return (
        <button className={cn(
            'rounded-full gap-x-2 flex border shadow-md border-border py-1 px-2 hover:bg-secondary transition',
            isSelected && 'bg-secondary cursor-text'
        )}
            onClick={() => {
                setSelectedToken(token);
                setIsOpen(false);
            }}
        >
            <Avatar className="w-6 h-6">
                <AvatarImage src={token.image} alt={token.symbol} className="my-auto" />
                <AvatarFallback>{token.symbol}</AvatarFallback>
            </Avatar>
            <span className="my-auto text-sm">{token.symbol}</span>
        </button>
    );
}

type UserTokensProps = {
    selectedToken: Token | null;
    setSelectedToken: (token: Token) => void;
    setIsOpen: (isOpen: boolean) => void;
};

function UserTokens({ selectedToken, setSelectedToken, setIsOpen }: UserTokensProps) {
    const userTokens: UserToken[] = [
        {
            token: {
                name: "Wrapped Ether",
                symbol: "USDT",
                image: "/tokens/usdt.png",
            },
            balance: 100,
        },
        {
            token: {
                name: "USDCoin",
                symbol: "USDC",
                image: "/tokens/usdc.png",
            },
            balance: 0,
        },
        {
            token: {
                name: "Wrapped ETH",
                symbol: "WETH",
                image: "/tokens/weth.png",
            },
            balance: 300,
        },
    ];

    return (
        <div className="">
            {
                userTokens.map((userToken) => (
                    <UserToken
                        userToken={userToken}
                        isSelected={userToken.token.symbol === selectedToken?.symbol}
                        setSelectedToken={setSelectedToken}
                        setIsOpen={setIsOpen}
                    />
                ))
            }
        </div>
    );
}

type UserTokenProps = {
    userToken: UserToken;
    isSelected: boolean;
    setSelectedToken: (token: Token) => void;
    setIsOpen: (isOpen: boolean) => void;
};

function UserToken({ userToken, isSelected, setSelectedToken, setIsOpen }: UserTokenProps) {
    return (
        <button className={cn(
            'w-full flex justify-between py-3 px-3 hover:bg-secondary transition',
            isSelected && 'hover:bg-inherit opacity-60'
        )}
            onClick={() => {
                if (isSelected) return;

                setSelectedToken(userToken.token);
                setIsOpen(false);
            }}
        >
            <div className="flex gap-x-4">
                <Avatar className="w-10 h-10 my-auto">
                    <AvatarImage src={userToken.token.image} alt={userToken.token.symbol} />
                    <AvatarFallback>{userToken.token.symbol}</AvatarFallback>
                </Avatar>
                <div className="text-sm flex flex-col">
                    <span>{userToken.token.name}</span>
                    <span className="text-muted-foreground mr-auto">{userToken.token.symbol}</span>
                </div>
            </div>
            <span>
                {userToken.balance}
            </span>
        </button>
    );
}

export {
    SelectTokenWrapper,
};