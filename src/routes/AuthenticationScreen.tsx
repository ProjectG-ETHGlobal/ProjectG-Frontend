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

export default function AuthenticationScreen() {
	const [isConnected, setIsConnected] = useState(false);
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
										onClick={() => {
											console.log("Connecting to Wallet");
											setIsConnected(!isConnected);
											// setIsLoading(false);
										}}
										disabled={false}
									>
										{
											<Link to={"/user"}>
												<svg
													className="w-5 h-5 mr-2"
													viewBox="0 0 35 33"
													fill="none"
												>
													<path
														d="M32.9582 1L19.8241 10.7183L22.2665 5.09986L32.9582 1Z"
														fill="#E17726"
														stroke="#E17726"
														strokeWidth="0.25"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M2.65601 1L15.6758 10.8237L13.3459 5.09986L2.65601 1Z"
														fill="#E27625"
														stroke="#E27625"
														strokeWidth="0.25"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M28.2495 23.7763L24.7501 29.1236L32.3324 31.2218L34.5059 23.9163L28.2495 23.7763Z"
														fill="#E27625"
														stroke="#E27625"
														strokeWidth="0.25"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M1.12891 23.9163L3.28956 31.2218L10.8572 29.1236L7.37257 23.7763L1.12891 23.9163Z"
														fill="#E27625"
														stroke="#E27625"
														strokeWidth="0.25"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
												Connect with MetaMask
											</Link>
										}
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
