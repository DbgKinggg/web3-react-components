import { Settings } from "lucide-react";
import { Button } from "../ui/button";
import { SelectTokenWrapper } from "./select-token-wrapper";

function SwapToken() {
    return (
        <div className="bg-card grid gap-y-1 rounded-xl w-full shadow-lg max-w-lg border border-border pt-5 px-2 pb-2">
            <SwapHeader />
            <SwapSection />
            <SwapSection />
            <SwapButton />
        </div>
    );
}

function SwapHeader() {
    return (
        <div className="flex justify-between pl-3 pb-2">
            <div className="flex gap-2 items-center">
                <div className="text-lg font-bold">Swap</div>
                <div className="text-foreground">Buy</div>
            </div>
            <Button variant={`ghost`} >
                <Settings />
            </Button>
        </div>
    );
}

function SwapSection() {
    const tokenBalance = 100;

    return (
        <div className="shadow-sm rounded-xl px-3 py-4 bg-secondary w-full">
            <label className="text-sm text-muted-foreground">
                You pay
            </label>
            <div className="flex gap-x-1">
                <input
                    type="number"
                    placeholder="0"
                    className="w-full text-4xl bg-transparent focus:outline-none [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
                <SelectTokenWrapper />
            </div>
            <div className="flex mt-2 justify-between">
                <div className="text-sm my-auto text-muted-foreground">
                    <span>$100,000</span>
                </div>
                <div>
                    <span className="text-sm">Balance: {tokenBalance}</span>
                    <Button variant={`link`}>
                        Max
                    </Button>
                </div>
            </div>
        </div>
    );
}

function SwapButton() {
    return (
        <Button className="w-full" size={`lg`}>
            Select token
        </Button>
    );
}

export default SwapToken;