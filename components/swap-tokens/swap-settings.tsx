"use client"
import { Settings } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";

function SwapSettings() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className="rounded-full whitespace-nowrap"
                >

                    <Settings />
                </Button>
            </DialogTrigger>
            <DialogContent className="px-0">
                <DialogHeader className="mx-4">
                    <DialogTitle>Swap settings</DialogTitle>
                </DialogHeader>
                <div className="px-5">
                    <SlippageTolerance />
                </div>
            </DialogContent>
        </Dialog>
    );
}

type SlippageToleranceMode = 'auto' | 'custom';
function SlippageTolerance() {
    const [selectedMode, setSelectedMode] = useState<SlippageToleranceMode>('auto')
    const [customSlippageTolerance, setCustomSlippageTolerance] = useState<number | undefined>(undefined);

    useEffect(() => {
        console.log('in');
        if (selectedMode === 'custom') return;

        console.log('in 2');
        setCustomSlippageTolerance(undefined);
    }, [selectedMode]);

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <span>Slippage tolerance</span>
                    <span className="ml-auto mr-2 text-muted-foreground text-sm">{
                        customSlippageTolerance !== undefined ? `${customSlippageTolerance}%` : ''
                    }</span>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="flex justify-between gap-x-2 py-2 px-1">
                        <SlippageToleranceMode
                            selectedMode={selectedMode}
                            setSelectedMode={setSelectedMode}
                        />
                        <div className="flex h-10 focus-within:outline rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                            <input
                                type="number"
                                className="flex-1 w-20 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6 [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                value={customSlippageTolerance ?? ''}
                                onKeyDown={() => {
                                    if (selectedMode === 'custom') return;

                                    setSelectedMode('custom');
                                }}
                                onChange={(event) => {
                                    setCustomSlippageTolerance(Number(event.target.value));
                                }}
                            />
                            <span className="flex select-none items-center pr-1 text-gray-500 sm:text-sm">%</span>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <RandomSetting />
        </Accordion>
    );
}

type SlippageToleranceModeProps = {
    selectedMode: SlippageToleranceMode;
    setSelectedMode: (mode: SlippageToleranceMode) => void;
};
function SlippageToleranceMode({ selectedMode, setSelectedMode }: SlippageToleranceModeProps) {
    return (
        <div className="rounded-2xl flex gap-x-1 border border-border">
            <Button
                variant={selectedMode === 'auto' ? 'default' : 'ghost'}
                onClick={() => setSelectedMode('auto')}
            >
                Auto
            </Button>
            <Button
                variant={selectedMode === 'custom' ? 'default' : 'ghost'}
                onClick={() => setSelectedMode('custom')}
            >
                Custom
            </Button>
        </div>
    );
}


function RandomSetting() {
    return (
        <>
            <div className="flex justify-between px-1 py-4 font-medium">
                <span>Random setting</span>
                <Switch />
            </div>
            <hr />
        </>
    );
}

export default SwapSettings;