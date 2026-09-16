import Button from "../Button/Button";
import DashboardPreview from "../DashboardPreview/DashboardPreview";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-[#0B0B0B] text-white font-['Space_Grotesk']">
      <div className="w-360 min-h-225 bg-neutral-950 inline-flex flex-col justify-start items-center">
        <div className="self-stretch h-20 px-20 py-6 inline-flex justify-between items-center">
          <div className="w-28 h-8 relative overflow-hidden">
            <div className="w-9 h-8 left-0 top-[1.88px] absolute outline-2 outline-offset-1 outline-white" />
            <div className="size-2.5 left-0 top-[1.88px] absolute bg-white" />
            <div className="size-2.5 left-[23.93px] top-[21.51px] absolute bg-white" />
            <div className="left-[47.87px] top-0 absolute justify-start text-white text-lg font-bold font-['Space_Grotesk']">
              nexpay
            </div>
          </div>
          <div className="size- flex justify-start items-center gap-2">
            <div className="size- px-4 py-2 flex justify-start items-start">
              <div className="justify-start text-zinc-300 text-base font-medium font-['Space_Grotesk']">
                Products
              </div>
            </div>
            <div className="size- px-4 py-2 flex justify-start items-start">
              <div className="justify-start text-zinc-300 text-base font-medium font-['Space_Grotesk']">
                Solutions
              </div>
            </div>
            <div className="size- px-4 py-2 flex justify-start items-start">
              <div className="justify-start text-zinc-300 text-base font-medium font-['Space_Grotesk']">
                Pricing
              </div>
            </div>
            <div className="size- px-4 py-2 flex justify-start items-start">
              <div className="justify-start text-zinc-300 text-base font-medium font-['Space_Grotesk']">
                Company
              </div>
            </div>
          </div>
          <div className="size- px-5 py-2.5 bg-slate-500 rounded-md flex justify-start items-center">
            <div className="justify-start text-neutral-950 text-sm font-bold font-['Space_Grotesk']">
              Get Started
            </div>
          </div>
        </div>
        <div className="self-stretch px-20 pt-20 pb-28 inline-flex justify-start items-center gap-20">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-12">
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="size- px-3 py-1.5 bg-slate-500/10 rounded-[100px] outline-1 outline-offset-1 outline-slate-500 inline-flex justify-start items-start">
                <div className="justify-start text-slate-500 text-xs font-bold font-['Space_Grotesk'] uppercase">
                  Now Live: Global Treasury
                </div>
              </div>
              <div className="self-stretch justify-start text-white text-6xl font-bold font-['Space_Grotesk'] leading-18.5">
                Modern financial infrastructure for growing businesses.
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-lg font-normal font-['Space_Grotesk'] leading-7">
                NexPay unites global accounts, smart routing, automated
                treasury, and card issuing into a single cohesive system.
                Replace legacy banking loops with pure performance.
              </div>
            </div>
            <div className="size- flex flex-col justify-start items-start gap-4">
              <div className="size- inline-flex justify-start items-center gap-5">
                <div className="size- px-8 py-4 bg-slate-500 rounded-lg flex justify-start items-center">
                  <div className="justify-start text-neutral-950 text-base font-bold font-['Space_Grotesk']">
                    Start your integration
                  </div>
                </div>
                <div className="size- flex justify-start items-center gap-1">
                  <div className="justify-start text-white text-base font-bold font-['Space_Grotesk']">
                    Book a demo
                  </div>
                  <div className="size-4 inline-flex flex-col justify-center items-center overflow-hidden">
                    <div className="size-4 relative overflow-hidden">
                      <div className="size-2.5 left-[3.33px] top-[3.33px] absolute outline-2 outline-offset-1 outline-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-150 p-8 bg-stone-900 rounded-[20px] shadow-[0px_32px_64px_0px_rgba(0,0,0,0.50)] outline-1 outline-offset-1 outline-zinc-800 inline-flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-between items-center">
              <div className="size- flex justify-start items-center gap-2">
                <div className="size-2 bg-green-400 rounded-full" />
                <div className="justify-start text-zinc-300 text-xs font-bold font-['Space_Grotesk'] uppercase">
                  Operational Ledger
                </div>
              </div>
              <div className="size- px-2.5 py-1 bg-neutral-900 rounded-sm flex justify-start items-start">
                <div className="justify-start text-zinc-300 text-xs font-medium font-['Space_Grotesk']">
                  Last 30 Days
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="justify-start text-zinc-500 text-xs font-normal font-['Space_Grotesk'] uppercase">
                Primary Account Balance
              </div>
              <div className="size- inline-flex justify-start items-baseline gap-3">
                <div className="justify-start text-white text-4xl font-bold font-['Space_Grotesk']">
                  $2,481,920.40
                </div>
                <div className="justify-start text-green-400 text-sm font-medium font-['Space_Grotesk']">
                  USD
                </div>
              </div>
            </div>
            <div className="self-stretch p-4 bg-neutral-900 rounded-xl outline-1 outline-offset-1 outline-zinc-800 flex flex-col justify-start items-start gap-3">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="justify-start text-zinc-300 text-xs font-medium font-['Space_Grotesk']">
                  Cash Flow Forecast
                </div>
                <div className="justify-start text-green-400 text-xs font-normal font-['Space_Grotesk']">
                  +14.8% Projected Growth
                </div>
              </div>
              <div className="self-stretch h-14 relative">
                <div className="w-126 h-0 left-0 top-[15px] absolute border border-neutral-800"></div>
                <div className="w-126 h-0 left-0 top-[45px] absolute border border-neutral-800"></div>
                <div className="w-5 h-0 left-[2.5px] top-[40px] absolute origin-top-left rotate-[22deg] border-2 border-slate-500"></div>
                <div className="w-6 h-0 left-[21px] top-[10px] absolute origin-top-left -rotate-12 border-2 border-slate-500"></div>
                <div className="w-7 h-0 left-[43px] top-[28px] absolute origin-top-left rotate-[15deg] border-2 border-slate-500"></div>
                <div className="w-28 h-0 left-[288px] top-[10px] absolute origin-top-left rotate-[-25deg] border-2 border-slate-500"></div>
                <div className="w-28 h-0 left-[387px] top-[24px] absolute origin-top-left rotate-[5deg] border-2 border-slate-500"></div>
                <div className="size-1.5 left-[84px] top-[7px] absolute bg-slate-500 rounded-full" />
                <div className="size-1.5 left-[288px] top-[7px] absolute bg-slate-500 rounded-full" />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-1">
              <div className="justify-start text-zinc-500 text-xs font-bold font-['Space_Grotesk'] uppercase">
                Recent Transactions
              </div>
              <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch py-3 border-b border-zinc-800 inline-flex justify-between items-center">
                  <div className="size- flex justify-start items-center gap-3">
                    <div className="size-9 bg-neutral-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex flex-col justify-center items-center">
                      <div className="size-4 flex flex-col justify-center items-center overflow-hidden">
                        <div className="size-4 relative overflow-hidden">
                          <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-2 outline-offset-[-1px] outline-zinc-300" />
                        </div>
                      </div>
                    </div>
                    <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-white text-sm font-medium font-['Space_Grotesk']">
                        Stripe Payout
                      </div>
                      <div className="justify-start text-zinc-500 text-xs font-normal font-['Space_Grotesk']">
                        Processing Revenue
                      </div>
                    </div>
                  </div>
                  <div className="justify-start text-green-400 text-sm font-bold font-['Space_Grotesk']">
                    +$42,150.00
                  </div>
                </div>
                <div className="self-stretch py-3 border-b border-zinc-800 inline-flex justify-between items-center">
                  <div className="size- flex justify-start items-center gap-3">
                    <div className="size-9 bg-neutral-900 rounded-2xl outline-1 outline-offset-1 outline-zinc-800 inline-flex flex-col justify-center items-center">
                      <div className="size-4 flex flex-col justify-center items-center overflow-hidden">
                        <div className="size-4 relative overflow-hidden">
                          <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline-2 outline-offset-1 outline-zinc-300" />
                        </div>
                      </div>
                    </div>
                    <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-white text-sm font-medium font-['Space_Grotesk']">
                        Amazon Web Services
                      </div>
                      <div className="justify-start text-zinc-500 text-xs font-normal font-['Space_Grotesk']">
                        Infrastructure
                      </div>
                    </div>
                  </div>
                  <div className="justify-start text-white text-sm font-bold font-['Space_Grotesk']">
                    -$12,840.12
                  </div>
                </div>
                <div className="self-stretch py-3 border-b border-zinc-800 inline-flex justify-between items-center">
                  <div className="size- flex justify-start items-center gap-3">
                    <div className="size-9 bg-neutral-900 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-800 inline-flex flex-col justify-center items-center">
                      <div className="size-4 flex flex-col justify-center items-center overflow-hidden">
                        <div className="size-4 relative overflow-hidden">
                          <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline outline-2 outline-offset-[-1px] outline-zinc-300" />
                        </div>
                      </div>
                    </div>
                    <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-white text-sm font-medium font-['Space_Grotesk']">
                        Gusto Payroll
                      </div>
                      <div className="justify-start text-zinc-500 text-xs font-normal font-['Space_Grotesk']">
                        Salaries &amp; Benefits
                      </div>
                    </div>
                  </div>
                  <div className="justify-start text-white text-sm font-bold font-['Space_Grotesk']">
                    -$85,000.00
                  </div>
                </div>
                <div className="self-stretch py-3 border-b border-zinc-800 inline-flex justify-between items-center">
                  <div className="size- flex justify-start items-center gap-3">
                    <div className="size-9 bg-neutral-900 rounded-2xl outline-1 outline-offset-1 outline-zinc-800 inline-flex flex-col justify-center items-center">
                      <div className="size-4 flex flex-col justify-center items-center overflow-hidden">
                        <div className="size-4 relative overflow-hidden">
                          <div className="size-3.5 left-[1.50px] top-[1.50px] absolute outline-2 outline-offset-1 outline-zinc-300" />
                        </div>
                      </div>
                    </div>
                    <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                      <div className="justify-start text-white text-sm font-medium font-['Space_Grotesk']">
                        WeWork Corp
                      </div>
                      <div className="justify-start text-zinc-500 text-xs font-normal font-['Space_Grotesk']">
                        Office Space Lease
                      </div>
                    </div>
                  </div>
                  <div className="justify-start text-white text-sm font-bold font-['Space_Grotesk']">
                    -$3,200.00
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
export default Hero;
