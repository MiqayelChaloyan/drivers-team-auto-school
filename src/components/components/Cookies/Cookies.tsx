import React from "react";
import "./styles.css";

const Cookies = () => {
	return (
		<section className="ezy__cookies8  pt-16 pb-8 lg:pt-24 lg:pb-12 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-12 md:px-20 lg:px-28">
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12 md:col-start-2 md:col-end-12">
						<div className="shadow-2xl bg-white dark:bg-[#1E2735]">
							<div className="grid grid-cols-12 gap-4 justify-between p-6 xl:p-12">
								<div className="col-span-12 lg:col-span-9">
									<h4 className="text-[28px] leading-10 font-semibold mb-2">
										Cookies Settings
									</h4>
									<p className="text-base leading-6 opacity-80 mb-4">
										By clicking "Accept", you agree to the storing of cookies on
										your device to enhance site navigation...
									</p>
								</div>
								<div className="col-span-12 lg:col-span-3">
									<div className="flex flex-row lg:flex-col xl:flex-row justify-start items-center h-full">
										<button className="text-white bg-black font-semibold px-6 py-2">
											Accept
										</button>
										<button className="bg-black bg-opacity-10 font-semibold px-6 py-2 ml-2 lg:ml-0 xl:ml-2 lg:mt-3 xl:mt-0">
											Decline
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cookies;

