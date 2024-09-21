import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useAccount, useSignMessage, useConnect } from "wagmi";
import { injected } from 'wagmi/connectors'

export default function AuthenticationScreen() {
	const [isConnected, setIsConnected] = useState(false);
	const { address, isConnecting, isDisconnected } = useAccount();
	const { signMessageAsync } = useSignMessage();
	const { connectAsync } = useConnect();

	// const [isLoading, setIsLoading] = useState(true);

	return (
		<div className="flex min-h-screen bg-gray-900 text-gray-100">
			<div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div>
						<h2 className="mt-6 text-3xl font-extrabold text-gray-100">
							Project G
						</h2>
						<p className="mt-2 text-sm text-gray-400">
							Supply Chain Management Authentication
						</p>
					</div>

					<div className="mt-8">
						<div className="mt-6">
							<div className="space-y-6">
								<p className="text-gray-300">
									Welcome to Project G, your advanced supply chain management
									solution. Our platform leverages blockchain technology to
									ensure transparency, traceability, and efficiency in your
									supply chain operations.
								</p>
								<ul className="list-disc list-inside text-gray-400 space-y-2">
									<li>Secure and immutable transaction records</li>
									<li>Real-time tracking and monitoring</li>
									<li>Smart contract integration for automated processes</li>
									<li>Decentralized data storage for enhanced security</li>
								</ul>
								<p className="text-gray-300">
									Connect your MetaMask wallet to access these features and
									revolutionize your supply chain management.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block relative w-0 flex-1">
				<div className="absolute inset-0 h-full w-full bg-gray-800 flex items-center justify-center">
					<Card className="w-96 bg-gray-700 border-gray-600">
						<CardHeader>
							<CardTitle className="text-2xl font-bold text-center text-gray-100">
								Authentication
							</CardTitle>
							<CardDescription className="text-center text-gray-400">
								Connect your wallet to proceed
							</CardDescription>
							<Link to={"/user"}>
								<Button disabled>Customer Screen</Button>
							</Link>
							<Link to={"/supplier"}>
								<Button disabled>Supplier Screen</Button>
							</Link>
							<Link to={"/deliveryPartner"}>
								<Button disabled>Delivery Partner</Button>
							</Link>
						</CardHeader>
						<CardContent>
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
							>
								{!isConnected ? (
									<Button
										variant="outline"
										className="w-full bg-gray-600 text-gray-100 hover:bg-gray-500"
										onClick={async () => {
											if(address){
												let sig = await signMessageAsync({ message: 'hello world' });
												alert(sig);
											} else {
												if(await connectAsync({ connector: injected() })){
													let sig = await signMessageAsync({ message: 'hello world' });
													alert(sig);
												}
											}
										}}
										disabled={false}
									>
										🦊{" "}{address ? `Sign the message` : "Connect with MetaMask"}
									</Button>
								) : (
									<motion.div
										className="text-center"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5 }}
									>
										<p className="mb-2 text-green-400">Connected to MetaMask</p>
										<p className="text-sm text-gray-400 break-all">
											{"0xdswjkf3209e234_ethAddress"}
										</p>
									</motion.div>
								)}
							</motion.div>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
